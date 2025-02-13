import axios from "axios";
import { useState, useEffect } from "react";

const InsumosTable = () => {
  const [data, setData] = useState([]);

  const API_TOKEN = "e114a9b42d5b4f7627b3b5f917eb81089fa7feb1d0cc9e9ddfaf3fea6efda6cd4722b82bc1e674fc7343db6ccc9d348fccc8c77d4aacadd279a751bfdd1f8f3537ef3a1e5eedf3c5a864d8b6a0918586481118e9e5865c77836b7affe6678d6a9328d7dbf85445a8b8e95886c5f6095bcf1bff9408d67fc20e457592003f5a73b807c783ff141aecc26285dd9c337f6ee12a089dd8e37d9bdea4c23b6a3bb18c3b5e197590c00372ede7553533ee7b1f86710c1536fc484649e7260f93339a4ca31e85b341799e3c1f324ec43738c4a517327f3848032bfe5c302e606689dff004504bc9bc0fbb23a8c6cf3fa51444d698e4f9021baf39539174d08b0ad22c620c64f34cc848502b173c23b5d7a99d8bf389e11858234f8cd32d105b1b70b57ebc24373b6c5678e60ea1a6cb23a2e96a80b84c775c0740dd";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sonil-dev.void.co.mz/api/v4/analytics/farm-inputs/23e9336a-b20a-4478-a58f-875cc065e871?offset=1&limit=10&filter=&phase=nurseries",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );
        console.log("Resposta da API:", response.data);
        setData(response.data.data.sectors);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  
  const totalProdutores = data.reduce((sum, row) => sum + row.totalFarmers, 0);

  const totalSementeXRecebidos = data.reduce((sum, row) => {
    const sementeX = row.packages.find((pkg) => pkg.name === "Semente X");
    return sum + (sementeX ? parseFloat(sementeX.received) : 0);
  }, 0);

  const totalSementeYRecebidos = data.reduce((sum, row) => {
    const sementeY = row.packages.find((pkg) => pkg.name === "Semente Y");
    return sum + (sementeY ? parseFloat(sementeY.received) : 0);
  }, 0);

  return (
    <div className="p-10 w-full flex flex-col gap-5 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold">Insumos</h1>

      <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
       
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Distribuído Viveiros</h2>
          <div className="flex gap-2">
            <select className="bg-blue-950 border border-blue-700 py-1 px-3 rounded-md w-20 focus:outline-none">
              <option>2024</option>
            </select>
            <select className="bg-blue-950 border border-blue-700 py-1 px-3 rounded-md w-20 focus:outline-none">
              <option>Janeiro</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border text-white">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4">Sector</th>
                <th className="py-3 px-4">Produtores</th>
                <th className="py-3 px-4">Area</th>
                <th className="py-3 px-4">Tecnico</th>
                <th colSpan={2} className="py-3 px-4 text-center">
                  Semente X
                </th>
                <th colSpan={2} className="py-3 px-4 text-center">
                  Semente Y
                </th>
              </tr>
              <tr className="text-sm">
                <th className="py-2 px-4"></th>
                <th className="py-2 px-4"></th>
                <th className="py-2 px-4"></th>
                <th className="py-2 px-4"></th>
                <th className="py-2 px-4">Distribuídos</th>
                <th className="py-2 px-4">Recebidos</th>
                <th className="py-2 px-4">Distribuídos</th>
                <th className="py-2 px-4">Recebidos</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                const sementeX = row.packages.find(
                  (pkg) => pkg.name === "Semente X"
                );
                const sementeY = row.packages.find(
                  (pkg) => pkg.name === "Semente Y"
                );

                return (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{row.name}</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4">{row.totalFarmers}</td>
                    <td className="py-3 px-4">{sementeX?.sent}</td>
                    <td className="py-3 px-4">{sementeX?.received}</td>
                    <td className="py-3 px-4">{sementeY?.sent}</td>
                    <td className="py-3 px-4">{sementeY?.received}</td>
                  </tr>
                );
              })}

              <tr className="font-semibold border-t">
                <td className="py-3 px-4" colSpan={1}>
                  Total
                </td>
                <td className="py-3 px-4">{totalProdutores}</td>
                <td className="py-3 px-4">0.00</td>
                <td className="py-3 px-4">{totalSementeXRecebidos.toFixed(2)}</td>
                <td className="py-3 px-4">0.00</td>
                <td className="py-3 px-4">{totalSementeYRecebidos.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

       
        <div className="flex justify-between mt-6">
          <button className="bg-green-600 hover:bg-green-500 transition px-6 py-2 rounded-lg shadow-md">
            Adicionar Distribuição ↑
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-2 rounded-lg shadow-md">
            Exportar Relatórios ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsumosTable;
