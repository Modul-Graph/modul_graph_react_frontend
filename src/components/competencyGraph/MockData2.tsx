import {WPFEntry} from "@/lib/zod/competenceTimeTableSchema";


export const data: WPFEntry =
    {
        name: 'ModuleArea A',
        modules: [
            {
                name: 'Submodule A1',
                competences: ['Competence 1', 'Competence 2']
            },
            {
                name: 'Submodule A2',
                competences: ['Competence 2', 'Competence 3']
            }
        ],
        semesters: [1, 2]
    };


