import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';



const dataCurso = [
  {name:"Lengua de señas chilena",Matriculados:"12",SinIniciar: "3",Completados:"9", Iniciado:"2", Reprobados:"0", Acceso: <Link to="/dashboard"> <LoginIcon/> </Link> },
]

const totalCursos = dataCurso.length
const totalMatriculados = (dataCurso.reduce((sum, item) => sum + parseInt(item.Matriculados) , 0) ) // Suma de los Matriculados
const totalCompletado = (dataCurso.reduce((sum, item) => sum + parseInt(item.Completados) , 0) )// Suma de los Completados
const porcentajeCompletados = ((totalCompletado * 100)/totalMatriculados).toFixed(1) // porcentaje de los alumnos con curso completado

function TablaCursosContratados() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cursos</TableCell>
            <TableCell align="center">Inscritos</TableCell>
{/*             <TableCell align="center">Sin Iniciar</TableCell> */}
      {/*       <TableCell align="center">Iniciados</TableCell> */}
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
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.Matriculados}</TableCell>
       {/*        <TableCell align="center">{row.SinIniciar}</TableCell> */}
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
