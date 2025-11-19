import Header from '../components/Header'

export default function Home(){
  return (
    <main>
      <Header />
      <section style={{ padding: 28 }}>
        <h1>Welcome to Preorder Shop</h1>
        <p style={{ maxWidth: 750 }}>We make a thoughtfully designed product. Use the links above to learn about the product, the creators, or pre-order a unit.</p>
      </section>
    </main>
  )
}
