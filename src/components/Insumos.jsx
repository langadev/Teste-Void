export default function Insumos(){
    return(
        <div>
            <h1>Insumos</h1>
            <div className="bg-blue-950 text-white py-10">
                <div className="flex justify-between">
                    <h1>Distribuicao Viveiros</h1>
                    <form action="">
                    <select className="bg-blue-950 border-[1px] py-1 rounded-sm w-[50px]" id="cars" name="carlist" form="carform">
                        <option value=""></option>
                        
                    </select>
                    <select className="bg-blue-950 border-[1px] py-1 rounded-sm w-[50px]" id="cars" name="carlist" form="carform">
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
                        <tr className=" border-[1px]">
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                        </tr>
                        <tr className="border-[1px]">
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                            <td>bode</td>
                        </tr>
                    </tbody>
                </table>
                    </div>
                
            </div>
        </div>
    )
}