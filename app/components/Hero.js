
import Image from "next/image";

export default function Hero() {
    return (
        <section style={{ background: 'white', color: 'black', padding: '3rem 1rem', textAlign: 'center' }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <Image src="/images/cad-model.png" alt="BBL CAD Model" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: 16, marginBottom: '2rem' }} />
            </div>

            <h1 style={{ fontSize: '2rem', margin: 0 }}>Bathroom Beverage Leverage System</h1>

            <p style={{ maxWidth: 800, margin: '1rem auto'}}>
                The cutting edge of bathroom refreshment technology - keep your beverages ice cold while you're steamy hot.
            </p>

            <p style={{ maxWidth: 800, margin: '1rem auto' }}>
                Utilizing the rotation system from a traditional revolver cylinder, this innovation maximize ease and accessibility while compromising heavily on convenience.
            </p>

            <div style={{ marginTop: '1rem' }}>
                <a href="/product" style={{ background: 'lightgray', border: '1px solid gray', borderRadius: '5px', marginRight: '1rem', padding: '0.5rem 1rem', display: 'inline-block' }}>Learn More</a>
                <a href="/store" style={{ background: 'lightgray', border: '1px solid gray', borderRadius: '5px', marginRight: '1rem', padding: '0.5rem 1rem', display: 'inline-block' }}>Shop Now</a>
            </div>
        </section>
    );
}