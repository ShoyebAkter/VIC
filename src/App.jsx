import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './LandingPage/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import Dashboard from './Dashboard/Dashboard'
import ProtectedRoute from './Authentication/ProtectedRoute'
import { AuthProvider } from './Authentication/Authcontext'
import './App.css'
import Appointment from './LandingPage/Appointment/Appointment'
function App() {

  return (
    <>
    <AuthProvider>
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </AuthProvider>
    </>
  )
}

export default App
