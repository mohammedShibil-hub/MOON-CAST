import './App.css'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { Intro } from './components/Intro'
import { ProductPage } from './pages/ProductPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { CartProvider } from './context/CartContext'
import { SellerPage } from './pages/SellerPage'
import { SellerDemo } from './pages/SellerDemo'
import { SellerDtlsForm } from './pages/SellerDtlsForm'
import { SellerDashboard } from './pages/SellerDashboard'

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
    <CartProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/startSelling' element={<SellerPage />} />
        <Route path='/sellerDemo' element={<SellerDemo />} />
        <Route path='/seller-details-form' element={<SellerDtlsForm />} />
        <Route path='/seller-dashboard' element={<SellerDashboard />} />
      </Routes>
    </CartProvider>
    </>
  )
}

export default App
