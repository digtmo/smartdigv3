import React from 'react';
import {GraficosRadial,Parametros, FechaInicioRestante, FullWidthGrid4} from './Parametros'
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import UndoIcon from '@mui/icons-material/Undo';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { DefinicionEstados } from './Definiciones';
import { TablaDashboard } from './TablaDashboard';


function Dashboard(props) {
  return (
  <React.Fragment>
    <Container fixed>
      <br/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
        <h1>Lengua de señas chilena</h1>
        </Grid>
        <Grid xs={12} md={6} textAlign="right" alignSelf="flex-end">
        <Link to="/"> <UndoIcon fontSize="large"/></Link>
        <h6>Atrás</h6>
        </Grid>
      </Grid>
    </Box>
       <FechaInicioRestante/>
      <Parametros/>
      <GraficosRadial/>
      <DefinicionEstados/> 
      <br/>
      <TablaDashboard/>
    </Container>
  </React.Fragment>
  );
}

export {Dashboard};