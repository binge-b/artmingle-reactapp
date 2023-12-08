import { useState } from 'react'
import './App.css'
import autoprefixer from 'autoprefixer'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import LikeButton from './components/LikeButton'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Interview from './components/Interview';
import Review from './components/Review';
import Login from './components/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />

      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Interview" element={<Interview />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
