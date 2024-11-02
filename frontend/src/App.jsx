import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center bg-[#FAEBD7] relative'>
      <div className="absolute top-4 left-4 text-4xl font-bold">
        chat<span className="text-red-500">MIT</span>
      </div>

      <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
			</Routes>
      <Toaster />
    </div>
  )
}

export default App
