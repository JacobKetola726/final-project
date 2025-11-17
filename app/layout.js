
import "./globals.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Bathroom Beverage Leverage System',
  description: ' Bathroom Beverage Leverage - convenience meets comedy',
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily : 'system-ui, Arial, sans-serif', margin: 0 }}>
        <Navbar />
        <main style= {{ padding: '2rem', minHeight: '70vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}