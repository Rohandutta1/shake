import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { classNames } from '../utils/classNames'
import heroImage from '../assets/hero.png'

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
    <section className="w-full pb-10">
      <div className="w-full rounded-none bg-[#1f4f3f] px-4 py-10 text-white shadow-soft sm:px-10">
        <div className="flex items-start justify-between gap-10">
          <button
            onClick={() => navigate('/products')}
            className="text-[32px] sm:text-[36px] font-black uppercase tracking-tight text-white hover:text-[#ffd900] transition-colors cursor-pointer text-left leading-none"
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
              //onMouseLeave={() => setHoveredIndex(1)} // Reset to PLANT
              className={classNames(
                'relative flex w-full items-center justify-between rounded-[999px] px-4 py-3 sm:px-10 transition-all duration-300 cursor-pointer',
                hoveredIndex === index ? 'bg-[#ffd900] text-shake-ink' : 'bg-[#234f41] text-white',
              )}
            >
              <div className="text-[20px] font-black uppercase tracking-tight">{r.label}</div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white">
                <div
                  className={classNames(
                    'grid h-7 w-7 place-items-center rounded-full text-[10px] font-black transition-all duration-300',
                    hoveredIndex === index ? 'bg-[#1f4f3f] text-white' : 'bg-[#ffd900] text-shake-ink',
                  )}
                >
                  ↗
                </div>
              </div>

              {hoveredIndex === index && (
                <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-[10%] -translate-y-1/2 transition-all duration-300 z-20 pointer-events-none">
                  <img
                    src={heroImage}
                    alt="Product preview"
                    className="h-full w-full object-contain drop-shadow-2xl"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
