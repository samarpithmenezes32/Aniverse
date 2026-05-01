# Amazon Product Image Download Guide

This guide will help you manually download the actual anime figure images from Amazon to replace the placeholder images currently in use.

## Overview

The store features 11 anime figures with Amazon India product links. Due to Amazon's CDN authentication requirements, images cannot be automatically downloaded. Follow this guide to manually save each product image.

---

## Quick Reference: Product Links

| Figure | Character | Price | Amazon Link |
|--------|-----------|-------|-------------|
| figure1.jpg | Naruto | ₹999 | https://amzn.in/d/fgea4kZ |
| figure2.jpg | Luffy | ₹1,299 | https://amzn.in/d/3zIBXmx |
| figure3.jpg | Goku | ₹1,499 | https://amzn.in/d/bGVC4sY |
| figure4.jpg | Sasuke | ₹1,199 | https://amzn.in/d/4Va3EuG |
| figure5.jpg | Eren | ₹1,399 | https://amzn.in/d/4Mw4WqV |
| figure6.jpg | Tanjiro | ₹1,099 | https://amzn.in/d/cNfYie3 |
| figure7.jpg | Zenitsu | ₹1,099 | https://amzn.in/d/0WVNhja |
| figure8.jpg | Inosuke | ₹1,099 | https://amzn.in/d/7qj4g2j |
| figure9.jpg | Todoroki | ₹1,249 | https://amzn.in/d/53b8DXp |
| figure10.jpg | Deku | ₹1,349 | https://amzn.in/d/dk55H23 |
| figure11.jpg | Kakashi | ₹1,449 | https://amzn.in/d/e2KxeX9 |

---

## Step-by-Step Instructions

### Method 1: Right-Click Save (Recommended)

