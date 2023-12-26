import type { Metadata } from 'next'
import { Footer, NavBar } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'Car Show App',
  description: 'Discover the Best Cars in the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative"> 
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
