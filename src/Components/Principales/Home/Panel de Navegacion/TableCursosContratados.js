import {React ,useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import axios from 'axios';


const dataCurso = [
  {name:"Depto 3B-3D", Ciudad:"Santiago",Matriculados:"10", FechaInicio:"10-02-2023",FechaFinalizacion:"10-05-2023", SinIniciar: "3",Completados:"$750.000", Iniciado:"2", Reprobados:"0", Acceso: <Link to="/dashboard"> <LoginIcon/> </Link> },
  {name:"Depto 1B-2D", Ciudad:"Concepción",Matriculados:"10", FechaInicio:"10-02-2023",FechaFinalizacion:"10-05-2023", SinIniciar: "3",Completados:"$650.000", Iniciado:"2", Reprobados:"0", Acceso: <Link to="/dashboard"> <LoginIcon/> </Link> },
  {name:"Depto 2B-2D", Ciudad:"Concepción",Matriculados:"10", FechaInicio:"10-02-2023",FechaFinalizacion:"10-05-2023", SinIniciar: "3",Completados:"$450.000", Iniciado:"2", Reprobados:"0", Acceso: <Link to="/dashboard"> <LoginIcon/> </Link> },
]

const totalCursos = dataCurso.length
const totalMatriculados = (dataCurso.reduce((sum, item) => sum + parseInt(item.Matriculados) , 0) ) // Suma de los Matriculados
const porcentajeCompletados = 80


function TablaCursosContratados() {
  const [dataApi, setDataApi] = useState("");
  useEffect(() => {
      axios({
          method: 'get',
          url: "tabla2consulta/",                
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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Inmueble</TableCell>
            <TableCell align="center">Ciudad</TableCell>
            <TableCell align="center">Fecha Inicio Contrato</TableCell>
            <TableCell align="center">Fecha Fin Contrato</TableCell>
            <TableCell align="center">Pago</TableCell>        
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Acceso a Información</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCurso.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.Ciudad}</TableCell>
              <TableCell align="center">{row.FechaInicio}</TableCell>
              <TableCell align="center">{row.FechaFinalizacion}</TableCell>
              <TableCell align="center">{row.Matriculados}</TableCell>
              <TableCell align="center">{row.Completados}</TableCell>      
      {/*         <TableCell align="center">{row.Iniciado}</TableCell> */}
              <TableCell align="center"> {row.Acceso}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {totalCursos,totalMatriculados,porcentajeCompletados,TablaCursosContratados}
