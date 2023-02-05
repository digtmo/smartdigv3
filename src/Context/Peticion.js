import axios from "axios"
import { useEffect,useState } from "react"

const ApiDashboard = () => {
    const [dataApi, setDataApi] = useState("");
    useEffect(() => {
        axios({
            method: 'get',
            url: "tabla4consulta/",                
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

}


export {ApiDashboard};