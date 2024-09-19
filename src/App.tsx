import { Route,Routes } from "react-router"
import Home from "./pages/Home"
import ExcerciseDetail from "./pages/ExcerciseDetail"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <div  className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/exercise/:id" element={<ExcerciseDetail />} ></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
