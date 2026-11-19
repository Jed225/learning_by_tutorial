import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

// le composant principal doit contenir tous les mini-composants
function App() {
  
  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden '>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  ) 
}

export default App
