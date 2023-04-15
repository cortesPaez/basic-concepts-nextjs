import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Basic Concepts NextJS',
  description: 'Application that use features of nextjs',
  keywords: 'next, reactjs, fetch'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
