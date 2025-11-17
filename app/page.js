import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <section style={{ maxWidth: 980, margin: '2rem auto ' }}>
        <h2>Explore</h2>
        <ul>
          <li><Link href="/product">Product Details</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/store">Store</Link></li>
          <li><Link href="/counter">Counter Demo</Link></li>
        </ul>
      </section>
    </div>
  );
}

