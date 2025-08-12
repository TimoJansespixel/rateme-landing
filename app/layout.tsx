import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "RateMe - Get Rated. Know Your League.",
  description: "Join thousands waiting to see how they rank and who's in their league.",
  icons: {
    icon: "/assets/images/AppIconRateMe.png",
    apple: "/assets/images/AppIconRateMe.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-lexend">{children}</body>
    </html>
  )
} 