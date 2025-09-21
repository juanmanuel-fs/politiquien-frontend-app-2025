import organization from '@/data/process-110/organization.json'

export const getOrganizationsService = async (): Promise<[]> => {
    return await organization as []
}

export const getOrganizationService = async (id: number): Promise<object> => {
    return await organization as object
}
