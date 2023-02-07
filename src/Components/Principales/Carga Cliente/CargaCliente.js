import React, { useState } from "react";  
import { read, utils,} from 'xlsx'; // para poder exportar el xls se debe importar esta dependencia " writeFile"
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
                    setdataCliente(rows)
                    setdataCliente2(rows2)
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }



    function Enviar () {
        
    let dataClienteFilter = dataCliente.map(item => {
        let dateString = new Date((item.FechaInicio - 25568) * 24 * 60 * 60 * 1000).toUTCString();
        let jsDate = new Date(dateString);
        let dateString2 = new Date((item.FechaTermino - 25568) * 24 * 60 * 60 * 1000).toUTCString();
        let jsDate2 = new Date(dateString2);
        let dateString3 = new Date((item.FechaCompra - 25568) * 24 * 60 * 60 * 1000).toUTCString();
        let jsDate3 = new Date(dateString3);
        let dateString4 = new Date((item.FechaVencimiento - 25568) * 24 * 60 * 60 * 1000).toUTCString();
        let jsDate4 = new Date(dateString4);
        return {...item, FechaInicio: jsDate, FechaTermino: jsDate2, FechaCompra: jsDate3, FechaVencimiento: jsDate4};
    });

    console.log(dataClienteFilter, dataCliente2);

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

    const dataClienteFiltered = dataCliente.map(row => {
        Object.keys(row).forEach(key => {
            if(!row[key]) {
                delete row[key];
            }
        });
        return row;
    });


  /*   const handleExport = () => {  // funcion para exportar el archivo xls
        const headings = [[
            'Empresa',
            'Encargado',
            'Curso',
            'Inscritos',
            'Valor',
            "Nombre",
            "Rut",
            "Correo",
        ]];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, dataCliente, { origin: 'A2', skipHeader: true });
        utils.book_append_sheet(wb, ws, 'Report');
        writeFile(wb, 'dataCliente Report.xlsx');
    } */

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
                            <button onClick={Enviar} className="btn btn-primary float-right">
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
                                <th scope="col">Fecha de Inicio</th>
                                <th scope="col">Fecha de Termino</th>
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
                                            <td>{ data.FechaInicio}</td>
                                            <td>{ data.FechaTermino}</td>
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
