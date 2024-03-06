import { useState } from 'react';

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    
      <div className='bg-[#e2e2e2] w-[100%] h-[100%] overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bitcoin' element={<Home />} />
          <Route path='/ethereum' element={<Home />} />
        </Routes>
      </div>
    
  );
}

export default App;
