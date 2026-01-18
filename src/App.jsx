import TopNav from './components/TopNav.jsx'
import PosterSection from './components/PosterSection.jsx'
import SleekGrid from './components/SleekGrid.jsx'
import ProductsBars from './components/ProductsBars.jsx'
import IntroSection from './components/IntroSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen shake-bg">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 shake-noise" />
        <TopNav />

        <PosterSection />

        <SleekGrid />
        <ProductsBars />
        <IntroSection />
        <Footer />
      </div>
    </div>
  )
}
