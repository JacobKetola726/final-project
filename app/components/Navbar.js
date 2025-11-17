import Link from 'next/link';

export default function Navber(){
    return (
        <header style={{ background: '#0f172a', color: 'white', padding: '1rem 2rem' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{ fontWeight: '700' }}>
                    <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Bathroom Beverage WorldWide</Link>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/product" style={{ color: 'white'}}>Product</Link>
                    <Link href="/store" style={{ color: 'white'}}>Store</Link>
                    <Link href="/team" style={{ color: 'white'}}>Team</Link>
                    <Link href="/faq" style={{ color: 'white'}}>FAQ</Link>
                </div>
            </nav>
        </header>
    );
}