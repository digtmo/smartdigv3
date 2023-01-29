import {infoImportantEstudiantesCurso} from './EstudiantesCurso'
import axios from 'axios'


function GetDataUser () {
    {infoImportantEstudiantesCurso.map(data => 
            axios({
                method: 'get',
                url: `https://elearning.avanxa.com/api/user/v1/accounts/${data.username}`,                
            }) 
                .then(function (response) {
                    if (response.status === 200){
                       const  datas = response.data
                        console.log(datas)
                    }})
                .catch(function(error){
                    console.log("Error de Petición", error)
                }) 
    )} 
}


export {GetDataUser};


function BuscarDatos () {
dataUser.filter()
}

const dataUser = [{
    "account_privacy": "all_users",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "gabriela.salgado",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-03-24T16:57:40Z",
    "language_proficiencies": [
        {
            "code": "es"
        }
    ],
    "level_of_education": "m",
    "social_links": [
        {
            "platform": "linkedin",
            "social_link": "https://www.linkedin.com/in/gabriela.salgado@avanxa.com"
        }
    ],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Gabriela Salgado Rosales",
    "email": "gabriela.salgado@avanxa.com",
    "id": 22,
    "extended_profile": [],
    "gender": "f",
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-12-27T22:00:37.708303Z",
    "mailing_address": "",
    "requires_parental_consent": false,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": 1981,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "lukas-vejares-6856",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-21T22:34:29Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "lukas vejares",
    "email": "lukasvejaresvalenzuela@gmail.com",
    "id": 2169,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-10-20T14:50:16.740096Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "nicolas-ponce-5852",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-22T00:25:18Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Nicolas Ponce Nogales",
    "email": "nponce.nogales@gmail.com",
    "id": 2178,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-12-07T14:37:34.583836Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "sebastian-casanova-9376",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-22T01:13:18Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Sebastián Alejandro Casanova Fuentes",
    "email": "sfcasanovaf5@gmail.com",
    "id": 2182,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-10-11T21:52:06.782541Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "david-marin-9036",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-22T13:47:11Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "David Marin",
    "email": "davidmarinfernandez@gmail.com",
    "id": 2192,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-11-15T14:27:16.561618Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "harold-vielma-6429",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-22T12:03:10Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Harold Andres Vielma Muñoz",
    "email": "vielma.chile@gmail.com",
    "id": 2188,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-12-22T19:13:02.567575Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "eduardo-salgado-0678",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-22T12:10:56Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Eduardo Salgado",
    "email": "edo.salgado.a@gmail.com",
    "id": 2189,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-12-13T11:54:58.377425Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "claudia-bustos-0859",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-22T19:20:13Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Claudia Bustos Alvial",
    "email": "CLAUDIAANDREABUSTOSALVIAL@GMAIL.COM",
    "id": 2200,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-10-07T17:55:47.289814Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "mauricio-cardenas-5557",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-23T17:47:27Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Mauricio Cárdenas",
    "email": "mcardenasnavarro@gmail.com",
    "id": 2229,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-11-15T02:02:39.357042Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "leonardo-lavin-6166",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-22T20:30:08Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Leonardo Cesar Lavin Ramirez",
    "email": "layon.constructor@gmail.com",
    "id": 2202,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-10-12T19:23:48.540950Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
},
{
    "account_privacy": "private",
    "profile_image": {
        "has_image": false,
        "image_url_full": "http://elearning.avanxa.com/static/images/profiles/default_500.4215dbe8010f.png",
        "image_url_large": "http://elearning.avanxa.com/static/images/profiles/default_120.4a5e0900098e.png",
        "image_url_medium": "http://elearning.avanxa.com/static/images/profiles/default_50.3455a6581573.png",
        "image_url_small": "http://elearning.avanxa.com/static/images/profiles/default_30.deee7287e843.png"
    },
    "username": "cristobal-sales-7829",
    "bio": null,
    "course_certificates": null,
    "country": "CL",
    "date_joined": "2022-09-23T19:16:47Z",
    "language_proficiencies": [],
    "level_of_education": null,
    "social_links": [],
    "time_zone": null,
    "accomplishments_shared": false,
    "name": "Cristobal Sales Seguel",
    "email": "cristobal.emilio.sales@gmail.com",
    "id": 2249,
    "extended_profile": [],
    "gender": null,
    "state": null,
    "goals": "",
    "is_active": true,
    "last_login": "2022-11-03T00:41:59.846845Z",
    "mailing_address": "",
    "requires_parental_consent": true,
    "secondary_email": null,
    "secondary_email_enabled": null,
    "year_of_birth": null,
    "phone_number": null
}
]



export {dataUser};