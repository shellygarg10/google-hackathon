import React from 'react'

const Navbar = () => {
  return (
    <div>
       <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">Portal</h1>
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            Logout
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
