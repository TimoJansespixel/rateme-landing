# Images Directory

This directory contains all image assets for your landing page.

## 📁 Image Structure

```
assets/images/
├── logo.png              # Your app logo (140x42px)
├── phone-mockup.png      # App screenshot for phone mockup (280x560px)
├── about-image.png       # About section image (500x400px)
├── hero-bg.png          # Hero background (optional)
├── icons/               # Feature icons directory
│   ├── feature-1.png    # Feature icon 1 (48x48px)
│   ├── feature-2.png    # Feature icon 2 (48x48px)
│   ├── feature-3.png    # Feature icon 3 (48x48px)
│   └── feature-4.png    # Feature icon 4 (48x48px)
└── README.md            # This file
```

## 🖼️ Required Images

### 1. Logo
- **File**: `logo.png`
- **Size**: 140x42px (or higher resolution)
- **Format**: PNG with transparency
- **Usage**: Navigation bar and footer

### 2. App Screenshots
- **File**: `phone-mockup.png`
- **Size**: 280x560px (phone mockup size)
- **Format**: PNG or JPG
- **Usage**: Hero section phone mockup

### 3. About Section Image
- **File**: `about-image.png`
- **Size**: 500x400px or larger
- **Format**: PNG or JPG
- **Usage**: About section illustration

### 4. Feature Icons
- **Directory**: `icons/`
- **Size**: 48x48px (or 64x64px for higher resolution)
- **Format**: PNG with transparency
- **Usage**: Feature cards

## 📐 Recommended Image Sizes

| Image Type | Width | Height | Format | Purpose |
|------------|-------|--------|--------|---------|
| Logo | 140px | 42px | PNG | Navigation |
| Phone Mockup | 280px | 560px | PNG/JPG | Hero section |
| About Image | 500px | 400px | PNG/JPG | About section |
| Feature Icons | 48px | 48px | PNG | Feature cards |
| Hero Background | 1920px | 1080px | PNG/JPG | Background (optional) |
| Favicon | 32px | 32px | ICO | Browser tab |

## 🎨 Image Optimization Tips

### 1. File Formats
- **PNG**: For logos, icons, and images with transparency
- **JPG**: For photographs and complex images
- **WebP**: For better compression (modern browsers)
- **SVG**: For scalable icons and logos

### 2. Compression
- **Tools**: TinyPNG, ImageOptim, Squoosh
- **Goal**: Under 100KB for most images
- **Quality**: 80-90% for JPG, 8-bit for PNG

### 3. Responsive Images
```html
<!-- Multiple sizes for different screens -->
<img src="assets/images/logo.png" 
     srcset="assets/images/logo@2x.png 2x, 
             assets/images/logo@3x.png 3x"
     alt="Your App Logo">
```

## 🔧 How to Update Image References

### 1. Update HTML (index.html)

```html
<!-- Replace logo -->
<img src="assets/images/logo.png" alt="Your App Logo" class="logo">

<!-- Replace phone mockup -->
<div class="phone-screen">
    <img src="assets/images/phone-mockup.png" alt="App Screenshot">
</div>

<!-- Replace about image -->
<img src="assets/images/about-image.png" alt="About Us" class="about-preview">

<!-- Replace feature icons -->
<div class="feature-icon">
    <img src="assets/images/icons/feature-1.png" alt="Feature 1">
</div>
```

### 2. Update CSS (styles.css)

```css
/* Custom background image */
.hero {
    background-image: url('assets/images/hero-bg.png');
    background-size: cover;
    background-position: center;
}

/* Custom logo styling */
.logo {
    background-image: url('assets/images/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
}
```

## 📋 Image Checklist

- [ ] **Logo** (140x42px, PNG with transparency)
- [ ] **App Screenshots** (280x560px, high quality)
- [ ] **About Image** (500x400px, relevant to your app)
- [ ] **Feature Icons** (48x48px, consistent style)
- [ ] **Favicon** (32x32px, ICO format)
- [ ] **Hero Background** (optional, 1920x1080px)
- [ ] **Optimized file sizes** (under 100KB each)
- [ ] **Alt text** added to all images

## 🚀 Quick Implementation

1. **Add your logo**: `assets/images/logo.png`
2. **Add app screenshots**: `assets/images/phone-mockup.png`
3. **Add about image**: `assets/images/about-image.png`
4. **Add feature icons**: `assets/images/icons/feature-*.png`
5. **Update HTML references**: Replace placeholder URLs
6. **Test on different devices**: Ensure images load properly

## 💡 Image Best Practices

### 1. Naming Convention
- Use lowercase with hyphens: `app-logo.png`
- Include size in filename: `logo-140x42.png`
- Use descriptive names: `hero-phone-mockup.png`

### 2. Alt Text
- Always include meaningful alt text
- Describe the image content
- Keep it concise but descriptive

### 3. Loading Strategy
```html
<!-- Lazy loading for non-critical images -->
<img src="assets/images/about-image.png" 
     loading="lazy" 
     alt="About our company">

<!-- Preload critical images -->
<link rel="preload" href="assets/images/logo.png" as="image">
```

### 4. Responsive Images
```html
<!-- Picture element for multiple formats -->
<picture>
    <source srcset="assets/images/hero.webp" type="image/webp">
    <source srcset="assets/images/hero.jpg" type="image/jpeg">
    <img src="assets/images/hero.jpg" alt="Hero image">
</picture>
```

## 🔍 Testing Images

1. **Check loading**: Verify all images load in browser
2. **Test responsive**: View on different screen sizes
3. **Check performance**: Monitor loading times
4. **Validate alt text**: Ensure accessibility
5. **Test compression**: Verify file sizes are optimized

## 🎯 Image Optimization Tools

- **TinyPNG**: Online compression
- **ImageOptim**: Mac app for optimization
- **Squoosh**: Google's image optimization tool
- **Photoshop**: Professional image editing
- **Figma**: Design and export images
- **Canva**: Easy image creation and editing 