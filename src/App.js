import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './Components/Principales/Home/Home';
import { Dashboard } from './Components/Principales/Dashboard/Dashboard';
import { Login } from './Components/Principales/Login/Login'
import {CargaCliente} from './Components/Principales/Carga Cliente/CargaCliente'
import {DataProvider} from './Context/DataContext'


function App(){
return (
  <DataProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cargacliente' element={<CargaCliente/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </DataProvider>
)
}



export default App