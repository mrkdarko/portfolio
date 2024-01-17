import './App.css'
import NavigationBar from './Navbar'
import Home from "./pages/Home"
import Experience from "./pages/experience"
import {Routes, Route, HashRouter} from "react-router-dom"

function App() {
  return (
    <>
    <HashRouter>
     <div id = "content">
     <NavigationBar></NavigationBar>
     <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Home" element = {<Home/>}/>
      <Route path = "/Experience" element = {<Experience/>}/>
     </Routes>
     </div>
     </HashRouter>
    </>
  )
}

export default App
