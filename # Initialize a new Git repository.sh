# Initialize a new Git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Naadir's London Bites - minimal food guide"

# Create a .gitignore file (optional but recommended)
echo "# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log" > .gitignore

# Add and commit the .gitignore
git add .gitignore
git commit -m "Add .gitignore"

# Create a GitHub repository (if you have GitHub CLI installed)
gh repo create naadir-london-bites --public --source=. --remote=origin --push

# OR manually connect to GitHub (after creating repo on GitHub.com)
git remote add origin https://github.com/YOUR_USERNAME/naadir-london-bites.git
git branch -M main
git push -u origin main
