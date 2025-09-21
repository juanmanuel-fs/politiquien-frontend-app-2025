import { useEffect, useState } from "react"
import { PositionOrderEnum, PostulationEnum } from "../enums/Postulation"
import presidential from "@/data/process-110/presidential.json"
import parliamential from "@/data/process-110/parliamential.json"
import congressional from "@/data/process-110/congressional.json"
import departments from "@/data/departments.json"
import { useRouter, useSearchParams } from "next/navigation"

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

type DataSearchType = {
    name: string,
    postulation: PostulationEnum,
    organization: string,
    department: string,
}

const useFilterCandidate = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    
    const [filteredData, setFilteredData] = useState<Candidate[]>([])
    const [data, setData] = useState<Candidate[]>(presidential.data)
    const [candidates, setCandidates] = useState<Candidate[]>([])
    const [organizations, setOrganizations] = useState<string[]>([])

    const [dataSearch, setDataSearch] = useState<DataSearchType>({
        name: "",
        postulation: searchParams.get("postulacion") as PostulationEnum ?? PostulationEnum.PRESIDENTIAL,
        organization: "",
        department: "",
    })

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 12,
        pageTotal: 0,
        pageCount: 0
    })

    const handleChange = (e: string | number, name: string) => {
        setDataSearch({ ...dataSearch, [name]: e })
        setPagination({ ...pagination, pageIndex: 0, pageSize: 12 })
        
        name == 'postulation' && setParam('postulacion', e as string)

    }

    const setParam = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value);
        // 👇 reemplaza la URL en vez de "push"
        router.replace(`?${params.toString()}`);
      };

    useEffect(() => {
        let filteredCandidates = data
        
        // Filtro por nombre (corregido: estaba usando department en lugar de name)
        if (dataSearch.name && dataSearch.name.trim().length > 0) {
            const searchTerm = dataSearch.name.toLowerCase().trim()
            filteredCandidates = filteredCandidates.filter(candidate => 
                candidate.nombreCompleto.toLowerCase().includes(searchTerm) || candidate.numeroDocumento.includes(searchTerm) || candidate.candidates.some(cand => cand.nombreCompleto.toLowerCase().includes(searchTerm) || cand.numeroDocumento.includes(searchTerm))
            )
        }
        
        // Filtro por organización política
        if (dataSearch.organization && dataSearch.organization.trim() !== "" && dataSearch.organization !== " ") {
            filteredCandidates = filteredCandidates.filter(candidate => 
                candidate.organizacionPolitica.toLowerCase().includes(dataSearch.organization.toLowerCase().trim())
            )
        }
        
        // Filtro por departamento (solo para candidatos congresales)
        if (dataSearch.department && dataSearch.department.trim() !== "" && dataSearch.department !== " ") {
            if (dataSearch.postulation == PostulationEnum.CONGRESSIONAL) {
                filteredCandidates = filteredCandidates.filter(candidate => 
                    candidate.candidates.some(cand => cand.postulaDepartamento &&  cand.postulaDepartamento.toLowerCase().includes(dataSearch.department.toLowerCase().trim()))
                )
            }
            else {
                filteredCandidates = filteredCandidates.filter(candidate =>
                    candidate.postulaDepartamento && 
                    candidate.postulaDepartamento.toLowerCase().includes(dataSearch.department.toLowerCase().trim())
                )
            }
        }
        
        console.log(filteredCandidates.length)
        setFilteredData(filteredCandidates)
    },[dataSearch.name, dataSearch.organization, dataSearch.department])


    const nextPage = () => {
        if (pagination.pageIndex + 1 != pagination.pageCount) {
            const nextPageNumber = pagination.pageIndex + 1
            setPagination(
                {
                    ...pagination,
                    pageIndex: nextPageNumber,
                }
            )
        }
    }  

    const prevPage = () => {
        if (pagination.pageIndex > 0) {
            const nextPageNumber = pagination.pageIndex - 1
            setPagination(
                {
                    ...pagination,
                    pageIndex: nextPageNumber,
                }
            )
        }
    }

    const firstPage = () => {
        setPagination(
            {
                ...pagination,
                pageIndex: 0
            }
        )
    }

    const lastPage = () => {
        setPagination(
            {
                ...pagination,
                pageIndex: pagination.pageCount - 1
            }
        )
    }

    const selectRangoPage = (value: string) => {
        const newPageSize = parseInt(value)
        const newPageIndex = 0
        setPagination(
            {
                ...pagination,
                pageIndex: newPageIndex,
                pageSize: newPageSize,
                pageCount: Math.ceil(filteredData.length / newPageSize)
            }
        )
    }

    useEffect(() => {
        const startIndex = pagination.pageIndex * pagination.pageSize
        const endIndex = startIndex + pagination.pageSize

        setPagination(
            {
                ...pagination,
                pageTotal: filteredData.length,
                pageCount: Math.ceil(filteredData.length / pagination.pageSize)
            }
        )
        setCandidates(filteredData.slice(startIndex, endIndex))
    }, [pagination.pageIndex, pagination.pageSize, filteredData])

    useEffect(() => {
        switch (dataSearch.postulation) {
            case PostulationEnum.PRESIDENTIAL: 
                const candidatesOrderPresidential: Candidate[] = []
                for (let index = 0; index < presidential.data.length; index = index + 3) {
                    const president = (presidential.data.slice(index, index + 3).find(elem => elem.cargo[0] == PositionOrderEnum.PRESIDENTIAL)!) as Candidate
                    const firstVicePresident = presidential.data.slice(index, index + 3).find(elem => elem.cargo[0] == PositionOrderEnum.FIRST_VICE_PRESIDENT)! as Candidate
                    const secondVicePresident = presidential.data.slice(index, index + 3).find(elem => elem.cargo[0] == PositionOrderEnum.SECOND_VICE_PRESIDENT)! as Candidate

                    // Clonamos el objeto del presidente para evitar mutaciones directas
                    const presidentWithCandidates = {
                        ...president,
                        candidates: [firstVicePresident, secondVicePresident]
                    };
                    candidatesOrderPresidential.push(presidentWithCandidates)
                }
                setData(candidatesOrderPresidential)
                setFilteredData(candidatesOrderPresidential)
                setOrganizations([...new Set(presidential.data.map(item => item.organizacionPolitica))])
                break
            case PostulationEnum.CONGRESSIONAL:
                const candidatesSelectByOrganizaition: Candidate[] = []

                const organizationNames: string[] = [...new Set(congressional.data.map(item => item.organizacionPolitica))]

                organizationNames.forEach(name => {
                    const temp: Candidate[] = congressional.data.filter(candidate => candidate.organizacionPolitica == name)
                    const candidateFather: Candidate = temp[0]
                    candidateFather.candidates = temp
                    candidatesSelectByOrganizaition.push(candidateFather)
                    console.log(candidateFather)
                });

                setData(candidatesSelectByOrganizaition)
                setFilteredData(candidatesSelectByOrganizaition)
                setOrganizations([...organizationNames])
                break
            case PostulationEnum.SENATOR: 
                setData(parliamential.data)
                setFilteredData(parliamential.data)
                setOrganizations([...new Set(parliamential.data.map(item => item.organizacionPolitica))])
                break
            case PostulationEnum.PARLIAMENTARY: 
                setData(parliamential.data)
                setFilteredData(parliamential.data)
                setOrganizations([...new Set(parliamential.data.map(item => item.organizacionPolitica))])
                break
            default: 
                setData(presidential.data)
                setFilteredData(presidential.data)
                setOrganizations([...new Set(presidential.data.map(item => item.organizacionPolitica))])
            break
        }
        
    }, [dataSearch.postulation])

    useEffect(() => {
        setDataSearch({... dataSearch, organization: "", name: "", department: ""})

        setPagination(
            {
                ...pagination,
                pageIndex: 0,
                pageSize: 12,
                pageTotal: filteredData.length,
                pageCount: Math.ceil(filteredData.length / 12)
            }
        )
        setCandidates(filteredData.slice(0, 12))
    }, [data])

    return {
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        pagination,
        selectRangoPage,
        candidates,
        organizations,
        handleChange,
        departments,
        dataSearch,
    }
}

export default useFilterCandidate