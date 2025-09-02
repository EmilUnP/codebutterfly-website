import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { generatePageMetadata } from '@/lib/seo-config'

const inter = Inter({ subsets: ['latin'] })

// Generate metadata for the home page
export const metadata: Metadata = generatePageMetadata('home', 'en')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 