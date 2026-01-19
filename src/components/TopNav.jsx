import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const products = [
    { id: 'whey', label: 'Whey', color: '#ffd900' },
    { id: 'plant', label: 'Plant', color: '#39d98a' },
    { id: 'gainer', label: 'Gainer', color: '#1b9aaa' },
  ]

  const handleProductClick = (productId) => {
    navigate('/products', { state: { category: productId } })
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1f4f3f] ring-1 ring-black/15">
        <div className="flex w-full items-center justify-between px-4 py-4 text-white/80 sm:px-8 sm:py-5">
          <div className="hidden items-center gap-4 text-[9px] font-semibold tracking-wide sm:gap-8 sm:flex sm:text-[11px]">
            <button
              onClick={() => navigate('/products')}
              onMouseEnter={() => setHoveredProduct('all')}
              onMouseLeave={() => setHoveredProduct(null)}
              className="relative hover:text-white transition-colors duration-300 py-2"
            >
              Products
              {hoveredProduct === 'all' && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full transition-all duration-300 bg-white"
                />
              )}
            </button>
            {products.map(product => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="relative hover:text-white transition-colors duration-300 py-2"
              >
                {product.label}
                {hoveredProduct === product.id && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full transition-all duration-300"
                    style={{ backgroundColor: product.color }}
                  />
                )}
              </button>
            ))}
          </div>
          <Link to="/" className="text-sm font-black tracking-[0.1em] text-white sm:text-lg hover:text-[#ffd900] transition-colors">SHAKE</Link>
          <div className="hidden items-center gap-4 text-[9px] font-semibold tracking-wide sm:gap-8 sm:flex sm:text-[11px]">
            <button type="button" className="hover:text-white">Search</button>
            <button type="button" className="hover:text-white">Cart</button>
            <button type="button" className="hover:text-white">Wishlist</button>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="h-8 w-8 rounded-full bg-[#ffd900] flex items-center justify-center text-[#1f4f3f] font-bold text-sm hover:bg-[#ffd900]/90 transition-colors"
                  title="Profile"
                >
                  {user.email?.charAt(0).toUpperCase()}
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1a3f33] rounded-lg shadow-lg border border-white/10 z-10">
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-[12px] text-white/80 hover:text-white hover:bg-white/10 rounded-t-lg transition-colors border-b border-white/10"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={async () => {
                        await signOut()
                        navigate('/')
                        setIsProfileOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 text-[12px] text-white/80 hover:text-white hover:bg-white/10 rounded-b-lg transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-3 py-2 text-white hover:text-white hover:bg-white/10 rounded transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-2 rounded bg-[#ffd900] text-[#1f4f3f] font-semibold hover:bg-[#ffd900]/90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center gap-3">
            {user && (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="h-8 w-8 rounded-full bg-[#ffd900] flex items-center justify-center text-[#1f4f3f] font-bold text-sm hover:bg-[#ffd900]/90 transition-colors"
                  title="Profile"
                >
                  {user.email?.charAt(0).toUpperCase()}
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1a3f33] rounded-lg shadow-lg border border-white/10 z-10">
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-[12px] text-white/80 hover:text-white hover:bg-white/10 rounded-t-lg transition-colors border-b border-white/10"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={async () => {
                        await signOut()
                        navigate('/')
                        setIsProfileOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 text-[12px] text-white/80 hover:text-white hover:bg-white/10 rounded-b-lg transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-white/80 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-[#1a3f33] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider pb-2 border-b border-white/10">
                Products
              </div>
              <button
                onClick={() => {
                  navigate('/products')
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition"
              >
                All Products
              </button>
              {products.map(product => (
                <button
                  key={product.id}
                  onClick={() => {
                    handleProductClick(product.id)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition"
                >
                  {product.label}
                </button>
              ))}

              <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider pt-2 pb-2 border-t border-b border-white/10">
                Account
              </div>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Search</button>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Cart</button>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Wishlist</button>

              {user ? (
                <>
                  <div className="border-t border-white/10 pt-3 mt-3">
                    <Link
                      to="/profile"
                      className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      type="button"
                      onClick={async () => {
                        await signOut()
                        navigate('/')
                        setIsMenuOpen(false)
                      }}
                      className="w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="border-t border-white/10 pt-3 mt-3">
                    <Link
                      to="/login"
                      className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
