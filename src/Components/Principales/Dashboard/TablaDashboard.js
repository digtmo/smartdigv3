import React, {useMemo,  useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';



function enviarCorreo(correo, nombre, curso) {
  // Construye la dirección de correo electrónico con los detalles especificados
  let direccion = `mailto:${correo}?subject=Aviso de término de curso&body=Estimado ${nombre},%0D%0A%0D%0ALe recordamos que debe continuar con el avance de su curso Excel Avanzado.%0D%0A%0D%0ASaludos,%0D%0A[Tu nombre]`; 

  // Abre la aplicación de correo electrónico del usuario y crea un nuevo correo con la dirección especificada
  window.open(direccion);
}
/* 
const dataApi = [
    {name:"Cristobal Torres",correo:"ctorres@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[0].correo,dataApi[0].name,dataApi[0].curso)}> <EmailIcon/> </Link>},
    {name:"David Torres",correo:"dtorres@gmail.com", status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate: <a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[1].correo,dataApi[1].name,dataApi[1].curso)}> <EmailIcon/> </Link>},
    {name:"Hector Merino",correo:"hmerino@gmail.com",status:"Aprobado", progress:"100", score:"69", datacompleted:"01/11/2022", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ==">Descargar</a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[2].correo,dataApi[2].name,dataApi[2].curso)}> <EmailIcon/> </Link>},
    {name:"Valeria Salas",correo:"vsalas@gmail.com", status:"Iniciado", progress:"40", score:"46", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[3].correo,dataApi[3].name,dataApi[3].curso)}> <EmailIcon/> </Link>},
    {name:"Fernando Garces",correo:"fgarces@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[4].correo,dataApi[4].name,dataApi[4].curso)}> <EmailIcon/> </Link>},
    {name:"Lucas Campos",correo:"campos@gmail.com",status:"Aprobado", progress:"100", score:"89", datacompleted:"07/11/2022", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ==">Descargar</a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[5].correo,dataApi[5].name,dataApi[5].curso)}> <EmailIcon/> </Link>},
    {name:"Vicente Marticorena",correo:"vmarticorenas@gmail.com",status:"Iniciado", progress:"50", score:"55", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[6].correo,dataApi[6].name,dataApi[6].curso)}> <EmailIcon/> </Link>},
    {name:"Lucas Campos",correo:"campos@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[7].correo,dataApi[7].name,dataApi[7].curso)}> <EmailIcon/> </Link>},
    {name:"Hector Merino",correo:"hmerino@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[8].correo,dataApi[8].name,dataApi[8].curso)}> <EmailIcon/> </Link>},
    {name:"Felipe Oneto",correo:"foneto@gmail.com",status:"Iniciado", progress:"34", score:"20", datacompleted:"", certificate:"", EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[9].correo,dataApi[9].name,dataApi[9].curso)}> <EmailIcon/> </Link>},
    {name:"Gino Bujes",correo:"gbujes@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:"", EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[10].correo,dataApi[10].name,dataApi[10].curso)}> <EmailIcon/> </Link>},
    {name:"Nicolas Ponce",correo:"nponce.nogales@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[11].correo,dataApi[11].name,dataApi[11].curso)}> <EmailIcon/> </Link>},
    {name:"lukas vejares",correo:"lukasvejaresvalenzuela@gmail.com", status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate: <a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[12].correo,dataApi[12].name,dataApi[12].curso)}> <EmailIcon/> </Link>},
    {name:"Valeria Salas",correo:"vsalas@gmail.com", status:"Iniciado", progress:"40", score:"46", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[13].correo,dataApi[13].name,dataApi[13].curso)}> <EmailIcon/> </Link>},
    {name:"Fernando Garces",correo:"fgarces@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[14].correo,dataApi[14].name,dataApi[14].curso)}> <EmailIcon/> </Link>},
    {name:"Vicente Marticorena",correo:"vmarticorenas@gmail.com",status:"Iniciado", progress:"50", score:"55", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>, EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[15].correo,dataApi[15].name,dataApi[15].curso)}> <EmailIcon/> </Link>},
    {name:"Felipe Oneto",correo:"foneto@gmail.com",status:"Iniciado", progress:"34", score:"20", datacompleted:"", certificate:"", EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[16].correo,dataApi[16].name,dataApi[16].curso)}> <EmailIcon/> </Link>},
    {name:"Gino Bujes",correo:"gbujes@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:"", EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[17].correo,dataApi[17].name,dataApi[17].curso)}> <EmailIcon/> </Link>},
    {name:"Felipe Oneto",correo:"foneto@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:"", EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[18].correo,dataApi[18].name,dataApi[18].curso)}> <EmailIcon/> </Link>},
    {name:"Gino Bujes",correo:"gbujes@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:"", EnviarCorreo: <Link  onClick={() => enviarCorreo(dataApi[19].correo,dataApi[19].name,dataApi[19].curso)}> <EmailIcon/> </Link>},
  ] */


const TablaDashboard = () => {
  const [dataApi, setDataApi] = useState("");
  useEffect(() => {
      axios({
          method: 'get',
          url: "tabla4consulta/",                
      }) 
          .then(function (response) {
              if (response.status === 200){
                  setDataApi(response.data)
                  console.log(response)
              }})
          .catch(function(error){
              console.log("Error de Petición", error)
          }) 
  },[])

  
  
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'nombre', //access nested data with dot notation
          header: 'Nombre',
        },
        /*{
        accessorKey: 'correo', //normal accessorKey
        header: 'Correo',
        },*/
        {
            accessorKey: 'estadoparcial',
            header: 'Estado',
        },
        {
          accessorKey: 'progresocurso',
          header: 'Progreso',
        },
        {
            accessorKey: 'notacurso',
            header: 'Puntaje',
          },
        {
          accessorKey: 'download_url',
          header: 'Certificado',
        },
        {
          accessorKey: 'EnviarCorreo',
          header: 'Enviar Correo',
        },
      ],
      [],
    );

    /* const [rowSelection, setRowSelection] = useState < RowSelectionState > {};
    useEffect(() => {
      //do something when the row selection changes...
      console.info({ rowSelection });
    }, [rowSelection]); */


  
    return <MaterialReactTable   
    renderTopToolbarCustomActions={({ table }) => {
      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
/*           alert('Enviar correo a? ' + row.getValue('name'));
 */          enviarCorreo(row.getValue('correo'),row.getValue('name'),dataApi[1].curso);
        });
      };

      /*return (
        /*<div style={{ display: 'flex', gap: '0.5rem' }}>
          
          <Button
            color="info"
            disabled={table.getSelectedRowModel().flatRows.length === 0}
            onClick={handleContact}
            variant="contained"
          >

          <ListItemIcon>
            <Send /> &nbsp;Enviar Correo
          </ListItemIcon>
          </Button>
        </div>
      );*/
    }}
    columns ={columns} 
    data={dataApi}  
    enableColumnActions={false} 
    enableColumnFilters={false} 
    enableHiding={false}
    /*enableRowSelection={true}
 /*    getRowId={(row) => row.userId} //give each row a more useful id
    onRowSelectionChange={setRowSelection} //connect internal row selection state to your own
    state={{ rowSelection }} //pass our managed row selection state to the table to use */
    />

  };
  
  export {TablaDashboard};