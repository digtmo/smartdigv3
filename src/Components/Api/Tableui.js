import React from 'react';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';
import axios from 'axios';


let data4 = []

const Tabla2 = () => {
  const [dataApi, setDataApi] = useState("");
  useEffect(() => {
      axios({
          method: 'get',
          url: "tabla2consulta/",                
      }) 
          .then(function (response) {
              if (response.status === 200){
                  setDataApi(response.data)
                  data4.push(response.data)
              }})
          .catch(function(error){
              console.log("Error de Petición", error)
          }) 
  },[])
}



const dataApi = [
  {name:"Cristobal Torres",correo:"ctorres@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a> },
  {name:"David Torres",correo:"dtorres@gmail.com", status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate: <a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Hector Merino",correo:"hmerino@gmail.com",status:"Aprobado", progress:"100", score:"69", datacompleted:"01/11/2022", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ==">Descargar</a>},
  {name:"Valeria Salas",correo:"vsalas@gmail.com", status:"Iniciado", progress:"40", score:"46", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Fernando Garces",correo:"fgarces@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Lucas Campos",correo:"campos@gmail.com",status:"Aprobado", progress:"100", score:"89", datacompleted:"07/11/2022", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ==">Descargar</a>},
  {name:"Vicente Marticorena",correo:"vmarticorenas@gmail.com",status:"Iniciado", progress:"50", score:"55", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Lucas Campos",correo:"campos@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Hector Merino",correo:"hmerino@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Felipe Oneto",correo:"foneto@gmail.com",status:"Iniciado", progress:"34", score:"20", datacompleted:"", certificate:""},
  {name:"Gino Bujes",correo:"gbujes@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:""},
  {name:"Cristobal Torres",correo:"ctorres@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"David Torres",correo:"dtorres@gmail.com", status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate: <a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Valeria Salas",correo:"vsalas@gmail.com", status:"Iniciado", progress:"40", score:"46", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Fernando Garces",correo:"fgarces@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Vicente Marticorena",correo:"vmarticorenas@gmail.com",status:"Iniciado", progress:"50", score:"55", datacompleted:"", certificate:<a href="https://avanxa.com/certificates/?d=eyJ2ZXJpZnlfdXVpZCI6ICJmOGQwZGE4M2M3YjE0MTQzODU5MzI2MTUwMzRhZDZmZSIsICJzdGF0dXMiOiAiZG93bmxvYWRhYmxlIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJlbWFpbCI6ICJkYXZpZHRvcnJlc2ltQGdtYWlsLmNvbSIsICJjb3Vyc2VfaWQiOiAiY291cnNlLXYxOlVBdXRvbm9tYStOWUFFK0MxMS0yMDIyIiwgImNyZWF0ZWRfZGF0ZSI6ICIyMDIyLTExLTE4IDE1OjI3OjM5LjAyMzcwMSswMDowMCIsICJncmFkZSI6ICIxLjAifQ=="></a>},
  {name:"Felipe Oneto",correo:"foneto@gmail.com",status:"Iniciado", progress:"34", score:"20", datacompleted:"", certificate:""},
  {name:"Gino Bujes",correo:"gbujes@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:""},
  {name:"Felipe Oneto",correo:"foneto@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:""},
  {name:"Gino Bujes",correo:"gbujes@gmail.com",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:""},
]

/* const totalInscritos = infoImportantEstudiantesCurso.length // Cuenta los alumnos del curso
const totalCompletados = infoImportantEstudiantesCurso.filter(item => item.passed === true).length // Cuenta los alumnos que tienen passed true (curso aprobado)
const totalCompletados2= infoImportantEstudiantesCurso.filter(item => item.passed === true) // Guarda los alumnos que tienen passed true (curso aprobado)
const NotaPromedioTotalCompletados2 =  (totalCompletados2.reduce((sum, item) => sum + parseInt(item.percent*100) , 0))/totalCompletados // Promedia la nota de los alumnos que tienen passed true, ademas multiplica por 100
const totalCompletadosPorcentaje = ((totalCompletados * 100)/totalInscritos ).toFixed(1) // Entrega el porcentaje de alumnos con passed true
const alumnosEnProgreso = infoImportantEstudiantesCurso.filter(item => item.passed === false) // Guarda los alumnos que tiene passed false (no aprobados)
const totalProgreso = alumnosEnProgreso.filter(item => item.percent > 0).length // Cuenta los alumnos que no estan aprobados y con percent > 0
const totalProgresoPorcentaje = ((totalProgreso * 100)/totalInscritos).toFixed(1) // Entrega el porcentaje de los alumnos con percent >0
const totalSininiciar = infoImportantEstudiantesCurso.filter(item => item.percent === 0).length // Cuenta los alumnos que tiene percent = 0
const totalSininiciarPorcentaje = ((totalSininiciar * 100)/totalInscritos).toFixed(1) // Entrega el porcentaje de los alumnos con porcent = 0
const totalAbandonado = dataApi.filter(item => item.status === "Abandonado").length
const totalAbandonadoPorcentaje = ((totalAbandonado * 100)/totalInscritos).toFixed(1)
const fechaFinalización = "30-12-2022" // traer de api fecha enrrolamiento y sumar dias 
const diasRestantes = "8" // calcular en funcion de fechaFinalización 
const notaPromedio = (dataApi.reduce((sum, item) => sum + parseInt(item.score) , 0)/totalInscritos ).toFixed(1) // Nota promedio del total de alumnos
 */
const totalInscritos = dataApi.length// Cuenta los alumnos del curso
const totalCompletados = dataApi.filter(item => item.status == "Aprobado").length // Cuenta los alumnos que tienen passed true (curso aprobado)
const totalCompletados2= dataApi.filter(item => item.status == "Aprobado") // Guarda los alumnos que tienen passed true (curso aprobado)
/* const totalCompletadosPorcentaje = ((totalCompletados * 100)/totalInscritos ).toFixed(1) */ // Entrega el porcentaje de alumnos con passed true
const totalCompletadosPorcentaje = 75


const alumnosEnProgreso = dataApi.filter(item => item.status == "Iniciado") // Guarda los alumnos que tiene passed false (no aprobados)
const totalProgreso = dataApi.filter(item => item.status == "Iniciado").length // Cuenta los alumnos que no estan aprobados y con percent > 0
/* const totalProgresoPorcentaje = ((totalProgreso * 100)/totalInscritos).toFixed(1)  */// Entrega el porcentaje de los alumnos con percent >0
const totalProgresoPorcentaje = 0



const totalSininiciar = dataApi.filter(item => item.status == "Sin Iniciar").length // Cuenta los alumnos que tiene percent = 0


/* const totalSininiciarPorcentaje = ((totalSininiciar * 100)/totalInscritos).toFixed(1) */ // Entrega el porcentaje de los alumnos con porcent = 0
const totalSininiciarPorcentaje = 25

const NotaPromedioTotalCompletados2 = (totalCompletados2.reduce((sum, item) => sum + parseInt(item.score), 0))/totalCompletados // Nota Promedio de alumnos que aprobaron el curso

const totalAbandonado = dataApi.filter(item => item.status === "Sin Iniciar").length
const totalAbandonadoPorcentaje = ((totalAbandonado * 100)/totalInscritos).toFixed(1)
const fechaFinalización = "30-12-2022" // traer de api fecha enrrolamiento y sumar dias 
const diasRestantes = "8" // calcular en funcion de fechaFinalización 
const notaPromedio = (dataApi.reduce((sum, item) => sum + parseInt(item.score) , 0)/totalInscritos ).toFixed(1) 

function enviarCorreo(correo, nombre, curso) {
  // Construye la dirección de correo electrónico con los detalles especificados
  let direccion = `mailto:${correo}?subject=Aviso de término de curso&body=Estimado ${nombre},%0D%0A%0D%0ALe recordamos que debe continuar con el avance de su curso ${curso}.`;

  // Abre la aplicación de correo electrónico del usuario y crea un nuevo correo con la dirección especificada
  window.open(direccion);
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> 
        </TableCell>    
        <TableCell component="th" scope="row"> {row.name}</TableCell>
        <TableCell align="left">{row.correo}</TableCell>
        <TableCell align="left">{row.status}</TableCell>
        <TableCell align="center">{row.progress} %</TableCell>
        <TableCell align="center">{row.score}</TableCell>
        <TableCell align="center">{row.datacompleted}</TableCell>
        <TableCell align="right">{row.certificate}</TableCell>
        <TableCell align="right">{row.EnviarCorreo}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}


 function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="center">Progreso</TableCell>
            <TableCell align="center">Puntaje</TableCell>
            <TableCell align="center">Fecha Completado</TableCell>
            <TableCell align="right">Certificado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataApi.map((data) => (
            <Row key={data.username} row={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}





export {CollapsibleTable, Tabla2, totalInscritos, totalCompletados, totalProgreso, totalAbandonado, totalCompletadosPorcentaje, totalProgresoPorcentaje,totalSininiciarPorcentaje, totalAbandonadoPorcentaje, fechaFinalización, diasRestantes, notaPromedio, NotaPromedioTotalCompletados2};