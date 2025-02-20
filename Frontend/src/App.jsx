import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import LocateDonor from "./pages/LocateDonor";
import RegisterDonation from "./pages/RegisterDonation";
import About from "./pages/About";

function App() {
  useEffect(()=>{
    alert("Backend Integration is in progress...")
  },[])
  return (
    <div className="app">
      <Header />
      
      <main>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/locate-donor" element={<LocateDonor />} />
          <Route path="/" element={<RegisterDonation />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
