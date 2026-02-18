import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    setError('')
    if(!email || !password){ setError('Please enter email and password'); return }
    // fake auth for demo
    localStorage.setItem('rfd_token', 'demo-token')
    localStorage.setItem('rfd_user', JSON.stringify({email}))
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md card">
        <h2 className="text-2xl font-semibold mb-2">Welcome back</h2>
        <p className="text-sm text-gray-500 mb-6">Sign in to access your dashboard</p>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full p-2 border rounded-lg" type="email" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 w-full p-2 border rounded-lg" type="password" />
          </div>
          <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-2 rounded-lg">Login</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link></p>
      </div>
    </div>
  )
}
