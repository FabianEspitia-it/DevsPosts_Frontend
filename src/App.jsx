import {Login} from "./pages/login"
import {Register} from "./pages/register"
import {Home} from "./pages/home"
import {NotFound} from "./pages/not_found"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/*" element= {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App