import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center bg-[#FAEBD7] relative'>
      <div className="absolute top-4 left-4 text-4xl font-bold">
        chat<span className="text-red-500">MIT</span>
      </div>

      <Home />
    </div>
  )
}

export default App
