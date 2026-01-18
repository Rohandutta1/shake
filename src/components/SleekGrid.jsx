import { useState } from 'react'
import { classNames } from '../utils/classNames'
import ProductDetail from './product/ProductDetail'

import proteinHero from '../assets/protein_shake_hero.png'
import proteinChocolate from '../assets/protein_shake_chocolate.png'
import proteinStrawberry from '../assets/protein_shake_strawberry.png'
import featureLifestyle from '../assets/feature_lifestyle_shake.png'

export default function SleekGrid() {
  const [selectedProductId, setSelectedProductId] = useState(null)

  const cards = [
    { id: 1, src: proteinHero, bg: 'bg-[#e9eef0]' },
    { id: 2, src: proteinChocolate, bg: 'bg-[#e6eaee]' },
    { id: 3, src: proteinStrawberry, bg: 'bg-[#ececec]' },
    { id: 4, src: featureLifestyle, bg: 'bg-[#efe6e6]' },
  ]

  return (
    <section className="w-full bg-[#f3f1ea]">
      <div className="w-full px-0 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[520px]">
            <div className="text-[44px] font-black uppercase leading-[0.9] tracking-tight text-[#1f4f3f] sm:text-[56px] lg:text-[64px]">
              BE SLEEK
              <span className="relative inline-block">
                <span className="absolute -right-5 top-2 h-10 w-10 rounded-full bg-[#ffd900] sm:-right-6 sm:top-3" />
                <span className="relative">K</span>
              </span>
              <br />
              BE CONFIDENT
            </div>
          </div>

          <div className="max-w-[320px] text-left text-[11px] font-semibold leading-snug text-black/45 sm:pt-2 sm:text-right">
            Spring-summer 2026 ready-to-mix
            <br />
            collection shines with an aura of intrigue,
            <br />
            capturing a defiant elegance.
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProductId(card.id)}
              className="group text-left"
            >
              <div
                className={classNames(
                  'relative overflow-hidden rounded-[40px] ring-1 ring-black/10 mx-4 sm:mx-0',
                  'h-[260px] sm:h-[320px] lg:h-[340px]',
                  'transition-transform duration-300 hover:scale-105 cursor-pointer',
                  card.bg,
                )}
              >
                <img
                  src={card.src}
                  alt="Shake product"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                
                {/* View Product Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-[#ffd900] text-[#1f4f3f] px-6 py-3 rounded-full font-bold text-[14px] uppercase tracking-tight">
                      View Product
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProductId && (
          <ProductDetail
            productId={selectedProductId}
            onClose={() => setSelectedProductId(null)}
            onProductSelect={(id) => setSelectedProductId(id)}
          />
        )}
      </div>
    </section>
  )
}
