# RateMe Landing Page

A modern, responsive landing page for the RateMe app built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with RateMe branding
- **Responsive**: Optimized for all device sizes
- **TypeScript**: Full type safety throughout the application
- **shadcn/ui**: Beautiful, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Performance**: Fast loading with Next.js optimizations

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks

## 🛠️ Setup Instructions

### Prerequisites

Make sure you have Node.js 18+ installed on your system.

### Installation

1. **Clone or create the project directory**
   ```bash
   mkdir rateme-landing
   cd rateme-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
rateme-landing/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── avatar.tsx       # Avatar component
│   │   ├── button.tsx       # Button component
│   │   └── modern-hero.tsx  # Hero section component
│   └── blocks/              # Page-level components
│       └── modern-hero.tsx  # Hero demo component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── components.json         # shadcn/ui configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors and Branding

The project uses CSS variables for easy customization. Main colors are defined in `app/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;     /* Main brand color */
  --background: 0 0% 100%;           /* Page background */
  --foreground: 222.2 84% 4.9%;     /* Text color */
  /* ... more variables */
}
```

### Component Props

The `Hero7` component accepts the following props:

```typescript
interface Hero7Props {
  heading?: string;           // Main headline
  description?: string;       // Subtitle text
  button?: {
    text: string;            // Button text
    url: string;             // Button link
  };
  reviews?: {
    count: number;           // Number of reviews
    avatars: {              // User avatars
      src: string;
      alt: string;
    }[];
  };
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [shadcn/ui documentation](https://ui.shadcn.com)
3. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)

---

Built with ❤️ for RateMe 