import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#e2e2e2] w-[100%] h-[100%] overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
