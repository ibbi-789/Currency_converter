import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Converter from './components/converter.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="container bg-white h-screen w-screen mx-auto my-auto flex flex-col items-center  justify-center align-middle">
        <div className="converter bg-orange-600 shadow-lg shadow-gray-800/100 h-auto rounded-md p-10 flex flex-col  backdrop-blur-2xl ">
          <div className="title text-white font-bold text-lg">CURRENCY CONVERTER</div>
        <Converter/>
        </div>
      </div>
    </>
  )
}

export default App
