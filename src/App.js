import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyAji from './components/WhyAji/WhyAji';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import ServicesSlider from './components/Services/ServicesSlider';
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <WhyAji />
      <HowItWorks />
      <ServicesSlider />
      <Download />
      <Footer />
    </div>
  );
}

export default App;