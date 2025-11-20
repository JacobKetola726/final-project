
"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function StoreClient() {
    const { addItem } = useCart();

    function handleAdd(product) {
        addItem(product);
    }

    const cardStyles = {
            padding: '1rem', 
            border: '1px solid #ccc', 
            borderRadius: '12px',
            maxWidth: "350px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
    }

    return (
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={cardStyles}>
                <h2>Buy the BBL System</h2>
                <p>The finest (and only) bathroom beverage revolver system known to man.</p>
                <Image src="/images/material-cad.png" alt="Material BBL CAD" width={800} height={400} style={{ width: '25%', height: 'auto', borderRadius: 16, marginBottom: '2rem' }} />
                <p>$49.99</p>
                <button 
                    onClick={() => handleAdd({
                        id: "bbl-system",
                        name: "Bathroom Beverage Leverage System",
                        price: 49.99
                    })}
                    style={{
                        padding: '0.5rem 1rem',
                        marginTop: '1rem',
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        Add to Cart
                    </button>
                </div>

                <div style={cardStyles}>
                    <h2>Recomended Drinks</h2>
                    <p>LaCroix</p>
                    <Image src="/images/lacroix.jpeg" alt="Material BBL CAD" width={800} height={400} style={{ width: '25%', height: 'auto', borderRadius: 16, marginBottom: '2rem' }} />
                    <p>$4.39</p>
                    <button 
                    onClick={() => handleAdd({
                        id: "drink",
                        name: "canned drink",
                        price: 4.39
                    })}
                    style={{
                        padding: '0.5rem 1rem',
                        marginTop: '1rem',
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        Add to Cart
                    </button>
                </div>         
        </div>

    );
}