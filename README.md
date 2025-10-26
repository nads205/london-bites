# Naadir's London Bites

**Coffee. Shawarma. No chains. Just vibes.**

A minimal, mobile-friendly guide to the best independent coffee shops and shawarma spots across Inner London. Created to share curated recommendations with visiting friends who appreciate good coffee, halal eats, and hidden gems.

## 🎯 Project Overview

This is a static website featuring hand-picked independent venues across London, organized into two main categories:
- ☕ **Coffee** - Independent coffee shops and cafes
- 🌯 **Shawarma** - Halal shawarma and kebab spots

## ✨ Current Features

### Completed Functionality

1. **Homepage** (`index.html`)
   - Clean title and tagline
   - Two navigation buttons to Coffee and Shawarma sections
   - Minimalist design with black text on white background

2. **Coffee List Page** (`coffee.html`)
   - 6 curated coffee spots across Inner London
   - Each entry includes: name, neighbourhood, description, tags, and Google Maps link
   - Filter by borough (Hackney, Tower Hamlets, Islington, Southwark, Camden)
   - Filter by tags (Outdoor Seating, Open Late, Cash Only)
   - Share button to share the list with friends

3. **Shawarma List Page** (`shawarma.html`)
   - 7 curated shawarma/kebab spots
   - Each entry includes: name, neighbourhood, description, tags, and Google Maps link
   - Filter by borough (Tower Hamlets, Westminster, Islington, Camden, Kensington & Chelsea)
   - Filter by tags (Halal, Open Late, Outdoor Seating, Cash Only)
   - Share button to share the list with friends

4. **Responsive Design** (`css/style.css`)
   - Mobile-first approach
   - Clean sans-serif typography using Inter font
   - Minimal black and white aesthetic
   - Smooth transitions and hover effects
   - Optimized for phones, tablets, and desktop

5. **Interactive Features** (`js/filter.js`)
   - Borough dropdown filtering
   - Tag-based filtering (click multiple tags)
   - Combined filtering (borough + tags)
   - Share functionality (native mobile share or clipboard copy)
   - "No results" message when filters don't match any spots
   - Visual feedback with notifications

## 📁 Project Structure

```
.
├── index.html              # Homepage with navigation
├── coffee.html             # Coffee spots list
├── shawarma.html           # Shawarma spots list
├── css/
│   └── style.css          # All styles (mobile-first, minimalist)
├── js/
│   └── filter.js          # Filtering and sharing functionality
└── README.md              # This file
```

## 🚀 Functional Entry URIs

### Main Pages
- `/` or `/index.html` - Homepage with category selection
- `/coffee.html` - Coffee spots list with filters
- `/shawarma.html` - Shawarma spots list with filters

### Filter Parameters
The filter system works through client-side JavaScript:
- **Borough filter**: Dropdown selection (all boroughs or specific)
- **Tag filters**: Click to toggle (can select multiple)
- **Combined filters**: Both borough and tags work together

### Share Functionality
- Click "Share this list 🔗" button
- On mobile: Uses native share sheet
- On desktop: Copies URL to clipboard
- Shows confirmation notification

## 🎨 Design Philosophy

- **Minimalist**: Black text on white background, no unnecessary elements
- **Mobile-first**: Optimized for phone screens, scales up gracefully
- **Clean typography**: Inter font for modern, readable text
- **Fast**: No heavy images or libraries, pure HTML/CSS/JS
- **Accessible**: Semantic HTML, readable contrast, clear navigation

## 📱 Sample Data Included

### Coffee Spots (6)
- Pavilion Cafe (Hackney)
- Smokey Beans (Islington)
- Dark Arts Coffee (Tower Hamlets)
- 40FT Brewery (Southwark)
- Lantana (Camden)
- Climpson & Sons (Hackney)

### Shawarma Spots (7)
- Tayyabs (Tower Hamlets)
- Maroush (Westminster)
- Petek (Islington)
- Lahore Kebab House (Tower Hamlets)
- Diyarbakir Kitchen (Camden)
- Comptoir Libanais (Kensington)
- Al Arez (Westminster)

