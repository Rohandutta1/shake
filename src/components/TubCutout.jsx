export default function TubCutout() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[44px] bg-black/10 blur-2xl" />
      <div className="relative h-[250px] w-[310px]">
        <div className="absolute left-1/2 top-[45%] h-[170px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-[22px] bg-gradient-to-b from-white to-white/70 shadow-soft" />
        <div className="absolute left-1/2 top-[46%] h-[142px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] bg-shake-ink/95" />
        <div className="absolute left-1/2 top-[40%] w-[120px] -translate-x-1/2 text-center">
          <div className="text-[10px] font-semibold tracking-[0.28em] text-white/70">SHAKE</div>
          <div className="mt-1 text-xl font-black tracking-tight text-shake-lime">WHEY+</div>
          <div className="mt-1 text-[11px] font-semibold text-white/70">Vanilla</div>
        </div>
        <div className="absolute left-[55%] top-[52%] h-[110px] w-[250px] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-[42px] bg-gradient-to-b from-shake-lime to-[#98ffb0] shadow-soft ring-1 ring-black/10" />
        <div className="absolute left-[55%] top-[52%] h-[110px] w-[250px] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-[42px] bg-gradient-to-b from-black/5 to-black/0" />
        <div className="absolute left-[40%] top-[38%] h-3 w-3 rounded-full bg-black/30" />
      </div>
    </div>
  )
}
