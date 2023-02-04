import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import { Container } from '@mui/system';
import { totalCursos, totalMatriculados, porcentajeCompletados, TablaCursosContratados } from './TableCursosContratados';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import Banner from '../../../../Imagenes/Banner.png'


function CursosContratados () {
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

/* const aprobados = dataApi.filter( data => data.progresocurso > 60)
const cAprobados = aprobados.length
const Cantidad = dataApi.length
const CAprobaodosPorcentaje =  (cAprobados*100)/Cantidad
console.log(CAprobaodosPorcentaje) */

    return (
        <Container fixed>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid xs={12} md={4}>
                        <Alert severity="info">
                        <AlertTitle>Cursos:</AlertTitle>
                            {totalCursos} Cursos Contrados  
                            
                        </Alert>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Alert severity="info">
                        <AlertTitle>Inscritos:</AlertTitle>
                            {dataApi.length} Colaboradores Inscritos 
                        </Alert>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Alert severity="success">
                        <AlertTitle>Aprobados:</AlertTitle>
                            {porcentajeCompletados}% del total de los Cursos Aprobados
                        </Alert>
                    </Grid>
                </Grid>
            </Box>
            <br/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid xs={12}>
                    <TablaCursosContratados/>
                    </Grid>
                </Grid>
            </Box>
            <br/>
            <br/>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid xs={12}>
                <a style={{ display: "flex", justifyContent: "center", alignItems: "center" }} href="mailto:admision@avanxa.com"> <img src={Banner} width="100%"></img></a>
                </Grid>
              </Grid>
            </Box>
            <br/>
        </Container>
         
    )
}

export {CursosContratados}