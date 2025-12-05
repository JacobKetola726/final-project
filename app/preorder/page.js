
'use client'


import AuthForm from '../components/AuthForm.jsx'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getAuth } from '../lib/authClient'

export default function PreorderContent(){
    return (
        <Suspense>
            <PreorderContent />
        </Suspense>
    );
}

export default function PreorderPage() {
    const params = useSearchParams()
    const mode = params.get('mode') || null

    const [authed, setAuthed] = useState(false)
    const [position, setPosition] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const a = getAuth()
        setAuthed(Boolean(a))
        setUser(a)
        if (a) {
            const raw = localStorage.getItem('preorders')
            const orders = raw ? JSON.parse(raw) : []
            const idx = orders.findIndex(o => o.userId === a.id)
            if (idx !== -1) setPosition(idx + 1)
        }
    }, [])

    if (!authed) {
        return (
            <main>
                <section style={{ padding: 28 }}>
                    <h1>Pre-order (Sign in required)</h1>
                    <AuthForm mode={mode === 'register' ? 'register' : 'login'} />
                </section>
            </main>
        )
    }

    return (
        <main>
            <section style={{ padding: 28, maxWidth: 800 }}>
                {position && (
                    <div style={{ marginBottom: 20, padding: 12, background: '#f5f5f5', color: 'black', borderRadius: 8 }}>
                        You are <strong>#{position}</strong> in the waitlist.
                    </div>
                )}
                <h1>Pre-order</h1>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!user) return
                        const raw = localStorage.getItem('preorders')
                        const list = raw ? JSON.parse(raw) : []
                        if (!list.find(o => o.userId === user.id)) {
                            list.push({ userId: user.id, email: user.email, ts: Date.now() })
                            localStorage.setItem('preorders', JSON.stringify(list))
                            const idx = list.findIndex(o => o.userId === user.id)
                            setPosition(idx + 1)
                            alert('Pre-order placed! You are #' + (idx + 1) + ' in the waitlist.')
                        } else {
                            alert('You already placed a pre-order. Your position is #' + position)
                        }
                    }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
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
    )
}