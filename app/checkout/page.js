
"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const [status, setStatus] = useState(null);
    const router = useRouter();

    async function handleCheckout() {
        if (!cart || cart.length === 0) {
            alert("yourcart is empty.");
            return;
        }

        setStatus("processing");

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(cart)
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Checkout failed");
                setStatus("error");
                return;
            }

            clearCart();
            router.push("/success");
        } catch (err) {
            console.error(err);
            alert("Network error");
            setStatus("error");
        }
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div style={{ maxWidth: 900, margin: '2rem auto' }}>
            <h1>Checkout</h1>
            <p>Total: ${total.toFixed(2)}</p>

            <button onClick={handleCheckout} disabled={status === "processing"} style={{ padding: '0.5rem 1rem', background: '#16a34a', color: 'white', border: 'none', cursor: 'pointer' }}>
                {status === "processing" ? "Processing..." : "Place Order"}
            </button>
        </div>
    );
}