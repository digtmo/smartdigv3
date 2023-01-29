import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { totalCompletados, totalInscritos, diasRestantes, NotaPromedioTotalCompletados2} from '../../Api/Tableui';
import {infoCursoImportant} from '../../Api/DataCurso'

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

function FechaInicioRestante() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
        <Alert severity="success">
        <AlertTitle>Fecha de Inicio del Curso</AlertTitle>
        La Fecha de inicio del curso es: <strong>22-10-2022</strong>
      </Alert>
        </Grid>
        <Grid xs={12} md={6}>
          <Alert severity="warning">
          <AlertTitle>Días Restantes</AlertTitle>
          Quedan <strong>{diasRestantes}</strong> días para Finalizar el curso.
        </Alert>
        </Grid>
      </Grid>
    </Box>
  );
}

function Parametros() {
  return (
    <Box sx={{ flexGrow: 1 }}> 
      <Grid  container spacing={2} >
        <Grid xs={12} md={4} >
          <Item>Inscritos: 
            <br/>
            {totalInscritos}</Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item>Aprobados: 
            <br/> 
            {totalCompletados}</Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item>Promedio de Aprobación: 
            <br/> 
            {NotaPromedioTotalCompletados2}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}


function GraficosRadial({GraficoPorcentajeCompletado, GraficoPorcentajeIniciado, GraficoPorcentajeSinIniciar}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={6} md={4} display="flex" justifyContent="center" alignItems="center">
        <GraficoPorcentajeSinIniciar/>     
        </Grid>
        <Grid xs={6} md={4} display="flex" justifyContent="center" alignItems="center">
        <GraficoPorcentajeIniciado/>
        </Grid>
        <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
        <GraficoPorcentajeCompletado/>
        </Grid>
      </Grid>
    </Box>
  );
}



  
function FullWidthGrid4({ChartAlumnos}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={6}>
        <ChartAlumnos/>
        </Grid>
      </Grid>
    </Box>
  );
}

  



export {GraficosRadial,Parametros, FechaInicioRestante,FullWidthGrid4};

