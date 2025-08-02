# 🚀 CodeButterfly.art - Next.js Deployment Guide for Namecheap

## 📋 What You Need to Upload

**Upload ONLY the contents of the `out` folder to your Namecheap hosting!**

### 📁 Files to Upload:
- `index.html` (main page)
- `404.html` (error page)
- `.htaccess` (server configuration)
- `_next/` folder (static assets)
- `projects/` folder (project pages)
- `Landing/` folder (landing page)
- `404/` folder (error page assets)

## 🔧 Upload Instructions

### Step 1: Access Your Namecheap Hosting
1. Log into your Namecheap account
2. Go to **Hosting** → **Manage**
3. Click **File Manager** or use **FTP**

### Step 2: Navigate to Root Directory
- Go to `public_html/` (or `www/`)
- **Delete all existing files** (if any)

### Step 3: Upload Files
1. **Download `deployment.zip`** from your project folder
2. **Upload and extract** `deployment.zip` to `public_html/`
3. **Make sure** the `.htaccess` file is uploaded (it might be hidden)

### Step 4: Set Permissions
- Set `.htaccess` to **644**
- Set folders to **755**
- Set files to **644**

## 🌐 Your Website URLs

After upload, your website will be available at:
- **Main site**: `https://purescan.info/`
- **Projects page**: `https://purescan.info/projects/`
- **Individual projects**: `https://purescan.info/projects/[id]/`

## ✅ Verification Checklist

- [ ] All files from `out` folder uploaded
- [ ] `.htaccess` file is present
- [ ] Website loads at `https://purescan.info/`
- [ ] Navigation works (Home, About, Services, Portfolio, Contact)
- [ ] Projects page loads at `/projects/`
- [ ] No file explorer showing (proper routing)

## 🛠️ Troubleshooting

### If you still see file explorer:
1. **Check `.htaccess` file** - make sure it uploaded correctly
2. **Verify file permissions** - `.htaccess` should be 644
3. **Contact Namecheap support** - ask them to enable `.htaccess` files

### If pages don't load:
1. **Check file structure** - all files should be in `public_html/`
2. **Verify `.htaccess`** - should be in root directory
3. **Clear browser cache** - try incognito mode

### If images don't load:
1. **Check `_next/` folder** - should contain static assets
2. **Verify image URLs** - should be relative paths

## 🔄 Next.js vs Create React App

**Important**: This is a **Next.js** application, NOT a Create React App. The deployment process is different:

- ✅ **Next.js**: Uses `npm run build` → creates `out/` folder → upload static files
- ❌ **Create React App**: Uses `npm run build` → creates `build/` folder → upload static files

## 📞 Need Help?

If you encounter issues:
1. Check this guide again
2. Contact Namecheap support
3. Verify all files are uploaded correctly

## 🎉 Success!

Once everything works, your beautiful CodeButterfly.art website will be live at `https://purescan.info/`! 🦋✨ 