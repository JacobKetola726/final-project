
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cart, removeItem } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div style={{ maxWidth: 900, margin: '2rem auto' }}>
            <h1>Your Cart</h1>

            {cart.lenth === 0 ? (
                <p>Your cart is empty. Go to the <Link href="/store">Store</Link>.</p>

            ) : (
                <>
                {cart.map(item => (
                    <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: 'rem 0', display: 'flex', justifyContent: 'space=between', alignItems: 'center' }}>
                        <div>
                            <strong>{item.name}</strong>
                            <p>${item.price.toFixed(2)} x {item.qty}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => removeItem(item.id)} style={{ background: 'red', color: 'white', padding: '0.4rem 1rem', border: 'none', cursor: 'pointer' }}>Remove</button>
                        </div>
                    </div>
                ))}

                <h2>Total: ${total.toFixed(2)}</h2>

                <Link href="/checkout" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', background: '#1d4ed8', color: 'white', borderRadius: 4 }}>
                    Proceed to Checkout
                </Link>
            </>
            )}
        </div>
    );
}