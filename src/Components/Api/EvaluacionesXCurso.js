const endpoint = "https://elearning.avanxa.com/api/grades/v1/gradebook/course-v1:AIEP+IEACD+C12-2022/grading-info"

const dataEvaluaciones = {
    "grade_cutoffs": {
        "Pass": 0.6
    },
    "assignment_types": {
        "Foro Debate ": {
            "type": "Foro Debate ",
            "short_label": "FD",
            "min_count": 4,
            "drop_count": 0,
            "weight": 0.16
        },
        "Evaluación Sumativa ": {
            "type": "Evaluación Sumativa ",
            "short_label": "ES",
            "min_count": 4,
            "drop_count": 0,
            "weight": 0.2
        },
        "Actividad Practica ": {
            "type": "Actividad Practica ",
            "short_label": "AP",
            "min_count": 4,
            "drop_count": 0,
            "weight": 0.24
        },
        "Evaluación Sumativa Final Examen ": {
            "type": "Evaluación Sumativa Final Examen ",
            "short_label": "ESFE",
            "min_count": 1,
            "drop_count": 0,
            "weight": 0.4
        }
    },
    "subsections": [
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@997fb83f5ac94af1ad464aeaff05c2f1",
            "display_name": "Introducción"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@ae288e025f4e4ea4b916fbbf27ee7517",
            "display_name": "Evaluación Formativa"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@7d8284a96173433293220468b79fcc29",
            "display_name": "Espacios de Comunicación"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@c71b1fa938134012aa56e66da481de66",
            "display_name": "Para Conocerte Mejor"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@15763380f3594aa0b118dfc5ea53d005",
            "display_name": "Introducción"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@210289f00b6040dab33c28b1f80af01d",
            "display_name": "Contenidos"
        },
        {
            "assignment_type": "Foro Debate ",
            "graded": true,
            "short_label": "FD 01",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@51f6f1a7c29d4abd87c7e184c36cc906",
            "display_name": "Foro Debate"
        },
        {
            "assignment_type": "Actividad Practica ",
            "graded": true,
            "short_label": "AP 01",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@17f655e9410840f9a7098f8c8f65d247",
            "display_name": "Actividad Práctica"
        },
        {
            "assignment_type": "Evaluación Sumativa ",
            "graded": true,
            "short_label": "ES 01",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@4ce2b1e36c70400389f61aae8d5d326b",
            "display_name": "Evaluación Sumativa Unidad I"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@7d838d4905bb407f98bff56975bbf7cf",
            "display_name": "Materiales de Apoyo"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@67034034360a4d06bdb3d3d848a093cf",
            "display_name": "Introducción"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@71c2424a9ef54d0bb3a48b1ad577a59d",
            "display_name": "Contenidos"
        },
        {
            "assignment_type": "Foro Debate ",
            "graded": true,
            "short_label": "FD 02",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@84ba7b9f43da44f8b72198f95ed199ab",
            "display_name": "Foro Debate"
        },
        {
            "assignment_type": "Actividad Practica ",
            "graded": true,
            "short_label": "AP 02",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@defa1072e2684ab9b6aaa1f042372309",
            "display_name": "Actividad Práctica"
        },
        {
            "assignment_type": "Evaluación Sumativa ",
            "graded": true,
            "short_label": "ES 02",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@ebb5d530134d4ed588dce59fd38b92eb",
            "display_name": "Evaluación Final"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@77b4920335c64de98c4624f9296ac0f6",
            "display_name": "Materiales de Apoyo"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@5380e79dfb074573867e0cca9122caf9",
            "display_name": "Introducción"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@420ce039006a4b7db816402d6f22a6b2",
            "display_name": "Contenidos"
        },
        {
            "assignment_type": "Foro Debate ",
            "graded": true,
            "short_label": "FD 03",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@9e386a89d4794405998509f9f065510e",
            "display_name": "Foro Debate"
        },
        {
            "assignment_type": "Actividad Practica ",
            "graded": true,
            "short_label": "AP 03",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@0261b8cb26fd44759a3b075de752d530",
            "display_name": "Actividad Práctica"
        },
        {
            "assignment_type": "Evaluación Sumativa ",
            "graded": true,
            "short_label": "ES 03",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@292c955584964725a650f87b7ba0061a",
            "display_name": "Evaluación Sumativa"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@85e4737e3f1d4bb9870edd96e5005abd",
            "display_name": "Materiales de Apoyo"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@6ce8ff5292be4f6cae60f6fe4e35700c",
            "display_name": "Introducción"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@5280879c91f3406b9101659184f49a9f",
            "display_name": "Contenidos"
        },
        {
            "assignment_type": "Foro Debate ",
            "graded": true,
            "short_label": "FD 04",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@5c57d873d04a46b88a0a248c10d0d714",
            "display_name": "Foro Debate"
        },
        {
            "assignment_type": "Actividad Practica ",
            "graded": true,
            "short_label": "AP 04",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@b190660061d541c8ac2ef19d24d58897",
            "display_name": "Actividades Prácticas"
        },
        {
            "assignment_type": "Evaluación Sumativa ",
            "graded": true,
            "short_label": "ES 04",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@0c7fc0428ef64def9399c6dfbae8dcbb",
            "display_name": "Evaluación Final"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@5d94cc19f7a444d39bfa303ef5e81714",
            "display_name": "Materiales de Apoyo"
        },
        {
            "assignment_type": null,
            "graded": false,
            "short_label": null,
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@76290d593b9449a69830c5937d0cb429",
            "display_name": "Encuesta de Satisfacción"
        },
        {
            "assignment_type": "Evaluación Sumativa Final Examen ",
            "graded": true,
            "short_label": "ESFE 01",
            "module_id": "block-v1:AIEP+IEACD+C12-2022+type@sequential+block@6b23d0dfbe4249a8ac03aa7aea5cce3b",
            "display_name": "Evaluación Sumativa Final Examen"
        }
    ],
    "grades_frozen": false,
    "can_see_bulk_management": false
}

dataEvaluacionesImportant = [{"name":dataEvaluaciones.assignment_types}]


console.log(dataprinto)