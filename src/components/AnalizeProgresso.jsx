import { useEffect, useState } from "react";
import axios from "axios";

export function AnalizeProgresso() {
    const [dados, setDados] = useState([]);
    const [areas, setAreas] = useState([]);
    const NEXT_PUBLIC_API_TOKEN =
        "4a5f44c8f14e745372ad79a4bf8556a073e0f5c988d0686ded333d664de173d1a684939a2205bfbce7b6dd42a75f2b82f4c8d9776c6cf6ba9df18e2dc2291f72f06a7d739a53fe736478f7c3c720c3d5d80bd4787da4c14595ac9a910066027a0ba4c585226644302241164da42c218acc35f4ac7ac25b6b05a68d75cb499381843e4dfd99fec99fd1325493dc7610ae59e920f1c53b636687396ad9abbbbe91e4e00f777b84cd53c3fb10e254bef8d970405439eb5aabd929f9ca89861e317c0eeb8dbd4d5a49bc5ea5ed0c814e33def497ab6056a78fda1116fe2183ec7908e4eb9c2be3e6b9c28326f1b9212b723b29e81703c51af1384b463bb576c7c497dd49434f8245c3c3669bebc424c1b38a252a818a7589be60634f22e18688b1aad1fcc98c50ea0001526f5380fc6e4f5b20a8258b64b6a297";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://sonil-dev.void.co.mz/api/v4/sectors/all/de190ded-d23c-410c-89ac-89faf4dfb36a",
                    {
                        headers: {
                            Authorization: `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
                        },
                    }
                );
                setDados(response.data.data.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchAreas = async () => {
            if (dados.length > 0) {
                try {
                    const areasData = await Promise.all(
                        dados.map(async (item) => {
                            const res = await axios.get(
                                `https://sonil-dev.void.co.mz/api/v4/areas?&sector=${item.id}`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
                                    },
                                }
                            );
                            return { sectorId: item.id, areas: res.data.data };
                        })
                    );

                    
                    setAreas(areasData);
                } catch (e) {
                    console.log("Erro ao buscar as áreas:", e);
                }
            }
        };

        fetchAreas();
    }, [dados]);

    return (
        <div className="px-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-lg font-bold text-white">Analize-Progresso</h1>

                <form className="flex gap-2 text-white">
                    <input className="bg-blue-950 border-[1px] py-1 rounded-sm" type="text" />
                    <select className="bg-blue-950 border-[1px] py-1 rounded-sm w-[200px]">
                        <option value=""></option>
                    </select>
                    <select className="bg-blue-950 border-[1px] py-1 rounded-sm w-[200px]">
                        <option value=""></option>
                    </select>
                    <select className="bg-blue-950 border-[1px] py-1 rounded-sm w-[200px]">
                        <option value=""></option>
                    </select>
                </form>

                <table className="text-white border-[1px] w-full bg-blue-950">
                    <thead>
                        <tr className="border-[1px]">
                            <td>Sector</td>
                            <td>Area</td>
                            <td>Tecnico</td>
                            <td>Sector</td>
                            <td>Sector</td>
                            <td>Sector</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.length > 0 ? (
                            dados.map((item, index) => {
                                const areaData = areas.find((area) => area.sectorId === item.id);
                                return (
                                    <tr key={index} className="border-[1px]">
                                        <td>{item.name}</td>
                                        <td>{areaData ? areaData.areas.map((area, idx) => <div key={idx}>{area.name}</div>) : 'Carregando...'}</td>
                                        <td>{item.tecnico}</td>
                                        <td>{item.outroCampo1}</td>
                                        <td>{item.outroCampo2}</td>
                                        <td>{item.outroCampo3}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-2">Carregando...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
