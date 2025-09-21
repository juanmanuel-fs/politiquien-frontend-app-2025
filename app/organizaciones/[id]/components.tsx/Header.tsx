'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import organixzations from "@/data/process-110/organization.json"

interface OrganizationInterface {
    idOrganizacionPolitica: number
    idProcesoElectoral: number
    strTipoOrganizacion: string
    strOrganizacionPolitica: string
}

function HeaderOrganization({ id }: {id: number}) {

    const [organization, setOrganization] = useState<OrganizationInterface>({} as OrganizationInterface)

    useEffect(() => {
        const temp = organixzations.find(org => org.idOrganizacionPolitica == id)
        if (temp) {
            setOrganization(temp)
        }
    }, [])

    return (
        <Card className="overflow-hidden p-0 max-w-[760px] mx-auto">
            <CardContent className="px-0 h-full flex flex-col sm:flex-row ">
                <div className="h-full sm:h-32 md:h-64 relative aspect-square p-2">
                    <img
                        src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${organization.idOrganizacionPolitica}`}
                        alt="Image"
                        className="inset-0 h-full w-full object-fill dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
                <div className="h-full flex flex-col gap-2 px-2 py-2">
                    <div className="flex flex-col gap-3">
                        <div className="group flex flex-col gap-1">
                            <h4 className="text-sm md:text-base font-bold leading-tight line-clamp-1 group-hover:underline">{organization.strOrganizacionPolitica}</h4>
                            <p className='text-xs text-muted-foreground leading-tight line-clamp-1'>{ organization.strTipoOrganizacion }</p>
                        </div>
                        <div>
                            <h6 className='text-xs font-semibold uppercase mb-2'>Hisotria</h6>
                            <div className='text-xs text-muted-foreground'>
                                Lorem Ipsum is simply dummy text of the <b>printing and typesetting</b> industry. Lorem Ipsum has been
                                the industrys <b>standard dummy</b> text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. <b>It has survived not only </b>five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with <b>the release of Letraset sheets</b> containing Lorem Ipsum passages, and more recently
                                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div>
                            <h6 className='text-xs font-semibold uppercase mb-2'>Candidatos</h6>
                            <div className='flex flex-col gap-1 text-xs'>
                                <ul className="flex flex-row gap-6">
                                    <li>Precidenciales</li>
                                    <li>Congresales</li>
                                    <li>Parlamantes</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default HeaderOrganization