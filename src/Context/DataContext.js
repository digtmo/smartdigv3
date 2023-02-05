import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios';

const DataContext = createContext();

const DataProvider= ({children}) => {
  const [dataDashboard, setdataDashboard] = useState(DataContext);
  const [Aprobados, setAprobados] = useState(DataContext);
  const [CantidadAprobados, setCantidadAprobados] = useState("");
  const [CantidadInscritos, setCantidadInscritos] = useState("");
  const [PromedioAprobado, setPromedioAprobado] = useState("");
  const [PorcentajeAprobados, setPorcentajeAprobados] = useState("");
  const [PorcentajeIniciados, setPorcentajeIniciados] = useState("");
  const [PorcentajeSinIniciar, setPorcentajeSinIniciar] = useState("");

  useEffect(() => {
      axios({
          method: 'get',
          url: "tabla4consulta/",                
      }) 
          .then(function (response) {
              if (response.status === 200){
                  const Info = response.data
                  const FilterNota60 = Info.filter(data => data.notacurso >= 60);
                  const FilterNota1y60 = Info.filter(data => data.notacurso >= 1 && data.notacurso <= 60);
                  const FilterNota1 = Info.filter(data => data.notacurso < 1);
                  const CantidadSinIniciar = FilterNota1.length;
                  const CantidadIniciados = FilterNota1y60.length
                  const CantidadAprobados = FilterNota60.length
                  const Inscritos = Info.length
                  const NotaPromedioAprobados = (FilterNota60.reduce((sum, item) => sum + parseInt(item.notacurso), 0))/CantidadAprobados 
                  const PorcentajeAprobados = ((CantidadAprobados * 100)/Inscritos ).toFixed(1)
                  const PorcentajeIniciados = ((CantidadIniciados * 100)/Inscritos ).toFixed(1)
                  const PorcentajeSinIniciar = ((CantidadSinIniciar * 100)/Inscritos ).toFixed(1)
                  setdataDashboard(response.data)
                  setAprobados(FilterNota60)
                  setCantidadAprobados(CantidadAprobados)
                  setCantidadInscritos(Inscritos)
                  setPromedioAprobado(NotaPromedioAprobados)
                  setPorcentajeAprobados(PorcentajeAprobados)
                  setPorcentajeIniciados(PorcentajeIniciados)
                  setPorcentajeSinIniciar(PorcentajeSinIniciar)
              }})
          .catch(function(error){
              console.log("Error de Petición", error)
          }) 
  },[])


  return (
    <DataContext.Provider value={{
      dataDashboard,
      Aprobados,
      CantidadAprobados,
      CantidadInscritos,
      PromedioAprobado,
      PorcentajeAprobados,
      PorcentajeIniciados,
      PorcentajeSinIniciar}}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider,DataContext}
