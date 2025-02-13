import { BrowserRouter, Routes, Route } from "react-router-dom"
import InsumosTable from "../components/InsumosTable"
import ProgressTable from "../components/ProgressTable"
import App from '../App'
function RouteComponent() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/progresso" element={<ProgressTable/>}/>
        <Route path="/insumos" element={<InsumosTable/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteComponent
