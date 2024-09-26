import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SinUp"

/* eslint-disable react/no-unknown-property */
function App() {
  

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
       </Routes>
      </div>
    </>
  )
}

export default App
