import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Price',
  description: 'Open Prices for any crypto currency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <Providers>
        <body className={inter.className}>
          {children}
        </body>
      </Providers>
    </html>
  )
}
