
"use client";

import { useCart } from "../context/CartContext";

export default function StoreClient() {
    const { addItem } = useCart();

    function handleAdd() {
        addItem({
            id: "bbl-system",
            name: "Bathroom Beverage Leverage System",
            price: 49.99
        });
    }

    return (
        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
            <h2>Buy the BBL System</h2>
            <p>The finest (and only) bathroom beverage revolver system known to man.</p>
            <button 
                onClick={handleAdd}
                style={{
                    padding: '0.5rem 1rem',
                    marginTop: '1rem',
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    Add to Cart
                </button>
        </div>
    );
}