const endpoint =  "http://elearning.avanxa.com/api/enrollment/v1/course/course-v1:AIEP+IEACD+C12-2022"

const infoCurso = {
    "course_id": "course-v1:AIEP+IEACD+C12-2022",
    "course_name": "Curso: Instalador eléctrico autorizado clase D",
    "enrollment_start": null,
    "enrollment_end": null,
    "course_start": "2022-10-18T09:00:00Z", // Comienzo del curso 
    "course_end": null,
    "invite_only": false,
    "course_modes": [
        {
            "slug": "honor",
            "name": "Instalador eléctrico autorizado clase D",
            "min_price": 0,
            "suggested_prices": "",
            "currency": "usd",
            "expiration_datetime": null,
            "description": null,
            "sku": null,
            "bulk_sku": null
        }
    ]
}

const infoCursoImportant = [{"name":infoCurso.course_name, "dateStart":infoCurso.course_start}] // extrayendo solo nombre y fecha del curso 

console.log(infoCursoImportant)

export {infoCursoImportant}