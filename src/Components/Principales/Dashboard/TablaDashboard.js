import React, {useMemo, useContext } from 'react';
import MaterialReactTable from 'material-react-table';
import EmailIcon from '@mui/icons-material/Email';
import {DataContext} from '../../../Context/DataContext'


const TablaDashboard = () => {
  const {dataDashboard} = useContext(DataContext)  
    const columns = useMemo(
      () => [
        {
          accessorKey: 'nombre', 
          header: 'Nombre',
        },
        {
            accessorKey: 'estadoparcial',
            header: 'Estado',
        },
        {
          accessorKey: 'progresocurso',
          header: 'Progreso',
        },
        {
            accessorKey: 'notacurso',
            header: 'Puntaje',
          },
        {
          accessorKey: 'download_url',
          header: 'Certificado',
        },
        {
          accessorKey: 'EnviarCorreo',
          header: 'Enviar Correo',
        },
      ],
      [],
    );

    /* const [rowSelection, setRowSelection] = useState < RowSelectionState > {};
    useEffect(() => {
      //do something when the row selection changes...
      console.info({ rowSelection });
    }, [rowSelection]); */


  
    return <MaterialReactTable   
   /*  renderTopToolbarCustomActions={({ table }) => {
      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('Enviar correo a? ' + row.getValue('name'));
         enviarCorreo(row.getValue('correo'),row.getValue('name'),dataDashboard[1].curso);
        });
      };
    }} */
    columns ={columns} 
    data={dataDashboard}  
    enableColumnActions={false} 
    enableColumnFilters={false} 
    enableHiding={false}
    /*enableRowSelection={true}
 /*    getRowId={(row) => row.userId} //give each row a more useful id
    onRowSelectionChange={setRowSelection} //connect internal row selection state to your own
    state={{ rowSelection }}  Habilitar las casillas de verificacion de cad ausuario */
    />

  };

  function enviarCorreo(correo, nombre, curso) {
    let direccion = `mailto:${correo}?subject=Aviso de término de curso&body=Estimado ${nombre},%0D%0A%0D%0ALe recordamos que debe continuar con el avance de su curso Excel Avanzado.%0D%0A%0D%0ASaludos,%0D%0A[Tu nombre]`; // Construye la dirección de correo electrónico con los detalles especificados
    window.open(direccion);  // Abre la aplicación de correo electrónico del usuario y crea un nuevo correo con la dirección especificada
  }

  
  
  export {TablaDashboard};