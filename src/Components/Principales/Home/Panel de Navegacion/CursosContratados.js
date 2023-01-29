import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import { Container } from '@mui/system';
import { totalCursos, totalMatriculados, porcentajeCompletados, TablaCursosContratados } from './TableCursosContratados';

function CursosContratados () {
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
                            {totalMatriculados} Colaboradores Inscritos  
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
        </Container>
         
    )
}

export {CursosContratados}