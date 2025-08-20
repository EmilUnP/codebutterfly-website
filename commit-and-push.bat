@echo off
echo Adding all changes to git...
git add .

echo.
echo Creating commit...
git commit -m "feat: Major UI/UX overhaul with 3D effects and improved navigation - Enhanced hero section with 3D animations and removed WATCH DEMO button - Improved section spacing consistency (py-24 to py-16) - Added comprehensive navigation between home and projects pages - Enhanced portfolio section with project cards and navigation links - Added services section CTA linking to portfolio - Improved projects page with navbar, footer, and clean layout - Removed redundant sections for cleaner design - Added butterfly animation in minimalist 3D style - Enhanced color palette and visual consistency across all components - FIXED: TypeScript error in projects page Navbar component"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo Done! Check your GitHub repository for the new commit.
pause
