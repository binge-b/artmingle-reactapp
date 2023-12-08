import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center justify-between">
        
        <nav className="md:ml-auto text-base">
          <a href="#pickup" className="mr-7 hover:text-blue-400 duration-300">Login</a>
          <a href="#latest" className="mr-7 hover:text-blue-400 duration-300">運営会社</a>
          <a href="#report" className="mr-7 hover:text-blue-400 duration-300">利用規約</a>
          <a href="#login" className="hover:text-blue-400 duration-300">Contact</a>
        </nav>
        <a href="#home" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-3xl mx-5  hover:text-blue-400 duration-300">ArtMingle</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer