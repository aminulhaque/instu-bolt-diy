import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Unlock Student Savings with Instu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover exclusive discounts and deals tailored just for students. 
            Save money on everything from food to electronics.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/signup" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full 
              hover:bg-blue-700 transition-colors flex items-center"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/brands" 
              className="border border-blue-600 text-blue-600 px-6 py-3 
              rounded-full hover:bg-blue-50 transition-colors"
            >
              Browse Brands
            </Link>
          </div>
        </section>

        {/* Features Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Students Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">For Students</h2>
            <p className="text-gray-600">
              Access exclusive discounts from top brands. Save money on daily expenses, 
              shopping, entertainment, and more. No hidden fees, just pure savings.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ Verified Student Discounts</li>
              <li>✓ Easy Coupon Redemption</li>
              <li>✓ Wide Range of Brands</li>
            </ul>
          </div>

          {/* For Businesses Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">For Businesses</h2>
            <p className="text-gray-600">
              Reach a young, dynamic audience. Connect with students through targeted 
              marketing and exclusive offers that drive engagement and loyalty.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ Targeted Student Audience</li>
              <li>✓ Increased Brand Visibility</li>
              <li>✓ Cost-Effective Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
