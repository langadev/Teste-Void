import { BrowserRouter, Routes, Route } from "react-router-dom"
import InsumosTable from "../components/InsumosTable"
import ProgressTable from "../components/ProgressTable"
import App from '../App'
import Login from "../pages/Login"
import Home from "../pages/Home"
function RouteComponent() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/progresso" element={<ProgressTable/>}/>
        <Route path="/insumos" element={<InsumosTable/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteComponent
