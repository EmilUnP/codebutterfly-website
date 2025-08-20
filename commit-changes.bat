@echo off
echo Adding files to git...
git add .

echo Committing changes...
git commit -m "feat: Added interactive carousel gallery for project detail pages - Created ImageCarousel client component with navigation arrows and thumbnails - Added keyboard navigation support (arrow keys) - Integrated carousel into project detail pages - Maintained server component compatibility for static export - Enhanced user experience with smooth transitions and cyberpunk styling"

echo Pushing to GitHub...
git push origin main

echo Done!
pause
