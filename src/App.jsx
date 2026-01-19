import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import TopNav from './components/TopNav.jsx'
import PosterSection from './components/PosterSection.jsx'
import SleekGrid from './components/SleekGrid.jsx'
import ProductsBars from './components/ProductsBars.jsx'
import IntroSection from './components/IntroSection.jsx'
import BrandStorySection from './components/BrandStorySection.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import Products from './pages/Products.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'

function Home() {
  return (
    <>
      <TopNav />
      <PosterSection />
      <BrandStorySection />
      <SleekGrid />
      <ProductsBars />
      <IntroSection />
      <ContactUs />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen shake-bg">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 shake-noise" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  )
}
