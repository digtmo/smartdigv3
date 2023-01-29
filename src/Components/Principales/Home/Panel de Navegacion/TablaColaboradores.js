import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';


const data = [
  { name: 'John', progreso: 75, rut:'19.377.609-7' , correo: 'correo1@gmail.com',  curso: 'Excel Avanzado', ultimaConexion: '2022-01-01'},
  { name: 'Jane', progreso: 50, rut:'19.684.677-4' , correo: 'correo2@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-02' },
  { name: 'Bob', progreso: 25, rut:'21.370.525-k' , correo: 'correo3@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-03' },
  { name: 'Alice', progreso: 90,rut:'8.370.525-0' , correo: 'correo4@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-04' },
  { name: 'Mike', progreso: 65, rut:'22.470.233-1' , correo: 'correo5@gmail.com',curso: 'Excel Avanzado', ultimaConexion: '2022-01-05' },
  { name: 'Laura', progreso: 80,rut:'17.370.535-5' , correo: 'correo6@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-06' },
  { name: 'John', progreso: 75,rut:'12.230.756-1' , correo: 'correo7@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-01' },
  { name: 'Jane', progreso: 50,rut:'15.720.655-3' , correo: 'correo8@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-02' },
  { name: 'Bob', progreso: 25,rut:'11.995.585-2' , correo: 'correo9@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-03' },
  { name: 'Alice', progreso: 90,rut:'12.245.531-6' , correo: 'correo10@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-04' },
  { name: 'Mike', progreso: 65,rut:'13.520.632-k' , correo: 'correo11@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-05' },
  { name: 'Laura', progreso: 80, rut:'12.420.524-2' , correo: 'correo12@gmail.com',curso: 'Excel Avanzado', ultimaConexion: '2022-01-06' },
  { name: 'Tom', progreso:  0,rut:'14.612.425-6' , correo: 'correo13@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-07' },
  { name: 'Sara', progreso: 70, rut:'19.370.655-k' , correo: 'correo14@gmail.com',curso: 'Excel Avanzado', ultimaConexion: '2022-01-08' },
  { name: 'David', progreso: 60, rut:'19.370.655-k' , correo: 'correo15@gmail.com',curso: 'Excel Avanzado', ultimaConexion: '2022-01-09' },
  { name: 'Emily', progreso: 85, rut:'19.370.655-k' , correo: 'correo16@gmail.com',curso: 'Excel Avanzado', ultimaConexion: '2022-01-10' },
  { name: 'Chris', progreso: 95, rut:'19.370.655-k' , correo: 'correo17@gmail.com',curso: 'Excel Avanzado', ultimaConexion: '2022-01-11' },
  { name: 'Amanda', progreso: 45,rut:'19.370.655-k' , correo: 'correo18@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-12' },
  { name: 'Scott', progreso: 30, rut:'19.370.655-k' , correo: 'correo19@gmail.com',curso: 'Excel Avanzado', ultimaConexion: '2022-01-13' },
  { name: 'Rachel', progreso: 55,rut:'19.370.655-k' , correo: 'correo20@gmail.com', curso: 'Excel Avanzado', ultimaConexion: '2022-01-14' },
  { name: 'Mark', progreso: 100, rut:'19.370.655-k' , correo: 'correo21@gmail.com',curso: 'Diseño UX/UI', ultimaConexion: '2022-01-15' },
  { name: 'Jessica', progreso: 85, rut:'19.370.655-k' , correo: 'correo22@gmail.com',curso: 'Diseño UX/UI', ultimaConexion: '2022-01-16' },
  { name: 'Kevin', progreso: 75, rut:'19.370.655-k' , correo: 'correo23@gmail.com',curso: 'Diseño UX/UI', ultimaConexion: '2022-01-17' },
  { name: 'Ashley', progreso: 65, rut:'19.370.655-k' , correo: 'correo24@gmail.com',curso: 'Diseño UX/UI', ultimaConexion: '2022-01-18' },
  { name: 'Mark', progreso: 100, rut:'19.370.655-k' , correo: 'correo25@gmail.com',curso: 'Diseño UX/UI', ultimaConexion: '2022-01-15' },
  { name: 'Jessica', progreso: 85, rut:'19.370.655-k' , correo: 'correo26@gmail.com',curso: 'Diseño UX/UI', ultimaConexion: '2022-01-16' },
  { name: 'Kevin', progreso: 75,rut:'19.370.655-k' , correo: 'correo27@gmail.com', curso: 'Diseño UX/UI', ultimaConexion: '2022-01-17' },
  { name: 'Ashley', progreso: 65, rut:'19.370.655-k' , correo: 'correo28@gmail.com',curso: 'Diseño UX/UI', ultimaConexion: '2022-01-18' },
  { name: 'John', progreso: 75, rut:'19.370.655-k' , correo: 'correo29@gmail.com',curso: 'Excel Medio', ultimaConexion: '2022-01-01' },
  { name: 'Jane', progreso: 50,rut:'19.370.655-k' , correo: 'correo30@gmail.com', curso: 'Excel Medio', ultimaConexion: '2022-01-02' },
  { name: 'Bob', progreso: 25, rut:'19.370.655-k' , correo: 'correo31@gmail.com',curso: 'Excel Medio', ultimaConexion: '2022-01-03' },
  { name: 'Alice', progreso: 90, rut:'19.370.655-k' , correo: 'correo32@gmail.com',curso: 'Excel Medio', ultimaConexion: '2022-01-04' },
  { name: 'Mike', progreso: 65, rut:'19.370.655-k' , correo: 'correo33@gmail.com',curso: 'Excel Medio', ultimaConexion: '2022-01-05' },
  { name: 'Laura', progreso: 80,rut:'19.370.655-k' , correo: 'correo34@gmail.com', curso: 'Excel Medio', ultimaConexion: '2022-01-06' },
  { name: 'John', progreso: 75,rut:'19.370.655-k' , correo: 'correo35@gmail.com', curso: 'Excel Medio', ultimaConexion: '2022-01-01' },
  { name: 'Jane', progreso: 50,rut:'19.370.655-k' , correo: 'correo36@gmail.com', curso: 'Excel Medio', ultimaConexion: '2022-01-02' },
  { name: 'Bob', progreso: 25, rut:'19.370.655-k' , correo: 'correo37@gmail.com',curso: 'Excel Medio', ultimaConexion: '2022-01-03' },
  { name: 'Alice', progreso: 90,rut:'19.370.655-k' , correo: 'correo38@gmail.com', curso: 'Excel Medio', ultimaConexion: '2022-01-04' },
  { name: 'Mike', progreso: 65,rut:'19.370.655-k' , correo: 'correo39@gmail.com', curso: 'Excel Medio', ultimaConexion: '2022-01-05' },
  { name: 'Laura', progreso: 80,rut:'19.370.655-k' , correo: 'correo40@gmail.com', curso: 'Excel Medio', ultimaConexion: '2022-01-06' },
  { name: 'Tom', progreso: 40, rut:'19.370.655-k' , correo: 'correo41@gmail.com',curso: 'Excel Medio', ultimaConexion: '2022-01-07' },
  { name: 'Sara', progreso: 70, rut:'19.370.655-k' , correo: 'correo42@gmail.com',curso: 'Excel Medio', ultimaConexion: '2022-01-08' },
];


const TablaColaboradores = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Nombre',
      },
      {
        accessorKey: 'progreso',
        header: 'Progreso',
      },
      {
        accessorKey: 'rut', //normal accessorKey
        header: 'Rut',
      },
      {
        accessorKey: 'correo',
        header: 'Correo',
      },
      {
        accessorKey: 'curso',
        header: 'Curso',
      },
      {
        accessorKey: 'ultimaConexion',
        header: 'Ultima Conexión',
      },

    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data}  enableColumnActions={false} enableColumnFilters={false} enableHiding={false} />;
};

export {TablaColaboradores};
