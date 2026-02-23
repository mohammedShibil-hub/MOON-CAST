import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
