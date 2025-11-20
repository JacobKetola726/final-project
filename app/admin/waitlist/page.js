
'use client'

import { useEffect, useState } from 'react'

export default function AdminWaitlistPage() {
    const [list, setList] = useState([])

    useEffect(() => {
        const raw = localStorage.getItem('preorders')
        const orders = raw ? JSON.parse(raw) : []
        orders.sort((a, b) => a.ts - b.ts)
        setList(orders)
    }, [])

    return (
        <main>
            <section style={{ padding: 28 }}>
                <h1>Admin Waitlist View</h1>
                <table style={{ borderCollapse: 'collapse', marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ccc', padding: 8 }}>#</th>
                            <th style={{ border: '1px solid #ccc', padding: 8 }}>Email</th>
                            <th style={{ border: '1px solid #ccc', padding: 8 }}>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((o, i) => (
                            <tr key={o.userId}>
                                <td style={{ border: '1px solid #ccc', padding: 8 }}>{i + 1}</td>
                                <td style={{ border: '1px solid #ccc', padding: 8 }}>{o.email}</td>
                                <td style={{ border: '1px solid #ccc', padding: 8 }}>{new Date(o.ts).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    )
}