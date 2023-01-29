import axios from "axios";
import React from "react";

function GetToken () {

    React.useEffect(() =>{
        axios({
            method:'post',
            url: 'https://avanxa.somosforma.dev/oauth2/access_token/', 
            body:{
                "grand_type": "client_credentials",
                "client_id": "vVphZ8afuHGkZdJuEMvfBuYwOOeKLm3AEXdzaRKL",
                "client_secret": "OzDgfJOl5ZHOKMfuY1sXxex4N3S5hj6mJIpQqvGa3QtYJvQmFeXgMGOpuquT9g47VGOROg1fcck9iykLHH0HJSOEcuRCabhPbxpuFWdNdkIxkEl4pBU7HwsuH3EoBVDS",
                "token_type": "jwt"
            } 
        })
        .then(function (response) {
        if (response.status === 200){
            const data = response.data.csrfToken
            console.log("Token:",data)
        }})
        .catch(function(error){
            console.log("Error GetToken:", error) 
        }) 
    },[])
}


export {GetToken};