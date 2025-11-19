'use client'
import { useState, useEffect } from 'react'
import { register, login, getAuth } from '../lib/authClient'
import { useRouter } from 'next/navigation'

export default function AuthForm({ mode = 'login' }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(()=>{
    const a = getAuth()
    if(a) router.push('/preorder')
  },[])

  async function onSubmit(e){
    e.preventDefault()
    try{
      setError('')
      if(mode === 'register'){
        register({ email, password })
      } else {
        login({ email, password })
      }
      router.push('/preorder')
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <label>
        Email
        <input value={email} onChange={e=>setEmail(e.target.value)} required style={{ width: '100%', padding: 8 }} />
      </label>
      <label>
        Password
        <input value={password} onChange={e=>setPassword(e.target.value)} type='password' required style={{ width: '100%', padding: 8 }} />
      </label>
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
      <button type='submit' style={{ padding: '10px 14px' }}>{mode === 'register' ? 'Create account' : 'Login'}</button>
    </form>
  )
}
