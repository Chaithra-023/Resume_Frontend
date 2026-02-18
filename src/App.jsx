import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Result from './pages/Result'
import ProtectedRoute from './components/ProtectedRoute'

export default function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      <Route path="/upload" element={<ProtectedRoute><Upload/></ProtectedRoute>} />
      <Route path="/result" element={<ProtectedRoute><Result/></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
  )
}
