
"use client";

import { useCart } from '../context/CartContext'

export default function CartPage() {
    const { cart, removeItem, clearCart } = useCart()

    async function handleCheckout() {
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                body: JSON.stringify(cart)
            })
            const data = await res.json()
            alert(data.message + ' Total: $' + data.orderTotal)
            clearCart()
        } catch (err) {
            console.error(err)
            alert('Checkout failed')
        }
    }

    return (
        <main>
            <section style={{ padding: 28 }}>
                <h1>Your Cart</h1>
                {cart.length === 0 ? <p>Your cart is empty</p> :
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {cart.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
                                <div>
                                    <strong>{item.name}</strong>
                                    <p>${item.price?.toFixed(2) || '0.00'} x {item.qty || 1}</p>
                                </div>
                                <button onClick={() => removeItem(item.id)} style={{ background: 'red', color: 'white', padding: '0.4rem 1rem', border: 'none', cursor: 'pointer' }}>Remove</button>
                            </div>
                        ))}
                        <button onClick={handleCheckout} style={{ marginTop: 12, padding: '10px 16px', background: 'green', color: 'white', border: 'none', borderRadius: 6 }}>Checkout</button>
                    </div>
                }
            </section>
        </main>
    )
}