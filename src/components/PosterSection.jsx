import DiscountMarquee from './DiscountMarquee.jsx'

import heroImage from '../assets/hero.png'

export default function PosterSection() {
  return (
    <div className="w-full">
      <div className="w-full rounded-b-[56px] rounded-t-none bg-[#1f4f3f] shadow-soft ring-1 ring-black/20">
        <div className="relative px-0 pb-8 sm:px-10">
          <div className="relative overflow-hidden rounded-b-[46px] rounded-t-none bg-[#1f4f3f]">
            <div className="relative mt-0">
              <div className="relative w-full">
                <div className="pointer-events-none absolute left-1/2 top-10 z-0 w-full -translate-x-1/2 text-center sm:top-12">
                  <div className="mx-auto text-[140px] font-black uppercase leading-none text-white/95 shake-condensed sm:text-[210px]">
                    SHAKE
                  </div>
                </div>

                <div className="relative h-[420px] sm:h-[480px] lg:h-[540px]">
                  <div className="absolute inset-x-0 bottom-0 top-[170px] overflow-hidden rounded-b-[46px] rounded-t-none ring-1 ring-black/10 sm:top-[190px]">
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 780 360"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="waveGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="black" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 58 C 130 18 260 18 390 58 C 520 98 650 98 780 58 L 780 360 C 520 360 260 360 0 360 Z"
                        fill="#6fffd2"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M 0 58 C 130 18 260 18 390 58 C 520 98 650 98 780 58 L 780 360 C 520 360 260 360 0 360 Z"
                        fill="url(#waveGradient)"
                      />
                    </svg>
                  </div>

                  <div className="absolute -left-2 top-28 z-20 grid h-[92px] w-[92px] place-items-center rounded-full bg-[#ffd900] shadow-soft">
                    <div className="-rotate-12 text-center text-[16px] font-black leading-tight text-shake-ink">
                      #1 BEST
                      <br />
                      SHAKE
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-6 top-6 bottom-10 z-10 flex items-center justify-center sm:inset-x-10 sm:top-8 sm:bottom-12">
                    <img
                      src={heroImage}
                      alt="Shake hero"
                      className="max-h-full max-w-full object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.25)]"
                    />
                  </div>

                  <div className="absolute bottom-6 right-6 z-20 w-[240px] text-[10px] font-semibold leading-snug text-shake-ink/70 sm:bottom-8 sm:right-8 sm:w-[260px]">
                    <div className="mb-2 h-10 w-full rounded-sm bg-black/20" />
                    Spring-summer 2026 ready-to-mix
                    <br />
                    collection fuels your routine.
                  </div>
                </div>
              </div>

              <div className="-mt-1">
                <DiscountMarquee />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
