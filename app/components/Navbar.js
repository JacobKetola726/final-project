
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Navbar() {
    const { cart } = useCart();
    const count = cart.reduce((s, i) => s + (i.qty || 0), 0);

    return (
        <header style={{ background: 'black', color: 'white', padding: '1rem 2rem' }}>
            <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                    <Image src="/images/BBW-logo.png" alt="BBW logo" width={60} height={60} style={{ height: 'auto', borderRadius: '12px'}}/>
                    <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Bathroom Beverages WorldWide</Link>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link href="/product" style={{ color: 'white'}}>Product</Link>
                    <Link href="/store" style={{ color: 'white'}}>Store</Link>
                    <Link href="/team" style={{ color: 'white'}}>Team</Link>
                    <Link href="/faq" style={{ color: 'white'}}>FAQ</Link>
                    <Link href="/cart" style={{ color: 'white', fontWeight: '700' }}>
                        Cart {count > 0 ? `(${count})` : ""}
                    </Link>
                </div>
            </nav>
        </header>
    );
}