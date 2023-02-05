import * as React from 'react';
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';
import Box from '@mui/system/Box';
import { styled } from '@mui/material/styles';


const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

function DefinicionEstados() {
  return (
    <Box sx={{ flexGrow: 1 }}> 
  <Grid container spacing={0}>
    <Grid xs={12} md={4} >
      <Item >
      <Alert icon={false} severity="error">
    <strong>Sin Iniciar:</strong> 0 Actividad evaluable realizada.
    <br/>
    </Alert>
      </Item>
    </Grid>
    <Grid xs={12} md={4} >
      <Item>
      <Alert icon={false} severity="warning">
        <strong>Iniciado: </strong>Al menos 1 Actividad evaluable realizada.
    </Alert>
      </Item>
    </Grid>
    <Grid xs={12} md={4}>
      <Item>
      <Alert icon={false} severity="success">
     <strong>Aprobado:</strong>  Nota Acumulada igual o mayor a 60.
    </Alert>
      </Item>
    </Grid>
  </Grid>
  </Box>

  );
}


export {DefinicionEstados}

