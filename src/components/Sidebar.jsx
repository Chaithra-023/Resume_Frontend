import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Sidebar(){
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('rfd_token')
    localStorage.removeItem('rfd_user')
    navigate('/login')
  }

  const linkClass = ({isActive}) => isActive ? 'text-white bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-lg' : 'text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100'

  return (
    <aside className="w-64 p-4">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Resume Fraud</h3>
        <p className="text-sm text-gray-500">Detection System</p>
      </div>
      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/upload" className={linkClass}>Upload Resume</NavLink>
        <NavLink to="/result" className={linkClass}>Reports</NavLink>
        <button onClick={logout} className="w-full text-left text-red-600 px-4 py-2 rounded-lg hover:bg-red-50">Logout</button>
      </nav>
    </aside>
  )
}
