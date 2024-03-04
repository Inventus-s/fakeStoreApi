import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-full flex">
        

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