1. **Open the Product Page**
   - Click on the Amazon link for the figure (e.g., https://amzn.in/d/fgea4kZ for Naruto)
   - Wait for the page to fully load

2. **Locate the Main Product Image**
   - Find the large product image (usually on the left side of the page)
   - If there are multiple images, choose the clearest front-facing view

3. **Download the Image**
   - **Right-click** on the product image
   - Select **"Save image as..."** or **"Save picture as..."**
   - Navigate to: `d:\Guide2Anime\Aniverse\frontend\public\images\figures\`
   - Name the file exactly as shown in the table above (e.g., `figure1.jpg` for Naruto)
   - Click **Save**

4. **Verify the Download**
   - Check the file size (should be at least 20-50 KB for good quality)
   - Open the image to confirm it's the correct figure

5. **Repeat for All 11 Figures**
   - Go through each Amazon link systematically
   - Download and rename each image according to the table

### Method 2: Screenshot (Alternative)

If right-click is disabled on Amazon:

1. **Open Product Page**
   - Navigate to the Amazon link

2. **Zoom the Image**
   - Click on the product image to open the zoom/lightbox view
   - Use Amazon's image zoom feature to get the highest resolution

3. **Take Screenshot**
   - **Windows:** Press `Win + Shift + S` to open Snipping Tool
   - Select the product image area (crop tightly around the figure)
   - The screenshot is copied to clipboard

4. **Save the Screenshot**
   - Open **Paint** or any image editor
   - Paste the screenshot (`Ctrl + V`)
   - Save as: `d:\Guide2Anime\Aniverse\frontend\public\images\figures\figure1.jpg`
   - Choose **JPEG** format
   - Repeat for all figures

### Method 3: Browser DevTools (Advanced)

1. **Open Product Page**
   - Navigate to the Amazon link

2. **Open Developer Tools**
   - Press `F12` or `Ctrl + Shift + I`
   - Go to the **Elements** or **Inspector** tab

3. **Find the Image Element**
   - Click the element picker (top-left icon)
   - Click on the product image
   - Look for `<img>` tag with `src` attribute

4. **Copy Image URL**
   - Right-click the `src` URL in DevTools
   - Select **"Open in new tab"**
   - The full-resolution image opens

5. **Save the Image**
   - Right-click the image in the new tab
   - Select **"Save image as..."**
   - Save to the figures folder with the correct filename

---

## Image Requirements

### File Specifications
- **Format:** JPEG (.jpg)
- **Naming:** Exactly as listed (figure1.jpg, figure2.jpg, etc.)
- **Location:** `d:\Guide2Anime\Aniverse\frontend\public\images\figures\`
- **Recommended Size:** 400-600px width, maintaining aspect ratio
- **File Size:** 20-200 KB (balance quality and load time)

### Quality Guidelines
- ✅ Clear, high-resolution product photo
- ✅ White or transparent background preferred
- ✅ Figure centered in frame
- ✅ Good lighting, no blur
- ❌ Avoid thumbnails or low-quality images
- ❌ Don't include Amazon watermarks if possible
- ❌ Avoid images with excessive text overlays

---

## Batch Download Checklist

Use this checklist to track your progress:

- [ ] **Figure 1** - Naruto (₹999) - https://amzn.in/d/fgea4kZ
- [ ] **Figure 2** - Luffy (₹1,299) - https://amzn.in/d/3zIBXmx
- [ ] **Figure 3** - Goku (₹1,499) - https://amzn.in/d/bGVC4sY
- [ ] **Figure 4** - Sasuke (₹1,199) - https://amzn.in/d/4Va3EuG
- [ ] **Figure 5** - Eren (₹1,399) - https://amzn.in/d/4Mw4WqV
- [ ] **Figure 6** - Tanjiro (₹1,099) - https://amzn.in/d/cNfYie3
- [ ] **Figure 7** - Zenitsu (₹1,099) - https://amzn.in/d/0WVNhja
- [ ] **Figure 8** - Inosuke (₹1,099) - https://amzn.in/d/7qj4g2j
- [ ] **Figure 9** - Todoroki (₹1,249) - https://amzn.in/d/53b8DXp
- [ ] **Figure 10** - Deku (₹1,349) - https://amzn.in/d/dk55H23
- [ ] **Figure 11** - Kakashi (₹1,449) - https://amzn.in/d/e2KxeX9

---

## Verification

After downloading all images, verify them in PowerShell:

```powershell
cd d:\Guide2Anime\Aniverse\frontend\public\images\figures
ls *.jpg | Select-Object Name, Length, LastWriteTime
```

Expected output: 11 .jpg files with recent timestamps and reasonable file sizes (20KB+)

---

## Troubleshooting

### Problem: Right-click is disabled
**Solution:** Use Method 2 (Screenshot) or Method 3 (DevTools)

### Problem: Image quality is poor
**Solution:** 
- Try clicking the image to zoom before saving
- Use Amazon's image carousel to find higher quality versions
- Look for the "See all images" option on the product page

### Problem: Wrong aspect ratio
**Solution:** 
- Use an image editor to crop the image to focus on the figure
- Maintain vertical orientation (portrait mode)

### Problem: File names don't match
**Solution:** 
- Ensure exact naming: `figure1.jpg`, `figure2.jpg`, etc. (all lowercase)
- Check there are no extra spaces or characters

### Problem: Images not showing on website
**Solution:**
- Clear browser cache (`Ctrl + Shift + R`)
- Restart the development server
- Check file paths are correct

---

## Post-Download

Once all images are downloaded:

1. **Refresh the Store Page**
   - Navigate to http://localhost:3000/store
   - Hard refresh (`Ctrl + Shift + R`)
   - Verify all 11 figures display correctly

2. **Check Image Loading**
   - Open browser DevTools (F12)
   - Go to **Network** tab
   - Filter by **Images**
   - Ensure all figure1.jpg through figure11.jpg load with 200 status

3. **Test Responsiveness**
   - Check images on different screen sizes
   - Verify images maintain quality when resized

---

## Alternative Sources

If Amazon links are not accessible or images are unavailable:

### Option 1: Official Merchandise Sites
- MyAnimeStore.com
- Crunchyroll Store
- Amazon.com (US site)

### Option 2: Anime Figure Databases
- MyFigureCollection.net
- AmiAmi.com
- GoodSmile Company

### Option 3: Stock Image Sites
- Use high-quality anime figure photos from:
  - Unsplash (search "anime figure")
  - Pexels (search "anime collectible")
  - Pixabay (search "anime toy")

---

## Important Notes

⚠️ **Copyright Considerations:**
- Use product images only for personal/development purposes
- For production deployment, ensure you have proper image rights
- Consider contacting sellers for permission to use product photos
- Alternatively, use royalty-free images or take your own photos

📁 **File Management:**
- Keep a backup of original images
- Don't delete placeholder images until new ones are verified
- Document image sources for future reference

🔄 **Updates:**
- Product images may change on Amazon
- Periodically check if higher quality images are available
- Update images as needed to maintain quality

---

## Quick Tips

💡 **Efficiency Tips:**
1. Open all 11 Amazon links in separate browser tabs first
2. Download images in order (figure1 → figure11)
3. Use keyboard shortcuts to speed up the process
4. Double-check filenames before saving (typos will break the website)

⚡ **Time Estimate:**
- Method 1 (Right-click): ~5-10 minutes for all 11 images
- Method 2 (Screenshot): ~15-20 minutes for all 11 images
- Method 3 (DevTools): ~10-15 minutes for all 11 images

---

## Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Verify you're in the correct directory
3. Ensure file permissions allow saving files
4. Try a different browser if images won't save

---

**Last Updated:** November 3, 2025  
**Target Directory:** `d:\Guide2Anime\Aniverse\frontend\public\images\figures\`  
**Total Images:** 11 anime figures  
**File Format:** JPEG (.jpg)
