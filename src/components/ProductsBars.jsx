import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { classNames } from '../utils/classNames'

export default function ProductsBars() {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(1) // Default to PLANT (index 1)

  const rows = [
    { label: 'WHEY', category: 'whey' },
    { label: 'PLANT', category: 'plant' },
    { label: 'GAINER', category: 'gainer' },
  ]

  const handleClick = (category) => {
    navigate('/products', { state: { category } })
  }

  return (
    <section className="w-full pb-24">
      <div className="w-full rounded-none bg-[#1f4f3f] px-4 py-10 text-white shadow-soft sm:px-10">
        <div className="flex items-start justify-between gap-10">
          <button
            onClick={() => navigate('/products')}
            className="text-[56px] font-black uppercase tracking-tight text-white hover:text-[#ffd900] transition-colors cursor-pointer text-left"
          >
            OUR PRODUCTS
          </button>
          <div className="max-w-[340px] text-right text-[11px] font-semibold leading-snug text-white/70">
            Clean blends with bold flavors.
            <br />
            Designed for training and recovery.
          </div>
        </div>

        <div className="relative mt-12 space-y-6 px-4 sm:px-0">
          {rows.map((r, index) => (
            <button
              key={r.label}
              onClick={() => handleClick(r.category)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(1)} // Reset to PLANT
              className={classNames(
                'relative flex w-full items-center justify-between rounded-[999px] px-4 py-10 sm:px-10 transition-all duration-300 cursor-pointer',
                hoveredIndex === index ? 'bg-[#ffd900] text-shake-ink' : 'bg-[#234f41] text-white',
              )}
            >
              <div className="text-[34px] font-black uppercase tracking-tight">{r.label}</div>
              <div className="grid h-14 w-14 place-items-center rounded-full bg-white">
                <div
                  className={classNames(
                    'grid h-11 w-11 place-items-center rounded-full text-sm font-black transition-all duration-300',
                    hoveredIndex === index ? 'bg-[#1f4f3f] text-white' : 'bg-[#ffd900] text-shake-ink',
                  )}
                >
                  ↗
                </div>
              </div>

              {hoveredIndex === index && (
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-[10%] -translate-y-1/2 overflow-hidden rounded-full bg-white/80 ring-8 ring-[#ffd900] transition-all duration-300">
                  <div className="h-full w-full bg-gradient-to-b from-shake-mint to-shake-lime" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
