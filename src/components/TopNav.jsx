export default function TopNav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1f4f3f]/85 backdrop-blur-sm ring-1 ring-black/15">
        <div className="flex w-full items-center justify-between px-8 py-5 text-white/80">
          <div className="flex items-center gap-8 text-[11px] font-semibold tracking-wide">
            <button type="button" className="hover:text-white">Whey</button>
            <button type="button" className="hover:text-white">Plant</button>
            <button type="button" className="hover:text-white">Gainer</button>
            <button type="button" className="hover:text-white">Launch</button>
          </div>
          <div className="text-lg font-black tracking-[0.1em] text-white">SHAKE</div>
          <div className="flex items-center gap-8 text-[11px] font-semibold tracking-wide">
            <button type="button" className="hover:text-white">Search</button>
            <button type="button" className="hover:text-white">Cart</button>
            <button type="button" className="hover:text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </header>
  )
}
