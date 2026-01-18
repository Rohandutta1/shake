import { useState } from 'react'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Whey', category: 'products' },
    { label: 'Plant', category: 'products' },
    { label: 'Gainer', category: 'products' },
    { label: 'Launch', category: 'products' },
    { label: 'Search', category: 'actions' },
    { label: 'Cart', category: 'actions' },
    { label: 'Wishlist', category: 'actions' },
  ]

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1f4f3f] ring-1 ring-black/15">
        <div className="flex w-full items-center justify-between px-4 py-4 text-white/80 sm:px-8 sm:py-5">
          <div className="hidden items-center gap-4 text-[9px] font-semibold tracking-wide sm:gap-8 sm:flex sm:text-[11px]">
            <button type="button" className="hover:text-white">Whey</button>
            <button type="button" className="hover:text-white">Plant</button>
            <button type="button" className="hover:text-white">Gainer</button>
            <button type="button" className="hover:text-white">Launch</button>
          </div>
          <div className="text-sm font-black tracking-[0.1em] text-white sm:text-lg">SHAKE</div>
          <div className="hidden items-center gap-4 text-[9px] font-semibold tracking-wide sm:gap-8 sm:flex sm:text-[11px]">
            <button type="button" className="hover:text-white">Search</button>
            <button type="button" className="hover:text-white">Cart</button>
            <button type="button" className="hover:text-white">Wishlist</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white/80 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-[#1a3f33] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider pb-2 border-b border-white/10">
                Products
              </div>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Whey</button>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Plant</button>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Gainer</button>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Launch</button>

              <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider pt-2 pb-2 border-t border-b border-white/10">
                Account
              </div>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Search</button>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Cart</button>
              <button type="button" className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded transition">Wishlist</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
