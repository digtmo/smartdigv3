import axios from 'axios'
import React from 'react'

/* const endpoint = "/api/discussion/v1/threads/"
const curso = "course-v1:AIEP+GPTI+C9GPTI" */
/* const email = "david.torres@avanxa.com"
const password = "Tricahueb11$" */
/* const raiz = "https://elearning.avanxa.com" */
/* const authe = '/user_api/v1/account/login_session/' */



function Auth() {
var token = null

React.useEffect(() =>{

    axios({
        method:'get', 
        url: 'https://elearning.avanxa.com/csrf/api/v1/token', 
       headers:{
        'Access-Control-Allow-Origin': '*'
       },

    })
    .then(function (response) {
        if (response.status === 200){
            token = response.data.csrfToken
            console.log("Funcion AUTH",token)
           
            const data = 'email=david.torres%40avanxa.com&password=Tricahueb11%24';
            
            const config = {
              method: 'post',
              url: 'https://elearning.avanxa.com/api/user/v1/account/login_session/',
              headers: { 
                'accept': '*/*', 
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
                'origin': 'https://elearning.avanxa.com', 
                'referer': 'https://elearning.avanxa.com/login', 
                'x-csrftoken': token, 
                'Cookie': 'edx-jwt-cookie-header-payload=eyJhbGciOiJSUzUxMiIsImtpZCI6Im9wZW5lZHgifQ.eyJhdWQiOiAib3BlbmVkeCIsICJleHAiOiAxNjcxNTAwODMxLCAiaWF0IjogMTY3MTQ5NzIzMSwgImlzcyI6ICJodHRwczovL2VsZWFybmluZy5hdmFueGEuY29tL29hdXRoMiIsICJwcmVmZXJyZWRfdXNlcm5hbWUiOiAiRGF2aWQxOTk2IiwgInNjb3BlcyI6IFsidXNlcl9pZCIsICJlbWFpbCIsICJwcm9maWxlIl0sICJ2ZXJzaW9uIjogIjEuMi4wIiwgInN1YiI6ICJlZTBmOTVlZThlYTBiYmFhNGUxMjFmZDhmOTJlMjA3MSIsICJmaWx0ZXJzIjogWyJ1c2VyOm1lIl0sICJpc19yZXN0cmljdGVkIjogZmFsc2UsICJlbWFpbF92ZXJpZmllZCI6IHRydWUsICJ1c2VyX2lkIjogMjY4NiwgImVtYWlsIjogImRhdmlkLnRvcnJlc0BhdmFueGEuY29tIiwgIm5hbWUiOiAiRGF2aWQgVG9ycmVzIE1vbGluYSIsICJmYW1pbHlfbmFtZSI6ICIiLCAiZ2l2ZW5fbmFtZSI6ICIiLCAiYWRtaW5pc3RyYXRvciI6IHRydWUsICJzdXBlcnVzZXIiOiB0cnVlfQ; edx-jwt-cookie-signature=kCCRGjWTWtdF8T54sX5ymaORiKuNn3v5-M6JzcAr966QCyVzJkQga4RWDyV1q6v1MB5TcYR46780XpO114bzvz_AfBknPuZ4EPO_vc79JyLD3a6DOyPIG3EV2K9QchYl76rLRzLAkvpBu5CIMk4CqN8ofmugQSaZZK7xA3iskcS3vre-hoQ860a_ysguhLMlTz0RGiQY3s4kBCVy4sq2IE70ove7pjqUwoDhSM90LkLXE5B8oiuyyQjyCq1ssv8CxGQ3dnffknC37dXciOTyM7Xbi-CICSdryID8rPwWK4tlOjhGC7yl4Nk4yjRX8daOhg4WTTQvvL0F-7XmI9WL8Q; edx-user-info="{\\"version\\": 1\\054 \\"username\\": \\"David1996\\"\\054 \\"header_urls\\": {\\"logout\\": \\"http://elearning.avanxa.com/logout\\"\\054 \\"account_settings\\": \\"http://elearning.avanxa.com/account/settings\\"\\054 \\"learner_profile\\": \\"http://elearning.avanxa.com/u/David1996\\"\\054 \\"resume_block\\": \\"https://elearning.avanxa.com/courses/course-v1:EANX+HDMA+C12-2022/jump_to/block-v1:EANX+HDMA+C12-2022+type@problem+block@89d198c7ce4c43bba8a1e195505f5c8e\\"}\\054 \\"user_image_urls\\": {\\"full\\": \\"http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png\\"\\054 \\"large\\": \\"http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png\\"\\054 \\"medium\\": \\"http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png\\"\\054 \\"small\\": \\"http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png\\"}}"; edxloggedin=true; openedx-language-preference=es-es; sessionid=1|f50sa3zj8btzy5q718980ck8l8lkv0u3|VzdvDntfM1Iy|IjIxYmE1NzRhYjRlNWVkZWE1ZWI2OTQ2ZTZmNDYwMjA5N2U3NTA4MWVhZTIwNmI0ZmM4YmRkMzUxNTg2MDRiMzYi:1p7Qml:vkpGqP1wo5tQwezbcc7LEx8bPa8; Cookie_2=value; csrftoken=SONb5FvCwpTmdDTfh7VziBYw0k3yhvRIXFYuDBue15sqslH8dIQHN1NI33DjM4uY',
                
              },
              data : data,
            };
            
            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
            


        }
    })
    .catch(function (error) {
      console.log("No se recibio token",error);
    });
  },[])

}



export {Auth};






