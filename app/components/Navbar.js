'use client';

import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + (i.qty || 0), 0);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Fetch logged-in user on mount
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    }

    fetchUser();
  }, []);

  // Logout handler
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/login"); // redirect to login
  }

  return (
    <header style={{ background: 'black', color: 'white', padding: '1rem 2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
          <Image
            src="/images/BBW-logo.png"
            alt="BBW logo"
            width={60}
            height={60}
            style={{ height: 'auto', borderRadius: '12px' }}
          />
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            Bathroom Beverages WorldWide
          </Link>
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
          <Link href="/admin/waitlist">WaitList</Link>

          {/* Login / Logout link */}
          {user ? (
            <button
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: '1px solid white',
                color: 'white',
                padding: '4px 8px',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              Logout
            </button>
          ) : (
            <Link href="/login" style={{ color: 'white' }}>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
