import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Banner from './components/Banner/Banner'


function App() {
    return (
      <div className="App">
          <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
    </div>
    );
  }
  
  export default App;
  