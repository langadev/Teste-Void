import { useEffect, useState } from "react";
import axios from "axios";

const ProgressTable = () => {
  const [dados, setDados] = useState([]);
  const [semanas, setSemanas] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sonil-dev.void.co.mz/api/v4/last-week/de190ded-d23c-410c-89ac-89faf4dfb36a?=&_limit=10",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Resposta da API:", response.data);
        setDados(response.data.data.technicians);
        setSemanas(response.data.data.weeksList);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-10 w-full flex flex-col gap-5 bg-gray-900 min-h-screen">
      <h1 className="text-lg font-bold text-white">Analize-Progresso</h1>

      <form className="flex gap-2 text-white">
        <input
          className="bg-blue-950 border-[1px] py-1 px-2 rounded-md focus:outline-none"
          type="text"
          placeholder="Pesquisar..."
        />
        <select className="bg-blue-950 border-[1px] py-1 px-2 rounded-md w-[200px] focus:outline-none">
         
        </select>
        <select className="bg-blue-950 border-[1px] py-1 px-2 rounded-md w-[200px] focus:outline-none">
          
        </select>
        <select className="bg-blue-950 border-[1px] py-1 px-2 rounded-md w-[200px] focus:outline-none">
      
        </select>
      </form>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-blue-950 border border-blue-900 text-white">
          <thead className="bg-blue-900">
            <tr>
              <th className="py-3 px-4 border-b text-left">SECTOR</th>
              <th className="py-3 px-4 border-b text-left">AREA</th>
              <th className="py-3 px-4 border-b text-left">TÉCNICO</th>
              {semanas.map((week, index) => (
                <th className="py-3 px-4 border-b text-center font-medium" key={index}>
                  <span>Semana</span> <span>{index + 1}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index} className="hover:bg-blue-900 transition-colors">
                <td className="py-3 px-4 border-b">{item.sector}</td>
                <td className="py-3 px-4 border-b">{item.weeks[0].area_name}</td>
                <td className="py-3 px-4 border-b">{item.technician_name}</td>
                {item.weeks &&
                  (() => {
                    let acumulador = 0;
                    return item.weeks.map((week, i) => {
                      acumulador += week.total_records;
                      return (
                        <td key={i} className="py-3 px-4 border-b text-center">
                          <span>{week.total_records}</span>
                          <span className="px-2 ">|</span>
                          <span className="">{acumulador}</span>
                        </td>
                      );
                    });
                  })()}
              </tr>
            ))}
            <tr className="bg-blue-900">
              <td className="py-3 px-4 font-bold">Totais</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4"></td>
              {semanas.map((week, index) => (
                <td key={index} className="py-3 px-4 text-center font-bold">
                  {dados.reduce((sum, item) => sum + (item.weeks[index]?.total_records || 0), 0)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressTable;