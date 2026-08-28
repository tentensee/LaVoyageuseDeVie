import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import Tarifs from './components/Tarifs';
import Secteur from './components/Secteur';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Tarifs />
        <Secteur />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}