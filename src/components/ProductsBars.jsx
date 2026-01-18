import { classNames } from '../utils/classNames'

export default function ProductsBars() {
  const rows = [
    { label: 'WHEY', highlighted: false },
    { label: 'PLANT', highlighted: true },
    { label: 'GAINER', highlighted: false },
  ]

  return (
    <section className="w-full pb-24">
      <div className="w-full rounded-none bg-[#1f4f3f] px-10 py-10 text-white shadow-soft">
        <div className="flex items-start justify-between gap-10">
          <div className="text-[56px] font-black uppercase tracking-tight text-white">OUR PRODUCTS</div>
          <div className="max-w-[340px] text-right text-[11px] font-semibold leading-snug text-white/70">
            Clean blends with bold flavors.
            <br />
            Designed for training and recovery.
          </div>
        </div>

        <div className="relative mt-12 space-y-6">
          {rows.map((r) => (
            <div
              key={r.label}
              className={classNames(
                'relative flex items-center justify-between rounded-[999px] px-10 py-10',
                r.highlighted ? 'bg-[#ffd900] text-shake-ink' : 'bg-[#234f41] text-white',
              )}
            >
              <div className="text-[34px] font-black uppercase tracking-tight">{r.label}</div>
              <div className="grid h-14 w-14 place-items-center rounded-full bg-white">
                <div
                  className={classNames(
                    'grid h-11 w-11 place-items-center rounded-full text-sm font-black',
                    r.highlighted ? 'bg-[#1f4f3f] text-white' : 'bg-[#ffd900] text-shake-ink',
                  )}
                >
                  ↗
                </div>
              </div>

              {r.highlighted && (
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-[10%] -translate-y-1/2 overflow-hidden rounded-full bg-white/80 ring-8 ring-[#ffd900]">
                  <div className="h-full w-full bg-gradient-to-b from-shake-mint to-shake-lime" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
