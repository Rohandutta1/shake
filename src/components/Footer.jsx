import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#1f4f3f] text-white">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Products Section */}
            <div>
              <h3 className="text-sm font-black tracking-[0.1em] mb-4 text-[#ffd900]">PRODUCTS</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/products" 
                    className="text-xs text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Whey Protein
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products" 
                    className="text-xs text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Plant Protein
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products" 
                    className="text-xs text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Mass Gainer
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products" 
                    className="text-xs text-white/70 hover:text-white transition-colors duration-300"
                  >
                    All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-sm font-black tracking-[0.1em] mb-4 text-[#ffd900]">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    About Us
                  </button>
                </li>
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    Careers
                  </button>
                </li>
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    Press
                  </button>
                </li>
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-sm font-black tracking-[0.1em] mb-4 text-[#ffd900]">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    Help Center
                  </button>
                </li>
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    Shipping Info
                  </button>
                </li>
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    Returns
                  </button>
                </li>
                <li>
                  <button className="text-xs text-white/70 hover:text-white transition-colors duration-300 text-left">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Download Section */}
            <div>
              <h3 className="text-sm font-black tracking-[0.1em] mb-4 text-[#ffd900]">DOWNLOAD NOW</h3>
              <p className="text-xs text-white/70 mb-4">
                Get the Shake app for exclusive features and offers
              </p>
              <div className="space-y-2">
                <button className="w-full bg-black hover:bg-black/90 transition-colors duration-300 rounded-lg px-4 py-2 flex items-center justify-center gap-2 group">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/70">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </button>
                <button className="w-full bg-black hover:bg-black/90 transition-colors duration-300 rounded-lg px-4 py-2 flex items-center justify-center gap-2 group">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm1.5-.5h15v-17h-15v17zm7.5-15.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 8h8v1h-8v-1z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/70">Get it on</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <div className="text-xs font-black tracking-[0.1em] text-[#ffd900] mb-1">SHAKE</div>
                <div className="text-[10px] text-white/50">
                  Premium nutrition for peak performance
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <button className="text-white/50 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="text-white/50 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="text-white/50 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="text-center text-[10px] text-white/50">
                © {currentYear} Shake. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
