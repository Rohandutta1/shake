import { useState } from 'react'
import shakeVideo from '../assets/shake.mp4'

export default function IntroSection() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section className="w-full bg-white">
      <div className="w-full px-10 py-14">
        <div className="flex items-start justify-between gap-10">
          <div className="text-[12px] font-semibold text-black/50">Our philosophy</div>
          <div className="max-w-[760px] text-right text-[56px] font-black uppercase leading-[1.05] tracking-tight text-[#1f4f3f]">
            WE SEE PROTEIN AS MORE
            <br />
            THAN NUTRITION
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[56px] bg-[#1f4f3f]/10 ring-1 ring-black/10">
          <div className="relative h-[340px] w-full">
            <video
              src={shakeVideo}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1f4f3f]/10" />

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition hover:bg-black/30"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <button
                type="button"
                className="rounded-full bg-[#ffd900] px-10 py-5 text-[22px] font-black uppercase tracking-tight text-[#1f4f3f] ring-8 ring-white"
              >
                WATCH OUR INTRO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
