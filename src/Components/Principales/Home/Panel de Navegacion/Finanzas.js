import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const dataCurso = [
  {RutEmpresa:"76847986-0",FechaCompra:"22-12-2022", FechaVencimiento: "22-01-2023", Cantidad:"20",Monto: "1.800.000",Estado:"Factura/Pendiente"},
  {RutEmpresa:"76444289-5",FechaCompra:"11-10-2022",FechaVencimiento: "11-11-2023",Cantidad:"8",Monto: "960.000", Estado:"Factura/Pagada"},
]

const totalCursos = dataCurso.length
const totalMatriculados = (dataCurso.reduce((sum, item) => sum + parseInt(item.Matriculados) , 0) ) // Suma de los Matriculados
const totalCompletado = (dataCurso.reduce((sum, item) => sum + parseInt(item.Completados) , 0) )// Suma de los Completados
const porcentajeCompletados = ((totalCompletado * 100)/totalMatriculados).toFixed(1) // porcentaje de los alumnos con curso completado

function TablaFinanzas() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Fecha de Compra</TableCell>
            <TableCell align="center">Fecha de Vencimiento </TableCell>
            <TableCell align="center">Rut Empresa </TableCell>
            <TableCell align="center">Inscritos</TableCell>
            <TableCell align="center">Monto</TableCell>
            <TableCell align="center">Estado de pago</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCurso.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{data.FechaCompra}</TableCell>
              <TableCell align="center">{data.FechaVencimiento}</TableCell>
              <TableCell align="center">{data.RutEmpresa}</TableCell>
              <TableCell align="center">{data.Cantidad}</TableCell>      
              <TableCell align="center">${data.Monto}</TableCell>    
              <TableCell align="center"> {data.Estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {totalCursos,totalMatriculados,porcentajeCompletados,TablaFinanzas}
