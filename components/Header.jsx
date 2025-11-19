'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header(){
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const t = localStorage.getItem('authUser')
    if(t) setUser(JSON.parse(t))
  },[])

  function logout(){
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')
    setUser(null)
    // simple reload to update client state
    window.location.href = '/'
  }

  return (
    <header style={{ padding: '18px 28px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link href='/' style={{ fontWeight: 700, fontSize: 20, textDecoration: 'none', color: '#111' }}>Preorder Shop</Link>
      </div>
      <nav style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Link href='/product'>About Product</Link>
        <Link href='/creators'>About Creators</Link>
        <Link href='/preorder'>Pre-order</Link>
        {user ? (
          <>
            <span style={{ marginLeft: 8 }}>{user.email}</span>
            <button onClick={logout} style={{ marginLeft: 8 }}>Logout</button>
          </>
        ) : (
          <>
            <Link href='/preorder?mode=login'>Login</Link>
            <Link href='/preorder?mode=register'>Sign up</Link>
          </>
        )}
      </nav>
    </header>
  )
}