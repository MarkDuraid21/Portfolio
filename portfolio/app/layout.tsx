import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mark Duraid | Portfolio',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const backgroundStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a', 
  }

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
        style={backgroundStyle}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout