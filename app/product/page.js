import Header from '../../components/Header'

export default function ProductPage(){
  return (
    <main>
      <Header />
      <section style={{ padding: 28, maxWidth: 900 }}>
        <h1>About the product</h1>
        <p>The product is a premium, limited-run item — beautifully crafted and engineered. This page explains features, specs and why people love it.</p>
        <ul>
          <li>Feature A — clear benefit</li>
          <li>Feature B — clear benefit</li>
          <li>Limited quantity</li>
        </ul>
        <h2>Specs</h2>
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            <tr><td style={{ padding: 6, border: '1px solid #eee' }}>Weight</td><td style={{ padding: 6, border: '1px solid #eee' }}>350 g</td></tr>
            <tr><td style={{ padding: 6, border: '1px solid #eee' }}>Dimensions</td><td style={{ padding: 6, border: '1px solid #eee' }}>120 × 60 × 30 mm</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
