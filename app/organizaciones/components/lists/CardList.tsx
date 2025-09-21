'use client'
import { PostulationEnum } from '@/app/candidatos/enums/Postulation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { IconEye, IconShare } from '@tabler/icons-react'
import { Link2, Link2Icon, LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiLink, BiLinkExternal } from 'react-icons/bi'
import { LiaUserFriendsSolid } from 'react-icons/lia'

interface Organization {
    idOrganizacionPolitica: number
    idProcesoElectoral: number
    strTipoOrganizacion: string
    strOrganizacionPolitica: string
}

type CardListProps = {
    organizations: Organization[],
    className?: string
}

export default function CardList({ organizations, className }: CardListProps) {


    return (
        <div className='min-h-80'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    organizations.length > 0 
                        ? organizations.map((organization, index) => ItemCardList({ organization, index }))
                        : <span className='my-auto text-muted-foreground'>No hay organizaciones politicas</span>
                }
            </div>
        </div>
    )
}

type ItemCardListProps = {
    organization: Organization,
    index: number
}

function ItemCardList({ organization, index }: ItemCardListProps) { 
    const router = useRouter()

    return (
        <Card className="overflow-hidden p-0" key={index}>
            <CardContent className="px-0 h-full flex flex-col sm:flex-row">
                <div className="h-full sm:h-32 md:h-40 relative aspect-square p-2">
                <img
                    src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${organization.idOrganizacionPolitica}`}
                    alt="Image"
                    className="inset-0 h-full w-full object-fill dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
                <div className="h-full flex flex-col gap-1 px-2 py-1">
                    <div className="flex flex-col gap-1">
                        <div className="group cursor-pointer flex flex-col gap-1" onClick={() => router.push(`/organizaciones/${organization.idOrganizacionPolitica}`)}>
                            <h4 className="text-sm md:text-base font-bold leading-tight line-clamp-2 group-hover:underline">{organization.strOrganizacionPolitica}</h4>
                            <p className='text-xs text-muted-foreground leading-tight line-clamp-2'>{ organization.strTipoOrganizacion }</p>
                        </div>
                        <h6 className='text-xs font-semibold uppercase'>Candidatos</h6>
                        <div className='flex flex-col gap-1 text-xs'>
                            <Link
                                href={`/organizaciones/${organization.idOrganizacionPolitica}?postulacion=${PostulationEnum.PRESIDENTIAL}`}
                                className='flex flex-row gap-2 items-center'
                            >
                                Precidenciales <BiLinkExternal />
                            </Link>
                            <Link
                                href={`/organizaciones/${organization.idOrganizacionPolitica}?postulacion=${PostulationEnum.CONGRESSIONAL}`}
                                className='flex flex-row gap-2 items-center'
                            >
                                Congresales <BiLinkExternal />
                            </Link>

                            <Link
                                href={`/organizaciones/${organization.idOrganizacionPolitica}?postulacion=${PostulationEnum.PARLIAMENTARY}`}
                                className='flex flex-row gap-2 items-center'
                            >
                                Parlamantes <BiLinkExternal />
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}