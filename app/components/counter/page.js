'use client';
import Counter from '../components/Counter';

export default function CounterPage() {
    return (
        <div style={{ maxWidth: 720, margin: '2rem auto' }}>
            <h1>Counter Demo (Cart Quantity)</h1>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Counter increment={1} color="#16a34a" />
                <Counter increment={2} color="#1d4ed8" />
            </div>
        </div>
    );
}