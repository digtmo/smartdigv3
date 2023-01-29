import React, { Fragment } from 'react';
import { GraficoPorcentajeCompletado,GraficoPorcentajeSinIniciar,GraficoPorcentajeIniciado, ChartAlumnos} from './Graficos1';
import {GraficosRadial,Parametros, FechaInicioRestante, FullWidthGrid4} from './Parametros'
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import UndoIcon from '@mui/icons-material/Undo';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { DefinicionEstados } from './Definiciones';
import { TablaDashboard } from './TablaDashboard';
import { GetToken } from '../../../Components/Api/Getoken';
import { Auth } from '../../Api/Auth';
import { GetDataUser } from '../../Api/Datausuario';


function Dashboard(props) {
  return (
  <React.Fragment>
    <Container fixed>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
        <h1>Excel Avanzado</h1>
        </Grid>
        <Grid xs={12} md={6} textAlign="right" alignSelf="flex-end">
        <Link to="/"> <UndoIcon fontSize="large"/></Link>
        <h6>Atrás</h6>
        </Grid>
      </Grid>
    </Box>
       <FechaInicioRestante/>
      <Parametros/>
      <GraficosRadial
      GraficoPorcentajeCompletado={GraficoPorcentajeCompletado}
      GraficoPorcentajeIniciado={GraficoPorcentajeIniciado}
      GraficoPorcentajeSinIniciar={GraficoPorcentajeSinIniciar}/>
      <DefinicionEstados/> 
      <br/>
  {/*     <CollapsibleTable/>  */} 
      <TablaDashboard/>
      <FullWidthGrid4 ChartAlumnos={ChartAlumnos}/> 
      <GetToken/>
      <Auth/>
      <GetDataUser/>
    </Container>
  </React.Fragment>
  );
}

export {Dashboard};