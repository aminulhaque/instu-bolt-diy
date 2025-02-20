import React from 'react'
import { Home, Tag, LogIn, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 md:relative md:top-0">
      <div className="flex justify-around items-center py-3 max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          to="/brands" 
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Tag className="w-6 h-6" />
          <span className="text-xs mt-1">Brands</span>
        </Link>
        <Link 
          to="/login" 
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <LogIn className="w-6 h-6" />
          <span className="text-xs mt-1">Login</span>
        </Link>
        <Link 
          to="/signup" 
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <UserPlus className="w-6 h-6" />
          <span className="text-xs mt-1">Sign Up</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
