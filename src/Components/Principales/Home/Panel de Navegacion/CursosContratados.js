import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import { Container } from '@mui/system';
import { totalCursos,TablaCursosContratados } from './TableCursosContratados';
import axios from 'axios';
import React, {useState, useEffect } from 'react';


function CursosContratados () {
     const [dataApi, setDataApi] = useState("");
     const [Aprobados, setAprobados] = useState("");
  useEffect(() => {
      axios({
          method: 'get',
          url: "tabla4consulta/",                
      }) 
          .then(function (response) {
              if (response.status === 200){
                  setDataApi(response.data)
                  const info = response.data;
                  const filterApi = info.filter(data => data.notacurso >= 60);
                  console.log(filterApi)
                  setAprobados(filterApi)
              }})
          .catch(function(error){
              console.log("Error de Petición", error)
          }) 
  },[])


const FiltroAprobados = Aprobados
const CantidadAprobados = FiltroAprobados.length
const Inscritos = dataApi.length
const PorcentajeAprobados =  (CantidadAprobados*100)/Inscritos

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
                            {Inscritos} Colaboradores Inscritos 
                        </Alert>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Alert severity="success">
                        <AlertTitle>Aprobados:</AlertTitle>
                            {PorcentajeAprobados}% del total de los Cursos Aprobados
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
             
        </Container>
         
    )
}

export {CursosContratados}