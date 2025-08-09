# Fonts Directory

This directory contains custom font files for your landing page.

## 📝 How to Add Your Fonts

### 1. Font File Requirements
- **Format**: `.woff2` (recommended), `.woff`, `.ttf`, `.otf`
- **Size**: Optimize fonts to reduce loading time
- **Licensing**: Ensure you have proper licenses for web use

### 2. Font File Structure
```
assets/fonts/
├── your-brand-font-regular.woff2
├── your-brand-font-bold.woff2
├── your-brand-font-light.woff2
└── README.md
```

### 3. Font Loading in CSS
Add this to your `styles.css` file:

```css
/* Custom Font Loading */
@font-face {
    font-family: 'YourBrandFont';
    src: url('assets/fonts/your-brand-font-regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'YourBrandFont';
    src: url('assets/fonts/your-brand-font-bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'YourBrandFont';
    src: url('assets/fonts/your-brand-font-light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
```

### 4. Update CSS Variables
Replace the current font-family in `styles.css`:

```css
body {
    font-family: 'YourBrandFont', 'Lexend', sans-serif;
}
```

## 🎯 Recommended Font Weights

For a complete typography system, include these weights:
- **Light (300)**: For subtle text and captions
- **Regular (400)**: For body text and general content
- **Medium (500)**: For emphasis and subheadings
- **Semi-Bold (600)**: For buttons and important text
- **Bold (700)**: For headings and strong emphasis
- **Extra Bold (800)**: For main titles and hero text

## 📊 Font Performance Tips

1. **Use WOFF2**: Best compression and browser support
2. **Font Display**: Use `font-display: swap` for faster loading
3. **Preload**: Add to HTML head for critical fonts:
   ```html
   <link rel="preload" href="assets/fonts/your-brand-font-regular.woff2" as="font" type="font/woff2" crossorigin>
   ```
4. **Subset**: Only include characters you need
5. **Optimize**: Use tools like FontSquirrel or Google Fonts

## 🔧 Font Loading Strategy

### Option 1: Progressive Loading
```css
/* Load regular first, then others */
@font-face {
    font-family: 'YourBrandFont';
    src: url('assets/fonts/your-brand-font-regular.woff2') format('woff2');
    font-weight: normal;
    font-display: swap;
}
```

### Option 2: Critical Fonts Only
```css
/* Load only essential weights initially */
@font-face {
    font-family: 'YourBrandFont';
    src: url('assets/fonts/your-brand-font-regular.woff2') format('woff2');
    font-weight: normal;
    font-display: swap;
}
```

## 📋 Font Checklist

- [ ] **Regular weight** (400) - for body text
- [ ] **Bold weight** (700) - for headings
- [ ] **Light weight** (300) - for captions (optional)
- [ ] **WOFF2 format** - for best performance
- [ ] **Optimized file size** - under 100KB per weight
- [ ] **Web license** - ensure legal use
- [ ] **Fallback fonts** - specified in CSS

## 🚀 Quick Implementation

1. **Add your font files** to this directory
2. **Update the CSS** with your font names
3. **Test on different devices** to ensure proper loading
4. **Optimize file sizes** if needed

## 💡 Font Pairing Tips

- **Sans-serif**: Clean, modern, readable
- **Serif**: Traditional, trustworthy, elegant
- **Display**: Creative, bold, attention-grabbing
- **Monospace**: Technical, precise, code-like

## 🔍 Testing Font Loading

Check browser developer tools:
1. **Network tab**: Verify font files load
2. **Console**: Look for font loading errors
3. **Performance**: Monitor loading times
4. **Rendering**: Ensure fonts display correctly 