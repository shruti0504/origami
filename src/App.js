/*import React from "react";
import Footer from './components/Footer';
//import Testimonial from './components/Testimonial'; jar takaych asel tar khali pan tak
import FAQ from './components/FAQ';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardCarousel from "./components/CardCarousel";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CardCarousel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
// import Testimonial from './components/Testimonial'; // Keep as commented if not required
import FAQ from './components/FAQ';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardCarousel from "./components/CardCarousel";
import EnrollPage from "./components/EnrollPage"; // New Component for Enroll
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CardCarousel />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/enroll" element={<EnrollPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
