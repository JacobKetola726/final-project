
import "../app/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "Bathroom Beverage Leverage System",
  description: "Bathroom Beverage Leverage - convienience meets comedy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <CartProvider>
          <Navbar />
          <main style={{ padding: '2rem', minheight: '70vh' }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}