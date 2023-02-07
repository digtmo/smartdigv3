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
  {name:"Lengua de señas chilena",Matriculados:"10", FechaInicio:"10-02-2023",FechaFinalizacion:"10-05-2023", SinIniciar: "3",Completados:"8", Iniciado:"2", Reprobados:"0", Acceso: <Link to="/dashboard"> <LoginIcon/> </Link> },
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
            <TableCell>Cursos</TableCell>
            <TableCell align="center">Fecha de Inicio</TableCell>
            <TableCell align="center">Fecha de Finalización</TableCell>
            <TableCell align="center">Inscritos</TableCell>        
            <TableCell align="center">Aprobados</TableCell>
            <TableCell align="center">Reprobados</TableCell>
            <TableCell align="center">Acceso a Curso</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCurso.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.FechaInicio}</TableCell>
              <TableCell align="center">{row.FechaFinalizacion}</TableCell>
              <TableCell align="center">{row.Matriculados}</TableCell>
              <TableCell align="center">{row.Completados}</TableCell>      
              <TableCell align="center">{row.Reprobados}</TableCell>    
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
