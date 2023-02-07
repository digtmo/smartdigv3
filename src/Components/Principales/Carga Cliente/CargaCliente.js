import React, { useState } from "react";  
import { read, utils,} from 'xlsx'; 
import "./CargaCliente.css"
import axios from "axios";
import moment from 'moment';

const CargaCliente = () => {
    const [dataCliente, setdataCliente] = useState([]);
    const [dataCliente2, setdataCliente2] = useState([]);

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    const rows2 = utils.sheet_to_json(wb.Sheets[sheets[1]]);
                    setdataCliente2(rows2)
                    const dataClienteFilter = rows.map(item => { // con esta funcion se modifica el formato de la fecha para que se pueda imprimir en pantalla 
                        let dateString = new Date((item.FechaInicio - 25568) * 24 * 60 * 60 * 1000).toUTCString();
                        let jsDate = new Date(dateString);
                        let jsdatev1 = moment(jsDate).subtract(10, 'days').calendar() 
                        let dateString2 = new Date((item.FechaTermino - 25568) * 24 * 60 * 60 * 1000).toUTCString();
                        let jsDate2 = new Date(dateString2);
                        let jsdatev2 = moment(jsDate2).subtract(10, 'days').calendar() 
                        let dateString3 = new Date((item.FechaCompra - 25568) * 24 * 60 * 60 * 1000).toUTCString();
                        let jsDate3 = new Date(dateString3);
                        let jsdatev3 = moment(jsDate3).subtract(10, 'days').calendar() 
                        let dateString4 = new Date((item.FechaVencimiento - 25568) * 24 * 60 * 60 * 1000).toUTCString();
                        let jsDate4 = new Date(dateString4);
                        let jsdatev4 = moment(jsDate4).subtract(10, 'days').calendar() 
                        return {...item, FechaInicio: jsdatev1, FechaTermino: jsdatev2, FechaCompra: jsdatev3, FechaVencimiento: jsdatev4};
                    });
                    setdataCliente(dataClienteFilter)

                }
            }
            reader.readAsArrayBuffer(file);
        }
    }

    
    const dataClienteFiltered = dataCliente.map(row => {
        Object.keys(row).forEach(key => {
            if(!row[key]) {
                delete row[key];
            }
        });
        return row;
    });

    console.log("datacliente3",dataCliente, "dataclientefiltered",dataClienteFiltered)



function enviar () {

    console.log(dataCliente,dataCliente2)
      /*     
    axios({
        method: 'post',
        url: "cargausarioscliente/",  
        data: dataCliente,dataCliente2Fechas             
    }) 
        .then(function (response) {
            if (response.status === 200){
                const Info = response.data
                console.log("Informacion enviada exitosamente :",Info)
            }})
        .catch(function(error){
            console.log("Error de Petición", error)
        }) 
*/


}
  

    return (
        <>
            <div className="row mb-2 mt-5">
                <div className="col-sm-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">                
                                <div className="custom-file">
                                    <input type="file" name="file" className="custom-file-input" id="customFileLang" required onChange={handleImport} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" lang="es"/>
                                    <label className="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button onClick={enviar} className="btn btn-primary float-right">
                                Cargar 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                <h2>Tabla de Cliente</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Empresa</th>
                                <th scope="col">Rut Empresa</th>
                                <th scope="col">N° Factura</th>
                                <th scope="col">Fecha de Compra</th>
                                <th scope="col">Fecha de Vencimiento</th>
                                <th scope="col">Encargado</th>
                                <th scope="col">Correo</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Fecha Inicio</th>
                                <th scope="col">Fecha Termino</th>
                                <th scope="col">Inscritos</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {
                                    dataClienteFiltered.length
                                    ?
                                    dataClienteFiltered.map((data) => (
                                        <tr>
                                            <td className={data.Empresa ? '' : 'empty-cell'}>{ data.Empresa }</td>
                                            <td className={data.RutEmpresa ? '' : 'empty-cell'}>{ data.RutEmpresa }</td>
                                            <td className={data.NumeroFactura ? '' : 'empty-cell'}>{ data.NumeroFactura }</td>
                                            <td className={data.FechaCompra ? '' : 'empty-cell'}>{ data.FechaCompra}</td>
                                            <td className={data.FechaVencimiento ? '' : 'empty-cell'}>{ data.FechaVencimiento}</td>
                                            <td className={data.Encargado ? '' : 'empty-cell'}>{ data.Encargado}</td>
                                            <td className={data.Email ? '' : 'empty-cell'}>{ data.Email}</td>
                                            <td className={data.SKU ? '' : 'empty-cell'}>{ data.SKU }</td>
                                            <td className={data.FechaInicio ? '' : 'empty-cell'}>{ data.FechaInicio }</td>
                                            <td className={data.FechaTermino ? '' : 'empty-cell'}>{ data.FechaTermino }</td> 
                                            <td className={data.Inscritos ? '' : 'empty-cell'}>{ data.Inscritos }</td>
                                            <td className={data.Valor ? '' : 'empty-cell'}>{ data.Valor }</td> 
                                            <td className={data.Estado ? '' : 'empty-cell'}>{ data.Estado }</td>                
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No dataCliente Found.</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
            </div>

            
            <div className="row">
                <div className="col-sm-6 offset-3">
                <h2>Tabla de Alumnos</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Rut</th>
                                <th scope="col">Correo</th>
                                <th scope="col">SKU</th>
                            </tr>
                        </thead>
                        <tbody> 
                               
                                 {
                                    dataCliente2.length
                                    ?
                                    dataCliente2.map((data, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ index + 1 }</th>
                                            <td>{ data.Nombre }</td>
                                            <td>{ data.Rut }</td>
                                            <td>{ data.Correo }</td>
                                            <td>{ data.SKUAlumnos}</td>                         
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No dataCliente Found.</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};


export {CargaCliente}
