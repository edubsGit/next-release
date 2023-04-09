import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Lei Aberta',
  description: 'Lei Aberta',
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}