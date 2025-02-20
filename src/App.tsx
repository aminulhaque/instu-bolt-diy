import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import LandingPage from './pages/LandingPage'
import BrandsPage from './pages/BrandsPage'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/brands" element={<BrandsPage />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  )
}

export default App
