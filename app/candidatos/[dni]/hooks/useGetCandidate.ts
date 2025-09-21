import { use, useEffect, useState } from "react"

import presidential from "@/data/process-110/presidential.json"
import parliamential from "@/data/process-110/parliamential.json"
import congressional from "@/data/process-110/congressional.json"

interface Candidate {
    id: number,
    idOrganizacionPolitica: number,
    organizacionPolitica: string,
    numeroDocumento: string,
    nombreCompleto: string,
    cargo: Array<string>,
    numeroCandidato: number,
    postulaDepartamento: string | null
    postulaProvincia: string | null
    postulaDistrito: string | null
    rutaArchivo: string
    estado: string
    txGuidArchivoOrigen: string | null
    candidates: Array<Candidate>
}


const useGetCandidate = (dni: string) => {
    const [candidate, setCandidate] = useState<Candidate>()

    useEffect(() => {
        let temp: Candidate
        temp = presidential.data.find((item) => item.numeroDocumento === dni) as Candidate
        if (temp) {
            setCandidate(temp)
            return
        }
        temp = parliamential.data.find((item) => item.numeroDocumento === dni) as Candidate
        if (temp) {
            setCandidate(temp)
            return
        }
        temp = congressional.data.find((item) => item.numeroDocumento === dni) as Candidate
        if (temp) {
            setCandidate(temp)
            return
        }

        

    },[])

    return {
        candidate
    }
}

export default useGetCandidate