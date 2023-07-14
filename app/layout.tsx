import { Metadata } from 'next'
import MainNavigation from '../src/components/navigation/main-navigation'
import '../src/styles/globals.css'

export const metadata: Metadata = {
  title: 'Welcome to my blog!',
  description: 'I am Max Klishevich. This is my blog. I post about travelling.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  )
}
