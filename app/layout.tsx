import type { Metadata } from 'next'
import ThemeController from '@/Components/ThemeController'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TresEvents',
  description: 'The best events in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        {/* <ThemeController /> */}
        {children}
      </body>
    </html>
  )
}
