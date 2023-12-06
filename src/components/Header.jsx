import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200">
    <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
      <a href="#home" className="font-medium text-gray-900 mb-4 md:mb-0">
        <span className="text-5xl ml-3  hover:text-blue-500 duration-300">ArtMingle</span>
      </a>
      {/* React-router-domする */}
      <nav className="md:ml-auto text-base">
        <a href="#pickup" className="mr-5 hover:text-blue-400 duration-300">PickUp</a>
        <a href="#latest" className="mr-5 hover:text-blue-400 duration-300">Latest</a>
        <a href="#report" className="mr-5 hover:text-blue-400 duration-300">Report</a>
        <a href="#login" className="hover:text-blue-400 duration-300">Login</a>
      </nav>
    </div>
    </header>
  )
}

export default Header