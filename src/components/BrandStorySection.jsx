import React, { useMemo } from 'react'
import proteinHero from '../assets/protein_shake_hero.png'

export default function BrandStorySection() {
    const text = "DIVE INTO A WORLD WHERE EVERY STEP IS A STATEMENT OF STYLE AND COMFORT WITH OUR EXQUISITE SHAKE BRAND ★ "
    const repeated = useMemo(() => new Array(8).fill(text), [])

    return (
        <section className="w-full bg-[#f3f1ea] py-12 overflow-hidden border-y border-[#1f4f3f]/10">
            {/* ROW 1 - Right to Left (Matching Discount) */}
            <div className="relative flex items-center mb-0">
                <div className="flex w-max items-center whitespace-nowrap shake-marquee">
                    {repeated.map((t, idx) => (
                        <div key={idx} className="flex items-center px-4">
                            <span className="text-[60px] sm:text-[100px] lg:text-[130px] font-black uppercase text-[#1f4f3f] shake-condensed leading-none">
                                {t}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ROW 2 - Right to Left (Matching Discount) */}
            <div className="relative flex items-center -mt-2 sm:-mt-4">
                <div className="flex w-max items-center whitespace-nowrap shake-marquee" style={{ animationDelay: '-40s' }}>
                    {repeated.map((t, idx) => (
                        <div key={idx} className="flex items-center px-4">
                            <span className="text-[60px] sm:text-[100px] lg:text-[130px] font-black uppercase text-[#1f4f3f]/10 shake-condensed leading-none">
                                {t}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
