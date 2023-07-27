import { BrowserRouter, Route, Routes } from "react-router-dom"
import ExperiencedUsers from "../screens/ExperiencedUsers"
import Home from "../screens/Home"
import HowTo from "../screens/HowTo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Router = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/how-to" element={<HowTo />}></Route>
            <Route exact path="/experienced" element={<ExperiencedUsers />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
  
export default Router
  