import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
