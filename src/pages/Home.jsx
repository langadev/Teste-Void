import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="bg-zinc-900 w-full h-screen flex justify-center items-center flex-col gap-4">
       <h1 className="text-3xl text-white font-semibold mb-6">Tabelas</h1>
      
      <Link 
        to={'/progresso'} 
        className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 text-white rounded-lg shadow-md w-52 text-center"
      >
        📊 Tabela de Progresso
      </Link>

      <Link 
        to={'/insumos'} 
        className="bg-green-600 hover:bg-green-500 transition px-6 py-3 text-white rounded-lg shadow-md w-52 text-center"
      >
        🌱 Tabela de Insumos
      </Link>
    </div>
  )
}

export default Home
