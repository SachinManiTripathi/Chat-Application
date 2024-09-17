import Home from "./pages/home/home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/Sinup"

/* eslint-disable react/no-unknown-property */
function App() {
  

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Login />
        <SignUp />
      </div>
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
