import React, { useState } from 'react'
import { 
  Search, Grid, List, 
  Book, Coffee, ShoppingCart, Truck, 
  Laptop, Scissors, Heart, 
  Umbrella, Dumbbell, Printer, 
  Headphones, Brush, Car, 
  Smartphone, Leaf, Award, Star
} from 'lucide-react'

interface Brand {
  id: number
  name: string
  category: string
  subcategory: string
  discount: number
  description: string
  logo: React.ElementType
  bannerColor: string
}

const mockBrands: Brand[] = [
  {
    id: 1,
    name: 'BookWorm',
    category: 'Learning',
    subcategory: 'Books',
    discount: 25,
    description: 'Unlock academic success with our extensive collection of discounted textbooks and study resources.',
    logo: Book,
    bannerColor: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Campus Cafe',
    category: 'Learning',
    subcategory: 'Food & Drinks',
    discount: 15,
    description: 'Fuel your study sessions with our student-friendly meal deals and premium coffee selections.',
    logo: Coffee,
    bannerColor: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Student Essentials',
    category: 'Learning',
    subcategory: 'Essentials',
    discount: 20,
    description: 'Elevate your academic journey with top-quality stationery and study supplies at unbeatable prices.',
    logo: ShoppingCart,
    bannerColor: 'bg-purple-500'
  },
  // ... (rest of the previous brands with added bannerColor)
]

const BrandsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (brandId: number) => {
    setFavorites(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId) 
        : [...prev, brandId]
    )
  }

  const categories = Array.from(new Set(mockBrands.map(brand => brand.category)))

  const filteredBrands = mockBrands.filter(brand => 
    (selectedCategory ? brand.category === selectedCategory : true) &&
    (brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     brand.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
     brand.subcategory.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and View Mode Section - Kept from previous design */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative flex-grow mr-4">
          <input 
            type="text" 
            placeholder="Search brands..." 
            className="w-full px-4 py-2 border rounded-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          >
            <Grid />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          >
            <List />
          </button>
        </div>
      </div>

      {/* Category Filter Section - Kept from previous design */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button 
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 rounded-full text-sm ${!selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All Categories
        </button>
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Brand Cards Grid/List */}
      <div className={`
        ${viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' 
          : 'space-y-4'
        }
      `}>
        {filteredBrands.map(brand => {
          const LogoIcon = brand.logo
          const isFavorite = favorites.includes(brand.id)

          return (
            <div 
              key={brand.id} 
              className={`
                relative bg-white rounded-xl shadow-lg 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-xl
                ${viewMode === 'list' ? 'flex items-center' : ''}
              `}
            >
              {/* Banner with Overlap Logo */}
              <div className={`
                ${brand.bannerColor} 
                absolute top-0 left-0 right-0 h-16 
                rounded-t-xl
              `}></div>

              {/* Favorite Button */}
              <button 
                onClick={() => toggleFavorite(brand.id)}
                className={`
                  absolute top-2 right-2 z-10 
                  p-2 rounded-full 
                  ${isFavorite 
                    ? 'bg-yellow-100 text-yellow-500' 
                    : 'bg-white/20 text-white hover:bg-white/40'}
                `}
              >
                <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>

              {/* Card Content */}
              <div className={`
                relative pt-8 p-4 
                ${viewMode === 'list' ? 'flex items-center space-x-6 w-full' : ''}
              `}>
                {/* Logo */}
                <div className={`
                  absolute -top-8 left-1/2 transform -translate-x-1/2
                  bg-white p-3 rounded-full shadow-lg
                  ${viewMode === 'list' ? 'static transform-none mr-4' : ''}
                `}>
                  <LogoIcon className="w-12 h-12 text-blue-500" />
                </div>

                {/* Brand Details */}
                <div className={`
                  ${viewMode === 'grid' ? 'text-center mt-8' : 'flex-grow'}
                `}>
                  {/* Category Badge */}
                  <div className={`
                    inline-block px-3 py-1 rounded-full text-xs font-semibold
                    bg-blue-100 text-blue-800 mb-2
                    ${viewMode === 'grid' ? 'mx-auto' : ''}
                  `}>
                    {brand.subcategory}
                  </div>

                  {/* Brand Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {brand.name}
                  </h3>

                  {/* Discount */}
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block font-bold mb-2">
                    {brand.discount}% OFF
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-2">
                    {brand.description}
                  </p>

                  {/* Additional Info */}
                  <div className="text-xs text-gray-500 italic">
                    Student Exclusive
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BrandsPage