## 🔧 Data Management

Currently, venue data is embedded directly in the HTML files. Each venue is structured as:

```html
<div class="list-item" data-borough="hackney" data-tags="outdoor,late">
    <h3 class="item-name">Venue Name</h3>
    <p class="item-location">Neighbourhood, Borough</p>
    <p class="item-description">One-line description</p>
    <div class="item-tags">
        <span class="tag">Tag Name</span>
    </div>
    <a href="https://maps.google.com/?q=..." class="map-link">📍 View on Maps</a>
</div>
```

### Available Tags
- ✅ Halal
- 🌙 Open Late
- 🪑 Outdoor Seating
- 💵 Cash Only

## 🎯 Features Not Yet Implemented

While the core functionality is complete, here are potential enhancements:

1. **"Naadir's Notes" Section**
   - Personal stories or detailed reviews for each spot
   - Could be added as expandable sections or separate page

2. **Image Gallery**
   - Optional photos that load on tap/click
   - Would require image hosting and lazy loading

3. **Map View**
   - Embedded Google Map showing all locations
   - Could be added as third navigation option

4. **Search Functionality**
   - Free-text search by name or description
   - Would complement existing filters

5. **User Submissions**
   - Form to suggest new spots
   - Would require backend or form service (e.g., Formspree)

6. **Ratings/Visits**
   - Personal rating system
   - "Last visited" dates
   - Would need data storage solution

## 🚀 Recommended Next Steps

1. **Add More Venues**
   - Expand coffee list (target: 15-20 spots)
   - Expand shawarma list (target: 15-20 spots)
   - Include more boroughs (Lambeth, Lewisham, etc.)

2. **Enhance Data Structure**
   - Consider moving to JSON data file for easier management
   - Or use the Table API for dynamic content management

3. **Add "Naadir's Notes"**
   - Create expandable sections for personal stories
   - Add "Why I love this place" snippets

4. **Improve Accessibility**
   - Add ARIA labels for screen readers
   - Test with accessibility tools
   - Add keyboard navigation support

5. **Performance Optimization**
   - Minify CSS and JS files
   - Add service worker for offline functionality
   - Consider lazy loading if adding images

6. **Analytics** (optional)
   - Add simple analytics to see which spots are popular
   - Track filter usage

## 💡 How to Use

1. **Browse**: Open `index.html` and select Coffee or Shawarma
2. **Filter**: Use borough dropdown or click tag buttons to filter
3. **Navigate**: Click map links to open in Google Maps
4. **Share**: Click share button to send list to friends

## 🛠️ Customization Guide

### Adding New Venues

Edit `coffee.html` or `shawarma.html` and add a new list item:

```html
<div class="list-item" data-borough="borough-name" data-tags="tag1,tag2">
    <h3 class="item-name">New Spot Name</h3>
    <p class="item-location">Neighbourhood, Borough</p>
    <p class="item-description">Your description here</p>
    <div class="item-tags">
        <span class="tag">Tag Name</span>
    </div>
    <a href="https://maps.google.com/?q=New+Spot+Name+London" target="_blank" class="map-link">📍 View on Maps</a>
</div>
```

### Adding New Tags

1. Add button in the filters section:
```html
<button class="tag-filter" data-tag="new-tag">New Tag</button>
```

2. Add tag to venue data-tags:
```html
data-tags="halal,late,new-tag"
```

3. Add tag display:
```html
<span class="tag">New Tag</span>
```

### Updating Styles

Edit `css/style.css` to customize colors, fonts, spacing, etc.

## 📝 Technical Stack

- **HTML5**: Semantic structure
- **CSS3**: Mobile-first responsive design
- **JavaScript (ES6+)**: Filtering and share functionality
- **Google Fonts**: Inter font family
- **No frameworks**: Pure vanilla JS for minimal weight

## 🌐 Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files maintaining the folder structure.

---

**Created for**: Personal use and sharing with friends  
**Maintained by**: Naadir  
**Version**: 1.0  
**Last Updated**: 2025-10-22
