import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Container } from '@mui/system';
import {cliente} from '../../Api/Empresa';
import { PanelDeNavegacion } from './Panel de Navegacion/PanelNavegacion';
import LogoAvanxa from  '../../../Imagenes/logoavanxa.png'
import { Modal } from './FormularioContacto';
import Banner from '../../../Imagenes/digtmov2.png'
import { DividerText } from './TextoDescripcion';
import Logo from '../../../Imagenes/Logoletrablanca.png'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color:white;
  }
`;


function Home () {
    return (
        <Container  fixed>
           {cliente.map((item) => (
               <Box sx={{ flexGrow: 1 }}>
                <br/>
               <Grid container spacing={1}>
                 <Grid xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
                 <img alt="decorative" style={{paddingTop:25}} align="left" width="120px" src={Logo} ></img>
                 </Grid>
                 <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                 <h1 align="center">Bienvenido/a {item.Encargado}
                 <br/>{item.Empresa}</h1>
                 <br/> 
                 </Grid>
                 <Grid xs={12} md={3} display="flex" justifyContent="center"  alignItems="center">
                 <a href="https://www.avanxa.com"> <img alt="decorative" src={LogoAvanxa} style={{paddingTop:15}} width="180px"></img>  </a>
                 </Grid>
               </Grid>
             </Box>
           ))}
            <br/>
            <GlobalStyle/>
            <DividerText/>
            <br/>
            <PanelDeNavegacion/>          
            <br/>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid xs={12}>
                <a style={{ display: "flex", justifyContent: "center", alignItems: "center" }} href="mailto:admision@avanxa.com"> <img alt="decorative" src={Banner} width="92%"></img></a>
                </Grid>
              </Grid>
            </Box>
            <br/>
            <Grid xs={12} md={3} display="flex" justifyContent="center"  alignItems="center"  >
            <Modal />
            </Grid>
        </Container>
    )
}


export {Home};