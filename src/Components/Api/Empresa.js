const cliente = [
    {
      Empresa: 'Inmobiliara Kpue',
      Encargado: 'David Torres',
      Img:'https://portales.bancochile.cl/uploads/000/007/580/742d1688-95f6-44bf-aa2f-f947d4657db5/original/Mi_Banco_BCH.svg',
      cursos: [{
        Name: 'Curso: Instalador eléctrico autorizado clase D',
        Matriculados:'20',
        Valor: '',
        course_id: "course-v1:AIEP+IEACD+C12-2022"
      },{
        Name: 'Curso: Instalador eléctrico autorizado clase D',
        Matriculados:'20',
        Valor: '',
        Name: 'Diseño UX/UI',
        course_id: "course-v1:AIEP+IEACD+C12-2022"
      },{
        Name: 'Curso: Instalador eléctrico autorizado clase D',
        Matriculados:'20',
        Valor: '',
        Name: 'Excel Medio',
        course_id: "course-v1:AIEP+IEACD+C12-2022"
      }]
    }]


/* const totalCursos = cliente.cursos.length
const totalMatriculados = (totalCursos.reduce((sum, item) => sum + parseInt(item.Matriculados) , 0) ) // Suma de los Matriculados
const totalCompletado = (totalCursos.reduce((sum, item) => sum + parseInt(item.Completados) , 0) )// Suma de los Completados
const porcentajeCompletados = ((totalCompletado * 100)/totalMatriculados).toFixed(1) // porcentaje de los alumnos con curso completado */

  export {cliente}