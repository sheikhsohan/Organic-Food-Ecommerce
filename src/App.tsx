import BannerMiddle from "./components/BannerMiddle"
import Blog from "./components/Blog"
import Category from "./components/Category"
import FeatureBreakfastSection from "./components/FeatureBreakfastSection"
import FeatureFruitsSection from "./components/FeatureFruitsSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureFruitsSection />
      <FeatureBreakfastSection />
      <BannerMiddle />
      <Blog />
      <NewsLetter />
      <FeaturesSection />
      <Footer />
    </main>
  )
}

export default App