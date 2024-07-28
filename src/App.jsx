import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testinomials from "./components/Testinomials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
        <Testinomials />
        <Footer />
      </div>
    </>
  );
}

export default App;
