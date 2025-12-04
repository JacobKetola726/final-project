
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function StoreClient() {
    const router = useRouter();
    const { addItem } = useCart();

    // --- DRINK DATA ---
    const drinks = [
        {
            id: "cola",
            name: "Coca-Cola",
            price: 8.39,
            img: "/images/coca-cola.jpeg"
        },
        {
            id: "pepsi",
            name: "Pepsi",
            price: 8.39,
            img: "/images/pepsi.jpeg"
        },
        {
            id: "drpepper",
            name: "Dr Pepper",
            price: 8.39,
            img: "/images/drpepper.avif"
        },
        {
            id: "redbull",
            name: "Red Bull",
            price: 21.98,
            img: "/images/redbull.jpeg"
        },
        {
            id: "monster",
            name: "Monster Energy",
            price: 24.49,
            img: "/images/monster-energy.avif"
        }
    ];

    // --- SEARCH ---
    const [search, setSearch] = useState("");

    // Filter drinks
    const filteredDrinks = drinks.filter((drink) =>
        drink.name.toLowerCase().includes(search.toLowerCase())
    );

    // --- STYLES ---
    const cardStyles = {
        background: "#111",
        padding: "1.5rem",
        borderRadius: "16px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(255,255,255,0.1)"
    };

    const buttonStyle = {
        padding: "0.5rem 1rem",
        marginTop: "1rem",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };

    const handleAdd = (drink) => {
        addItem(drink);
        alert(`${drink.name} added to cart!`);
    };

    // --- IF SEARCHING: Only show filtered items ---
    const searching = search.trim().length > 0;

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>

            {/* SEARCH BAR */}
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "0.5rem 1rem",
                    width: "300px",
                    marginBottom: "2rem",
                    borderRadius: "8px",
                    border: "1px solid #444",
                    background: "#222",
                    color: "white",
                }}
            />

            {/* ONLY SHOW BBL CARD IF NOT SEARCHING */}
            {!searching && (
                <div style={{ ...cardStyles, margin: "0 auto 3rem auto" }}>
                    <h2>Bathroom Beverage Leverage System</h2>
                    <p>The finest (and only) bathroom beverage revolver system known to man.</p>

                    <Image
                        src="/images/material-cad.png"
                        alt="BBL System CAD"
                        width={400}
                        height={400}
                        style={{
                            width: "50%",
                            height: "auto",
                            borderRadius: 16,
                            marginBottom: "1rem"
                        }}
                    />

                    <p>$49.99</p>

                    <button
                        onClick={() => router.push("/preorder")}
                        style={buttonStyle}
                    >
                        Pre-Order
                    </button>
                </div>
            )}

            {/* ONLY show header if NOT searching */}
            {!searching && (
                <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
                    Recommended Drinks
                </h1>
            )}

            {/* DRINK RESULTS */}
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
            >
                {filteredDrinks.map((drink) => (
                    <div key={drink.id} style={cardStyles}>
                        <h2>{drink.name}</h2>

                        <Image
                            src={drink.img}
                            alt={drink.name}
                            width={200}
                            height={200}
                            style={{ borderRadius: 12 }}
                        />

                        <p>${drink.price.toFixed(2)}</p>

                        <button
                            onClick={() => handleAdd(drink)}
                            style={buttonStyle}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}

                {/* If searching and no results */}
                {searching && filteredDrinks.length === 0 && (
                    <p style={{ color: "white", marginTop: "2rem" }}>
                        No matching products found.
                    </p>
                )}
            </div>
        </div>
    );
}