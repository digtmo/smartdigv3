import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import axios from 'axios';




const TablaColaboradores = () => {
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



  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'nombre', //access nested data with dot notation
        header: 'Nombre',
      },
      {
        accessorKey: 'progresocurso',
        header: 'Progreso',
      },
      /* {
        accessorKey: 'rutusuarios', //normal accessorKey
        header: 'Rut',
      }, */
      {
        accessorKey: 'email',
        header: 'Correo',
      },
      {
        accessorKey: 'nombrecurso',
        header: 'Curso',
      },
      {
        accessorKey: 'ultimaconexion',
        header: 'Ultima Conexión',
      },

    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={dataApi}  enableColumnActions={false} enableColumnFilters={false} enableHiding={false} />;
};

export {TablaColaboradores};
