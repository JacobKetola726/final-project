import dynamic from 'next/dynamic';
const StoreClient = dynamic(() => import('../components/StoreClient'), { ssr: false });

export default function StorePage() {
    return (
        <div style={{ maxWidth: 1100, margin: '2rem auto' }}>
            <h1>Store</h1>
            <StoreClient />
        </div>
    );
}