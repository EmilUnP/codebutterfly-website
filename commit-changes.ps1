Write-Host "Adding files to git..." -ForegroundColor Green
git add .

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "feat: Added interactive carousel gallery for project detail pages - Created ImageCarousel client component with navigation arrows and thumbnails - Added keyboard navigation support (arrow keys) - Integrated carousel into project detail pages - Maintained server component compatibility for static export - Enhanced user experience with smooth transitions and cyberpunk styling"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "Done!" -ForegroundColor Green
Read-Host "Press Enter to continue"
