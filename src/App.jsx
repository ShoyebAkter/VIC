import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './LandingPage/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
