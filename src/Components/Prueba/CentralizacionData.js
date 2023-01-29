import { infoImportantEstudiantesCurso } from "../Api/EstudiantesCurso"; // debo obtener username y puntaje
import { dataUser } from "../Api/Datausuario"; // debo obtener nombre y correo
import { certificado } from "../Api/Certificados"; // obtener codigo de vereficacion 
import { dataActividades } from "../Api/EvaluacionesXusuarioCurso";// debo obtener el numero de activades 


const onlyUser = infoImportantEstudiantesCurso.map((data) => data.username)
console.log("OnlyUser: ",onlyUser)


NombrePuntaje("sebastian-casanova-9376")

function NombrePuntaje(usercontact) {

    

    const userdata = infoImportantEstudiantesCurso.map(data => ({username: data.username, nota: data.percent }) ) // Mapea solo username y nota
    const userdata1 = dataUser.map(data => ({username: data.username ,name: data.name, email: data.email }) ) // Mapea solo username y Nombre y Correo
    const Funcion1 = userdata1.filter(data => data.username === usercontact)
    console.log("Funcion 1: ",Funcion1)
    
   
    const userdata2 = certificado.map(data => ({username: data.username, certicado: data.download_url}) ) // Mapea username y URL
    const Funcion2 = userdata2.filter(data => data.username === usercontact)
    console.log("Funcion 2: ",Funcion2)

  
    const userdata3 = dataActividades.map(data => ({actividades: data.results.filter(activities => activities.username=== usercontact)})) 
    const Funcion3 = userdata3[0].actividades[0].section_breakdown

    console.log("Funcion 3: ",Funcion3)

    // 
    return ( 
        console.log("userdata0",userdata,"userdata1",userdata1,"userdata2",userdata2,"userdata3",userdata3)
    )
}





export {NombrePuntaje}

