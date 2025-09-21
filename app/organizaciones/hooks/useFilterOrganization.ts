import organization from '@/data/process-110/organization.json'
import { useEffect, useState } from 'react'

interface Organization {
    idOrganizacionPolitica: number
    idProcesoElectoral: number
    strTipoOrganizacion: string
    strOrganizacionPolitica: string
}

const useFilterOrganization = () => {
    const [data, setData] = useState<Organization[]>(organization)
    const [organizations, setOrganizations] = useState<Organization[]>([])
    const [types, setTypes] = useState<string[]>([])
    const [dataSearch, setDataSearch] = useState({
        name: "",
        type: ""
    })
    const handleChange = (e, name) => {
        setDataSearch({...dataSearch, [name]: e})
    }

    useEffect(() => {
        let filteredOrganization = data

        if (dataSearch.name && dataSearch.name.trim().length > 0) {
            const searchTerm = dataSearch.name.toLowerCase().trim()
            filteredOrganization = filteredOrganization.filter(organization => 
                organization.strOrganizacionPolitica.toLowerCase().includes(searchTerm)
            )
        }
        
        if (dataSearch.type && dataSearch.type.trim() !== "" && dataSearch.type !== " ") {
            filteredOrganization = filteredOrganization.filter(organization => 
                organization.strTipoOrganizacion.includes(dataSearch.type.trim())
            )
        }

        setOrganizations(filteredOrganization)
    }, [dataSearch])

    useEffect(() => {
        setOrganizations(organization)
        setTypes([...new Set(organization.map(item => item.strTipoOrganizacion))])
    },[])

    return {
        organizations,
        handleChange,
        dataSearch,
        types
    }
}


export default useFilterOrganization