import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "RateMe Mobile - Get Rated. Know Your League.",
  description: "Mobile-optimized version of RateMe landing page.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
}

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="mobile-optimized">
        {children}
      </body>
    </html>
  )
} 