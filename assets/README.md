# Assets Directory

This directory contains all the custom assets for your landing page.

## 📁 Directory Structure

```
assets/
├── fonts/          # Custom font files
│   ├── README.md   # Font usage instructions
│   └── [your-font-files]
└── images/         # Image assets
    ├── README.md   # Image usage instructions
    └── [your-image-files]
```

## 🎨 How to Add Your Assets

### Fonts
1. **Place your font files** in the `fonts/` directory
2. **Supported formats**: `.woff2`, `.woff`, `.ttf`, `.otf`
3. **Recommended**: Use `.woff2` for best performance
4. **Update CSS**: The fonts will be automatically loaded from this directory

### Images
1. **Place your image files** in the `images/` directory
2. **Supported formats**: `.png`, `.jpg`, `.jpeg`, `.svg`, `.webp`
3. **Recommended sizes**:
   - Logo: 140x42px (or higher resolution)
   - Hero image: 400x300px or larger
   - App screenshots: 280x560px (phone mockup size)
   - Feature icons: 48x48px or larger
   - About image: 500x400px or larger

## 📝 Current Placeholder Assets

The landing page currently uses placeholder images. Replace these with your actual assets:

### Images to Replace:
- **Logo**: Currently using placeholder - add your logo to `images/logo.png`
- **Hero Phone Mockup**: Add your app screenshots to `images/phone-mockup.png`
- **About Section**: Add your company/product image to `images/about-image.png`
- **Feature Icons**: Add custom icons to `images/icons/` directory

### Fonts to Add:
- **Primary Font**: Add your brand font to `fonts/` directory
- **Fallback**: Currently using Lexend from Google Fonts

## 🔧 How to Update References

Once you add your assets, update these files:

### 1. Update HTML (index.html)
```html
<!-- Replace placeholder logo -->
<img src="assets/images/logo.png" alt="Your App Logo" class="logo">

<!-- Replace placeholder phone mockup -->
<img src="assets/images/phone-mockup.png" alt="App Screenshot" class="phone-screen">

<!-- Replace placeholder about image -->
<img src="assets/images/about-image.png" alt="About Us" class="about-preview">
```

### 2. Update CSS (styles.css)
```css
/* Add custom font */
@font-face {
    font-family: 'YourBrandFont';
    src: url('assets/fonts/your-font.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

/* Update font-family in CSS */
body {
    font-family: 'YourBrandFont', 'Lexend', sans-serif;
}
```

## 📋 Asset Checklist

- [ ] **Logo** (140x42px or larger)
- [ ] **App Screenshots** (phone mockup size)
- [ ] **About Section Image** (500x400px or larger)
- [ ] **Feature Icons** (48x48px or larger)
- [ ] **Brand Font** (.woff2 format recommended)
- [ ] **Hero Background** (optional - custom background image)

## 🚀 Quick Start

1. **Add your logo**: Place it in `assets/images/logo.png`
2. **Add app screenshots**: Place them in `assets/images/`
3. **Add your font**: Place it in `assets/fonts/`
4. **Update references**: Follow the instructions above
5. **Refresh the page**: Your assets will appear automatically

## 💡 Tips

- **Optimize images**: Use tools like TinyPNG to reduce file sizes
- **Use WebP**: For better performance, convert images to WebP format
- **Font loading**: Use `font-display: swap` for better performance
- **Responsive images**: Provide multiple sizes for different screen sizes

## 🔄 Automatic Updates

The server is running with auto-reload, so any changes you make to the assets will be reflected immediately when you refresh the browser. 