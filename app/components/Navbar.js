
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Navbar() {
    const { cart } = useCart();
    const count = cart.reduce((s, i) => s + (i.qty || 0), 0);

    return (
        /*<header style={{ background: 'black', color: 'white', padding: '1rem 2rem' }}>*/
            <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                    <Image src="/images/BBW-logo.png" alt="BBW logo" width={60} height={60} style={{ height: 'auto', borderRadius: '12px'}}/>
                    <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Bathroom Beverages WorldWide</Link>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link href="/product">Product</Link>
                    <Link href="/store">Store</Link>
                    <Link href="/team">Team</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/cart" style={{ fontWeight: '700' }}>
                        Cart {count > 0 ? `(${count})` : ""}
                    </Link>
                    <Link href="/preorder">Pre-Order</Link>
                    <Link href="/admin/waitlist">Admin</Link>
                </div>
            </nav>
        /*</header>*/
    );
}