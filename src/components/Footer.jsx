function NavPill({ children }) {
  return (
    <button
      type="button"
      className="rounded-full bg-white/80 px-6 py-3 text-[11px] font-black uppercase tracking-wide text-[#1f4f3f] ring-1 ring-black/10"
    >
      {children}
    </button>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-white pb-16">
      <div className="w-full px-10">
        <div className="mx-auto w-full max-w-none">
          <div className="mx-auto mt-10 w-full overflow-hidden rounded-[999px] bg-[#ffd900] shadow-soft ring-1 ring-black/10">
            <div className="flex items-center justify-between px-10 py-8">
              <div className="text-[34px] font-black uppercase tracking-tight text-[#1f4f3f]">CONTACT US</div>

              <div className="flex items-center gap-6">
                <div className="hidden h-14 w-14 rounded-full bg-white/70 ring-1 ring-black/10 sm:block" />
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1f4f3f] text-lg font-black text-white">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <NavPill>WHEY</NavPill>
            <NavPill>PLANT</NavPill>
            <NavPill>GAINER</NavPill>
            <NavPill>LAUNCH</NavPill>
          </div>

          <div className="mt-10 text-center text-[11px] font-semibold text-black/45">
            © {new Date().getFullYear()} Shake
          </div>
        </div>
      </div>
    </footer>
  )
}
