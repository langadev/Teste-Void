import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-zinc-900 w-full h-screen flex justify-center items-center flex-col gap-4">
   <Link className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 text-white rounded-lg shadow-md w-52 text-center" to={'/login'}>Login</Link>
    </div>
  );
}
