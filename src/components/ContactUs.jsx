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

export default function ContactUs() {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full px-4 sm:px-10">
        <div className="mx-auto w-full max-w-none">
          <div className="mx-auto overflow-hidden rounded-[999px] bg-[#ffd900] shadow-soft ring-1 ring-black/10">
            <div className="flex items-center justify-between px-5 py-6 sm:px-10 sm:py-8">
              <div className="text-[20px] font-black uppercase tracking-tight text-[#1f4f3f] sm:text-[34px]">CONTACT US</div>

              <div className="flex items-center gap-3 sm:gap-6">
                <div className="hidden h-14 w-14 rounded-full bg-white/70 ring-1 ring-black/10 sm:block" />
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white sm:h-16 sm:w-16">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1f4f3f] text-sm font-black text-white sm:h-12 sm:w-12 sm:text-lg">
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
        </div>
      </div>
    </section>
  )
}
