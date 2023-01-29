import axios from "axios"
import { useEffect,useState } from "react"
/* 
const endpoint = "/api/discussion/v1/threads/"
const curso = "course-v1:AIEP+GPTI+C9GPTI"
const raiz = "https://elearning.avanxa.com"

 */

const Api = () => {
    const [dataApi, setDataApi] = useState("");
    useEffect(() => {
        axios({
            method: 'get',
            url: "http://127.0.0.1:8000/getapi1",                
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

console.log(dataApi)
}


export {Api};