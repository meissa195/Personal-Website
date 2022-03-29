import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
          <Switch>

            <Route exact path="/">
                <Navbar />
                <Header />
                <Portfolio />
            </Route>

            <Route path="/about">
                <About />
            </Route>
            
          </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
