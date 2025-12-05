'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthForm({ mode = 'login' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Choose API endpoint based on mode
      const endpoint = mode === 'register' ? '/api/auth/register' : '/api/auth/login'

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed')
      }

      // Redirect to /preorder; middleware will allow access
      router.push('/preorder')

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}
    >
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 8 }}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: 8 }}
        />
      </label>

      {error && <div style={{ color: 'crimson' }}>{error}</div>}

      <button type="submit" style={{ padding: '10px 14px' }} disabled={loading}>
        {loading ? (mode === 'register' ? 'Creating…' : 'Logging in…') : (mode === 'register' ? 'Create account' : 'Login')}
      </button>
    </form>
  )
}
