import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Trustees from "./pages/Trustees"
import Donate from "./pages/Donate"
import Register from "./pages/Register"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/trustees" element={<Trustees />} /> */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
