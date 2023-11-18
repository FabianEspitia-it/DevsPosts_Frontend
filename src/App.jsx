import {Login} from "./pages/login"
import {Register} from "./pages/register"
import {Home} from "./pages/home"
import {NotFound} from "./pages/not_found"
import {Posts} from "./pages/posts"
import { CreatePost } from "./pages/create_post"
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
          <Route path="/posts" element = {<Posts/>}/>
          <Route path="/posts/create" element = {<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App