export const metadata = {
  title: 'Preorder Shop',
  description: 'A small Next.js shop with pre-order flow and simple auth',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="global-body">
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
