import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Container } from '@mui/system';
import * as React from 'react';
import {cliente} from '../../Api/Empresa';
import { PanelDeNavegacion } from './Panel de Navegacion/PanelNavegacion';
import LogoAvanxa from  '../../../Imagenes/logoavanxa.png'
import { Modal } from './FormularioContacto';
import { Api } from '../../Api/Peticion';
import Banner from '../../../Imagenes/Banner.png'

function Home () {
    return (
        <Container fixed>
           {cliente.map((item) => (
               <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={1}>
                 <Grid xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
                 <img style={{paddingTop:25}} align="left" width="90px" src={item.Img} ></img>
                 </Grid>
                 <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                 <h1 align="center">Bienvenido/a {item.Encargado}
                 <br/>{item.Empresa}</h1>
                 <br/> 
                 </Grid>
                 <Grid xs={12} md={3} display="flex" justifyContent="center"  alignItems="center">
                 <a href="https://www.avanxa.com"> <img src={LogoAvanxa} style={{paddingTop:15}} width="180px"></img>  </a>
                 </Grid>
               </Grid>
             </Box>
           ))}
            <br/>
            <PanelDeNavegacion/>
            <br/>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid xs={12}>
                <a style={{ display: "flex", justifyContent: "center", alignItems: "center" }} href="mailto:admision@avanxa.com"> <img src={Banner} width="90%"></img></a>
                </Grid>
              </Grid>
            </Box>
            <br/>
            <Modal/>
            <Api/>
        </Container>
    )
}


export {Home};