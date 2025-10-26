// Filter functionality for Coffee and Shawarma lists
document.addEventListener('DOMContentLoaded', function() {
    const boroughFilter = document.getElementById('borough-filter');
    const tagFilters = document.querySelectorAll('.tag-filter');
    const listItems = document.querySelectorAll('.list-item');
    const shareBtn = document.getElementById('share-btn');
    
    let activeTagFilters = new Set();
    
    // Borough filter functionality
    if (boroughFilter) {
        boroughFilter.addEventListener('change', function() {
            filterItems();
        });
    }
    
    // Tag filter functionality
    tagFilters.forEach(button => {
        button.addEventListener('click', function() {
            const tag = this.dataset.tag;
            
            // Toggle active state
            if (activeTagFilters.has(tag)) {
                activeTagFilters.delete(tag);
                this.classList.remove('active');
            } else {
                activeTagFilters.add(tag);
                this.classList.add('active');
            }
            
            filterItems();
        });
    });
    
    // Main filter function
    function filterItems() {
        const selectedBorough = boroughFilter ? boroughFilter.value : 'all';
        
        listItems.forEach(item => {
            const itemBorough = item.dataset.borough;
            const itemTags = item.dataset.tags ? item.dataset.tags.split(',') : [];
            
            // Check borough match
            const boroughMatch = selectedBorough === 'all' || itemBorough === selectedBorough;
            
            // Check tag match (if any tags are selected, item must have at least one)
            let tagMatch = true;
            if (activeTagFilters.size > 0) {
                tagMatch = [...activeTagFilters].some(tag => itemTags.includes(tag));
            }
            
            // Show or hide item
            if (boroughMatch && tagMatch) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
        
        // Show message if no results
        checkNoResults();
    }
    
    // Check if there are no visible results
    function checkNoResults() {
        const visibleItems = document.querySelectorAll('.list-item:not(.hidden)');
        const listContainer = document.querySelector('.list');
        
        // Remove existing no-results message
        const existingMessage = document.querySelector('.no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Add message if no results
        if (visibleItems.length === 0) {
            const message = document.createElement('div');
            message.className = 'no-results-message';
            message.style.cssText = 'padding: 40px 20px; text-align: center; color: #666; font-size: 1.1rem;';
            message.textContent = 'No spots match your filters. Try adjusting your selection.';
            listContainer.appendChild(message);
        }
    }
    
    // Share functionality
    if (shareBtn) {
        shareBtn.addEventListener('click', async function() {
            const url = window.location.href;
            const pageTitle = document.title;
            
            // Try to use native share API if available (mobile)
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: pageTitle,
                        text: 'Check out this curated list of London spots!',
                        url: url
                    });
                } catch (err) {
                    // User cancelled or error occurred
                    if (err.name !== 'AbortError') {
                        fallbackCopyToClipboard(url);
                    }
                }
            } else {
                // Fallback to copying to clipboard
                fallbackCopyToClipboard(url);
            }
        });
    }
    
    // Fallback copy to clipboard function
    function fallbackCopyToClipboard(text) {
        // Create temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            showCopyNotification('Link copied to clipboard!');
        } catch (err) {
            showCopyNotification('Failed to copy link', true);
        }
        
        document.body.removeChild(textarea);
    }
    
    // Show notification
    function showCopyNotification(message, isError = false) {
        // Remove existing notification
        const existingNotif = document.querySelector('.copy-notification');
        if (existingNotif) {
            existingNotif.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 24px;
            background-color: ${isError ? '#ff4444' : '#000000'};
            color: #ffffff;
            border-radius: 4px;
            font-size: 0.9rem;
            font-weight: 500;
            z-index: 1000;
            animation: fadeInOut 2.5s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2500);
    }
    
    // Add CSS animation for notification
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
            10% { opacity: 1; transform: translateX(-50%) translateY(0); }
            90% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
});
