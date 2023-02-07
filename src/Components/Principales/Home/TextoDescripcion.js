import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Container } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

function DividerText() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <Root>
       <Container fixed>
        <h5>Acceso a estadísticas actualizadas sobre el rendimiento de sus colaboradores en los cursos contratados, porcentaje de aprobación, notas, progreso y certificados. Toda la información en un lugar."</h5>  
        <Divider></Divider>
       </Container>

    </Root>
  );
}


export {DividerText}


