import axios from "axios"


/* const endpoint = "/api/discussion/v1/threads/"
const curso = "course-v1:AIEP+GPTI+C9GPTI" */
const raiz = "https://elearning.avanxa.com"



function Auth2(token) {
    axios({
        method: 'post',
        url: 'https://elearning.avanxa.com/user_api/v1/account/login_session',
        headers:{
            'Referer': raiz,
            'x-csrftoken' : token
        },  
        params: {
            email: 'david.torres@avanxa.com',
            password: 'Tricahueb11$'
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                const data = response.data;
                console.log("OK Const auth222", data);
            }
        })
        .catch(function (error) {
            console.log("Error auth", error);
        });
}



export {Auth2};