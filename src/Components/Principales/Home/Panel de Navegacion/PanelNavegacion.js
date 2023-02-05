import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import PropTypes from 'prop-types';
import { CursosContratados } from './CursosContratados';
import { TablaFinanzas } from './Finanzas';
import { TablaColaboradores } from './TablaColaboradores';
import CircularProgress from '@mui/material/CircularProgress';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
  function PanelDeNavegacion() {
    const [value, setValue] = React.useState(0);
    const [isLoading, setLoading]= React.useState(true)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Cursos Contradados" {...a11yProps(0) } />
            <Tab label="Colaboradores" {...a11yProps(0)} />
            <Tab label="Finanzas" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        {isLoading && (
        <Box sx={{ display: 'flex',justifyContent:"center"  ,alignItems:"center" }}>
          <CircularProgress />
        </Box>
      )}
       <CursosContratados/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <TablaColaboradores onLoad={() => setLoading(false)} />
        </TabPanel>
        <TabPanel value={value} index={2}>
         <TablaFinanzas/>
        </TabPanel>
      </Box>
    );
  }
  
  export {PanelDeNavegacion}