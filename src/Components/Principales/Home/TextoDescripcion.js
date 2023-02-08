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
        <h5>El dashboard de la inmobiliaria ofrece una visión global y detallada de las estadísticas de los inmuebles, finanzas y documentos. Permite ver información importante y gestionar documentos en un solo lugar. Mejora la gestión de la inmobiliaria de manera eficiente.</h5>  
        <Divider></Divider>
       </Container>

    </Root>
  );
}


export {DividerText}


