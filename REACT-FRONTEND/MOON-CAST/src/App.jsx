import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { Intro } from './components/Intro'
import { ProductPage } from './pages/ProductPage'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return() => clearTimeout(timer);
  },[])

  return (
    <>

    {showIntro && <Intro />}

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/products' element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
