import { useMemo } from 'react'

export default function DiscountMarquee() {
  const repeated = useMemo(() => new Array(10).fill('DISCOUNT 50% OUT NOW'), [])
  return (
    <div className="mt-5 rounded-[46px] bg-[#ffd900] px-4 py-5 shadow-soft ring-4 ring-shake-ink/60">
      <div className="overflow-hidden">
        <div className="flex min-w-[200%] items-center gap-10 whitespace-nowrap shake-marquee">
          {repeated.map((t, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="text-[34px] font-black uppercase tracking-tight text-shake-ink">{t}</span>
              <span className="text-[34px] font-black text-shake-ink">*</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
