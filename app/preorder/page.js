
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AuthForm from '../components/AuthForm.jsx';
import { getAuth } from '../lib/authClient';

export const dynamic = 'force-dynamic'; // avoid prerender

export default function PreorderPageWrapper() {
    return <PreorderPage />;
}

function PreorderPage() {
    const params = useSearchParams();
    const mode = params?.get('mode') || null;

    const [authed, setAuthed] = useState(false);
    const [position, setPosition] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    if (data.user) {
                        setUser(data.user);
                        setAuthed(true);

                        // Load user's preorder position
                        const raw = localStorage.getItem('preorders');
                        const orders = raw ? JSON.parse(raw) : [];
                        const idx = orders.findIndex(o => o.userId === data.user.id);
                        if (idx !== -1) setPosition(idx + 1);
                      } else {
                        setAuthed(false);
                      }
                    } else {
                      setAuthed(false);
                    }
                } catch (err) {
                    console.error(err);
                    setAuthed(false);
                }
            }

        fetchUser();
    }, []);

    if (!authed) {
        return (
            <main>
                <section style={{ padding: 28 }}>
                    <h1>Pre-order (Sign in required)</h1>
                    <AuthForm mode={mode === 'register' ? 'register' : 'login'} />
                </section>
            </main>
        );
    }

    const handlePreorder = (e) => {
        e.preventDefault();
        if (!user) return;

        const raw = localStorage.getItem('preorders');
        const list = raw ? JSON.parse(raw) : [];

        if (!list.find(o => o.userId === user.id)) {
            list.push({ userId: user.id, email: user.email, ts: Date.now() });
            localStorage.setItem('preorders', JSON.stringify(list));
            const idx = list.findIndex(o => o.userId === user.id);
            setPosition(idx + 1);
            alert(`Pre-order placed! You are #${idx + 1} in the waitlist.`);
        } else {
            alert(`You already placed a pre-order. Your position is #${position}`);
        }
    };

    return (
        <main>
            <section style={{ padding: 28, maxWidth: 800 }}>
                {position && (
                    <div style={{ marginBottom: 20, padding: 12, background: '#f5f5f5', color: 'black', borderRadius: 8 }}>
                        You are <strong>#{position}</strong> in the waitlist.
                    </div>
                )}
                <h1>Pre-order</h1>
                <form onSubmit={handlePreorder} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <label>
                        Full name
                        <input required style={{ width: '100%', padding: 8 }} />
                    </label>
                    <label>
                        Shipping address
                        <textarea required style={{ width: '100%', padding: 8 }} />
                    </label>
                    <label>
                        Quantity
                        <input type="number" defaultValue={1} min={1} style={{ width: 120, padding: 8 }} />
                    </label>
                    <button type="submit" style={{ padding: '10px 14px' }}>Place pre-order</button>
                </form>
            </section>
        </main>
    );
}