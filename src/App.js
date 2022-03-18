import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import {BroswerRoute as Router, Routes} from "react-router-dom"
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
