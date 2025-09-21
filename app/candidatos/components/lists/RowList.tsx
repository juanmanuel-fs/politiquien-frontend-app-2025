"use client"

import * as React from "react"

import {
    IconCircleCheckFilled,
    IconDotsVertical,
    IconEye,
    IconLoader,
    IconShare,
    IconTrendingUp,
} from "@tabler/icons-react"


import { useIsMobile } from "@/hooks/useIsMobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
} from "@/components/ui/tabs"
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PositionOrderEnum, PostulationEnum } from "../../enums/Postulation"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import department from "@/data/departments.json"

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

type RowListProps = {
    candidates: Candidate[],
    type: PostulationEnum
}

export function RowList({ candidates, type }: RowListProps) {
    
    return (
        <Tabs defaultValue="outline" className="w-full flex-col justify-start gap-6">
            <TabsContent value="outline" className="relative flex flex-col gap-4 overflow-auto">
                <div className="overflow-hidden rounded-lg border">
                    <Table>
                        <TableHeader className="sticky top-0">
                            <TableRow>
                                {
                                    columns[type].map((column, index) => {
                                        return (
                                            <TableHead key={column.accessorKey ?? 100} className={`bg-white ${index == 0 ? 'sticky left-0' : ''}`} >{column.header}</TableHead>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                candidates && candidates.length > 0
                                    ? 
                                    candidates.map((row: Candidate) => <ExpandedCell key={row.id} row={row} type={type} />)
                                    :
                                    (
                                        <TableRow>
                                            <TableCell
                                                colSpan={columns[type].length}
                                                className="h-24 text-center"
                                            >
                                                No se encontró.
                                            </TableCell>
                                        </TableRow>
                                    )
                            }
                        </TableBody>
                    </Table>
                </div>
            </TabsContent>
        </Tabs>
    )
}

function ExpandedCell({ row, type }: { row: Candidate, type: PostulationEnum }) {
    const [isExpanded, setExpanded] = useState<boolean | undefined>(undefined)
    const router = useRouter()
    const rowRef = useRef<HTMLTableRowElement>(null)

    const navigate = (path: string) => {
        router.push(path)
    }

    useEffect(() => {

        if (rowRef.current && isExpanded != undefined) {
            const rect = rowRef.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (isExpanded) {    
                const targetY = rect.top + scrollTop - 72;
                setTimeout(() => {
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                }, 500) 
    
            } else {
                const targetY = rect.top + scrollTop - 72;
                window.scrollTo({ top: targetY, behavior: "smooth" });

            }
        }
    }, [isExpanded])


    return (
        <TableRow ref={rowRef} className="relative" key={row.id}>
            {    
                columns[type].map((column: Column, index) => {
                    if (type == PostulationEnum.CONGRESSIONAL && (column.accessorKey == "senators-1" || column.accessorKey == "senators-2" || column.accessorKey == "deputy" )) 
                        return (column.cell({ row , isExpanded, setExpanded, navigate, index }))
                    return (
                        column.cell({ row, index})
                    )
                })
            }
        </TableRow>
    )
}


interface Column {
    accessorKey?: string
    header: string
    cell: {
        (
            props: {
                row: Candidate
                isExpanded?: boolean
                setExpanded?: React.Dispatch<React.SetStateAction<boolean | undefined>>
                navigate?: (id: string) => void
                index: number
            }
        ): React.ReactNode
    }
    enableHiding?: boolean
    id?: string
}

const PresidentialColumns: Column[] = [
    {
        accessorKey: "candidate",
        header: "Candidatos Presidenciales",
        cell: ({ row }) => {
            return (
                <TableCell key={row.id*2} className="min-w-[300px]">
                    <TableCellViewer item={row} />
                </TableCell>
            )
        },
        enableHiding: false,
    },
    {
        accessorKey: "Presidentials",
        header: "Canidatos Vicepresidenciales",
        cell: ({ row }) => {
            return (
                <TableCell key={row.id * 7} className="min-w-[300px]">
                    <div className="flex flex-col gap-2">
                        {
                            row.candidates.map((item, index) => {
                                return (
                                    <Link href={"/candidatos/" + item.numeroDocumento} key={index} className="text-xs hover:underline">{ index + 1 }º {item.nombreCompleto}</Link>
                                )
                            })
                        }
                    </div>
                </TableCell>
            )
        }
    },
    {
        accessorKey: "postulation",
        header: "Organización",
        cell: ({ row }) => {
            return (
                <TableCell key={row.id*9} className="min-w-[300px]">
                    <Link href={"/organizaciones/" + row.idOrganizacionPolitica} className="text-xs flex flex-row gap-2 items-center text-wrap group">
                        <img className="h6 w-6" src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${row.idOrganizacionPolitica}`} alt={row.organizacionPolitica} /> <span className="group-hover:underline">{row.organizacionPolitica}</span>
                    </Link>
                </TableCell>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({ row }) => (
            <TableCell key={row.id*3}>
                <Badge variant="outline" className="text-muted-foreground px-1.5 mx-auto">
                    {row.estado === "INSCRITO" ? (
                        <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                    ) : (
                        <IconLoader />
                    )}
                    {row.estado}
                </Badge>
            </TableCell>
        ),
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({row}) => (
            <TableCell key={row.id*4}>
                <DropdownMenu>
                    <DropdownMenuTrigger className="mx-2 ml-auto" asChild>
                        <Button
                            variant="ghost"
                            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                            size="icon"
                        >
                            <IconDotsVertical />
                        </Button> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem> 
                            <Link href={"/candidatos/" + row.numeroDocumento} className="flex items-center gap-2">
                                <IconEye /> Ver candidato
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem> <LiaUserFriendsSolid/> Comparar</DropdownMenuItem>
                        <DropdownMenuItem> <IconShare/> Compartir</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        ),
    }
]

const CongressionalColumns: Column[] = [
    {
        accessorKey: "candidate",
        header: "Partido",
        cell: ({ row, index, isExpanded= undefined, navigate }) => {
            return (
                <TableCell key={index} className={`min-w-[300px] align-top bg-white ${index == 0 && 'sticky left-0'}`}>
                    <Link className="flex items-center gap-3 group select-none cursor-pointer" href={(`/organizaciones/`+row.idOrganizacionPolitica+`?postulacion=congressional`)}>
                        <Image className="h-20 w-20 rounded-sm" height={80} width={80} src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${row.idOrganizacionPolitica}`} loading="lazy" unoptimized alt={row.nombreCompleto} />
                        <div className="flex flex-col">
                            <span className="text-wrap group-hover:underline">{row.organizacionPolitica}</span>
                        </div>      
                    </Link>
                </TableCell>
            )
        },
        enableHiding: false,
    },
    {
        accessorKey: "senators-1",
        header: "Senadores por Distrito Único",
        cell: ({ row, isExpanded= undefined, setExpanded, index }) => {
            return (
                <TableCell key={index} className={`min-w-[300px] align-top` }>    
                    <div className={`text-xs flex flex-col gap-1 transition-all duration-500 overflow-hidden ${ isExpanded ?  "max-h-[1800px]" : "max-h-14" }`}>
                        {
                            row.candidates.filter(candidate => candidate.cargo.includes("SENADOR")).slice(0, 30).map((candidate, index) => {
                                return (
                                    <TableChildCellViewer item={candidate} index={index} key={index}/>
                                )}
                            )
                        }
                    </div>
                    {
                        <Button variant="link" className="h-5 px-0 text-xs cursor-pointer mt-1" size={undefined} onClick={() => setExpanded && setExpanded(!isExpanded)}>
                            { isExpanded ? "Ver menos" : "Ver más" } 
                        </Button>
                    }
                </TableCell>

            )
        }
    },
    {
        accessorKey: "senators-2",
        header: "Senadores por Departamento",
        cell: ({ row, isExpanded= undefined, setExpanded, navigate}) => {
            return (
                <TableCell key={row.id * 13} className="min-w-[300px] align-top">    
                    <div className={`text-xs flex flex-col gap-1 transition-all duration-500 overflow-hidden ${ isExpanded ?  "max-h-[1800px]" : "max-h-14" }`}>
                        {
                            row.candidates.filter(candidate => candidate.cargo.includes("SENADOR")).slice(30, 60).map((candidate, index) => {
                                const newCandidate = {
                                    ...candidate,
                                    nombreCompleto : `${candidate.nombreCompleto } - ${department[index] ?? 'LIMA'}`
                                }
                                return (
                                    <TableChildCellViewer item={newCandidate} index={index} key={index}/>
                                )}
                            )
                        }
                    </div>
                    {
                        <Button variant="link" className="h-5 px-0 text-xs cursor-pointer mt-1" size={undefined} onClick={() => setExpanded && setExpanded(!isExpanded)}>
                            { isExpanded ? "Ver menos" : "Ver más" } 
                        </Button>
                    }
                </TableCell>

            )
        }
    },
    {
        accessorKey: "deputy",
        header: "Diputado",
        cell: ({ row, isExpanded= undefined, setExpanded, navigate }) => {
            return (
                <TableCell key={row.id * 7} className="min-w-[300px] align-top">
                    <div className={`text-xs flex flex-col gap-1 transition-all duration-500 overflow-hidden ${ isExpanded ?  "max-h-[1800px]" : "max-h-14" }`}>
                        {
                            row.candidates.filter(candidate => candidate.cargo.includes("DIPUTADO")).map((candidate, index) => {
                                const newCandidate = {
                                    ...candidate,
                                    nombreCompleto : `${candidate.nombreCompleto } - ${department[index % 5] ?? 'LIMA'}`
                                }
                                return (
                                    <TableChildCellViewer item={newCandidate} index={index} key={index}/>
                                )
                            })
                        }                        
                    </div>
                    {
                        <Button variant="link" className="h-5 px-0 text-xs cursor-pointer mt-1" size={undefined} onClick={() => setExpanded && setExpanded(!isExpanded)}>
                            { isExpanded ? "Ver menos" : "Ver más" } 
                        </Button>
                    }
                </TableCell>

            )
        }
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({row}) => (
            <TableCell key={row.id * 3} className="align-top">
                <DropdownMenu>
                    <DropdownMenuTrigger className="mx-2 ml-auto" asChild>
                        <Button
                            variant="ghost"
                            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                            size="icon"
                        >
                            <IconDotsVertical />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem asChild>
                            <Link href={"/organizaciones/" + row.idOrganizacionPolitica} className="flex items-center gap-2">
                                <IconEye /> Ver Partido
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem> <LiaUserFriendsSolid/> Comparar</DropdownMenuItem>
                        <DropdownMenuItem> <IconShare/> Compartir</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>

        ),
    }
]

const ParliamentaryColumns: Column[] = [
    {
        accessorKey: "candidate",
        header: "Candidato",
        cell: ({ row }) => {
            return (
                <TableCell key={row.id * 2} className="min-w-[300px]">
                    < TableCellViewer item = { row } />
                </TableCell>
            )
        },
        enableHiding: false,
    },
    // {
    //     accessorKey: "postulation",
    //     header: "Postula",
    //     cell: ({ row }) => {
    //         return (
    //             <TableCell key={row.id * 11} className="min-w-[300px]">   
    //                 <div className="text-xs">
    //                     <span className="text-wrap">{row.cargo[0]}</span>
    //                     <div className="flex flex-row">
    //                         <span className="">{ row.postulaDepartamento }</span>
    //                         <span className="">{ row.postulaProvincia }</span>
    //                         <span className="">{ row.postulaDistrito }</span>
    //                     </div>
    //                 </div>
    //             </TableCell>
    //         )
    //     }
    // },
    {
        accessorKey: "organization",
        header: "Organización",
        cell: ({ row }) => {
            return ( 
                <TableCell key={row.id * 3} className="min-w-[200px]">
                    <Link href={"/organizaciones/" + row.idOrganizacionPolitica} className="text-xs flex flex-row gap-2 items-center group">
                        <img className="h6 w-6" src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${row.idOrganizacionPolitica}`} alt={row.organizacionPolitica} />
                        <p className="text-wrap group-hover:underline">{row.organizacionPolitica}</p>
                    </Link>
                </TableCell>
            )
        } 
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({ row }) => (
            <TableCell key={row.id * 7}>   
                <Badge variant="outline" className="text-muted-foreground px-1.5 mx-auto">
                    {row.estado === "INSCRITO" ? (
                        <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                    ) : (
                        <IconLoader />
                    )}
                    {row.estado}
                </Badge>
            </TableCell>
        ),
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => (
            <TableCell key={row.id * 11}>
                <DropdownMenu>
                    <DropdownMenuTrigger className="mx-2 ml-auto" asChild>
                        <Button
                            variant="ghost"
                            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                            size="icon"
                        >
                            <IconDotsVertical />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem>
                            <Link href={"/candidatos/" + row.numeroDocumento} className="flex items-center gap-2">
                                <IconEye /> Ver candidato
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem> <LiaUserFriendsSolid/> Comparar</DropdownMenuItem>
                        <DropdownMenuItem> <IconShare/> Compartir</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        ),
    }
]
const columns = {
    [PostulationEnum.PRESIDENTIAL]: PresidentialColumns,
    [PostulationEnum.CONGRESSIONAL]: CongressionalColumns,
    [PostulationEnum.PARLIAMENTARY]: ParliamentaryColumns,
    [PostulationEnum.SENATOR]: CongressionalColumns,
}

function TableCellViewer({item, isExpanded}: {item: Candidate, isExpanded?: boolean | undefined}) {
    const isMobile = useIsMobile()
    
    return (
        <Drawer direction={isMobile ? "bottom" : "right"}>
            <DrawerTrigger asChild className="group select-none cursor-pointer">
                <div className="flex items-center gap-3">
                    {
                        item.cargo[0] == PositionOrderEnum.PRESIDENTIAL || item.cargo[0] == PositionOrderEnum.PARLIAMENTARY
                            ?
                            <>
                                <Image className="h-20 w-14 rounded-sm" height={80} width={56} src={`https://declara.jne.gob.pe${item.rutaArchivo}`} loading="lazy" unoptimized alt={item.nombreCompleto} />
                                <div className="flex flex-col gap-1">
                                    <span className="text-wrap group-hover:underline">{item.nombreCompleto}</span>
                                    <span className="text-wrap text-xs text-muted-foreground"> {item.numeroDocumento} </span>
                                </div>
                            </>
                            :
                            <>
                                <Image className="h-20 w-20 rounded-sm" height={80} width={80} src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${item.idOrganizacionPolitica}`} loading="lazy" unoptimized alt={item.nombreCompleto} />
                                <div className="flex flex-col">
                                    <span className="text-wrap group-hover:underline">{item.organizacionPolitica}</span>
                                </div>
                            </>
                            
                    }   
                </div>
                
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="gap-1">
                    <DrawerTitle>
                        { 
                            item.cargo[0] == PositionOrderEnum.CONGRESSIONAL
                                ?
                                <div className="flex flex-row gap-4 items-center">
                                    <Image className="h-10 w-10" height={40} width={40} src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${item.idOrganizacionPolitica}`} loading="lazy" unoptimized alt={item.nombreCompleto} />
                                    <div className="flex flex-col">
                                        <span className="line-clamp-2">{item.organizacionPolitica}</span>
                                    </div>
                                </div>
                                : 
                                <div className="flex flex-row gap-4 items-center">
                                    <Image className="h-20 w-auto rounded-sm" height={80} width={56} src={`https://declara.jne.gob.pe${item.rutaArchivo}`} loading="lazy" unoptimized alt={item.nombreCompleto} />
                                    <div className="flex flex-col">
                                        <span className="text-wrap line-clamp-1">{item.nombreCompleto.split(" - ")[0]}</span>
                                        <span className="text-wrap text-xs text-muted-foreground"> {item.cargo[0]} </span>
                                        <Badge variant="outline" className="text-muted-foreground px-1.5 mt-1">
                                            {item.estado === "INSCRITO" ? (
                                                <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                                            ) : (
                                                <IconLoader />
                                            )}
                                            {item.estado}
                                        </Badge>
                                    </div>
                                </div>
                        }
                    </DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
     
                    <Separator />
                    {
                        item.cargo[0] == PositionOrderEnum.CONGRESSIONAL
                            ? 
                            <>
                                <div className="grid gap-2">
                                    <div className="flex gap-2 leading-none font-medium">
                                        Historia
                                        <IconTrendingUp className="size-4" />
                                    </div>
                                    <div className="text-muted-foreground">
                                        Lorem Ipsum is simply dummy text of the <b>printing and typesetting</b> industry. Lorem Ipsum has been
                                        the industrys <b>standard dummy</b> text ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. <b>It has survived not only </b>five centuries, but
                                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with <b>the release of Letraset sheets</b> containing Lorem Ipsum passages, and more recently
                                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-3">
                                        <Label htmlFor="header">Senadores ({ item.candidates.filter(candidate => candidate.cargo.includes("SENADOR")).length })</Label>
                                        <div className="text-xs">
                                            {
                                                item.candidates.filter(candidate => candidate.cargo.includes("SENADOR")).map((candidate, index) => {
                                                    return<p className = "flex flex-row text-muted-foreground" key = { index }>< span className = "min-w-4 block text-right mr-1" > { index + 1}.</span> { candidate.nombreCompleto }</p >
                                                })
                                            }
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="flex flex-col gap-3">
                                        <Label htmlFor="header">Diputado ({ item.candidates.filter(candidate => candidate.cargo.includes("DIPUTADO")).length })</Label>
                                        <div className="text-xs">
                                            {
                                                item.candidates.filter(candidate => candidate.cargo.includes("DIPUTADO")).map((candidate, index) => {
                                                    return<p className = "flex flex-row text-muted-foreground" key = { index }>< span className = "min-w-4 block text-right mr-1" > { index + 1}.</span> { candidate.nombreCompleto }</p >
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 leading-none font-medium">
                                        Postulation
                                        <IconTrendingUp className="size-4" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-xs mt-2">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Proceso electoral</label>
                                            <label className="py-2 p-3 border rounded-md">ELECCIONES PRESIDENCIALES 2026</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Posición</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.cargo[0]}</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Organización politica</label>
                                            <label className="py-2 p-3 border rounded-md flex gap-2">
                                                <Image className="h-4 w-4" height={10} width={10} src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${item.idOrganizacionPolitica}`} loading="lazy" unoptimized alt={item.nombreCompleto} />
                                                {item.organizacionPolitica}
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Posición</label>
                                            <label className="py-2 p-3 border rounded-md flex gap-2">
                                                {
                                                    item.estado === "INSCRITO" ? (
                                                        <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" size={16}/>
                                                    ) : (
                                                        <IconLoader size={16}/>
                                                    )
                                                }
                                                {item.estado}
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Departamento</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.postulaDepartamento ?? "--"}</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Provincia</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.postulaProvincia ?? "--"}</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Distrito</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.postulaDistrito ?? "--"}</label>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 leading-none font-medium">
                                        Datos Personales
                                        <IconTrendingUp className="size-4" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-xs mt-2">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Nombre completo</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.nombreCompleto.split("-")[0] }</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Sexo</label>
                                            <label className="py-2 p-3 border rounded-md">MASCULIN@</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Fecha de nacimiento</label>
                                            <label className="py-2 p-3 border rounded-md">04-12-1980</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">DNI</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.numeroDocumento }</label>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }

                </div>
                <DrawerFooter>
                    <Button asChild>
                        <Link href={"/candidatos/" + item.numeroDocumento}>
                            Ver Candidato(s)
                        </Link>
                    </Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cerrar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


function TableChildCellViewer({item, index }: {item: Candidate, index: number}) {
    const isMobile = useIsMobile()

    return (
        <Drawer direction={isMobile ? "bottom" : "right"}>
            <DrawerTrigger asChild >
                <p className="flex flex-row text-muted-foreground hover:underline cursor-pointer group select-none">
                    < span className="min-w-2.5 block text-right mr-1" > {index + 1}.</span>
                    {item.nombreCompleto}
                </p >
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="gap-1">
                    <DrawerTitle>
                        <div className="flex flex-row gap-4 items-center">
                            <Image className="h-20 w-auto rounded-sm" height={80} width={56} src={`https://declara.jne.gob.pe${item.rutaArchivo}`} loading="lazy" unoptimized alt={item.nombreCompleto} />
                            <div className="flex flex-col">
                                <span className="text-wrap line-clamp-1">{item.nombreCompleto}</span>
                                <span className="text-wrap text-xs text-muted-foreground"> {item.cargo[0]} </span>
                                <Badge variant="outline" className="text-muted-foreground px-1.5 mt-1">
                                    {item.estado === "INSCRITO" ? (
                                        <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                                    ) : (
                                        <IconLoader />
                                    )}
                                    {item.estado}
                                </Badge>
                            </div>
                        </div>
                    </DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
     
                    <Separator />
                    <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 leading-none font-medium">
                                        Postulation
                                        <IconTrendingUp className="size-4" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-xs mt-2">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Proceso electoral</label>
                                            <label className="py-2 p-3 border rounded-md">ELECCIONES PRESIDENCIALES 2026</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Posición</label>
                                            <label className="py-2 p-3 border rounded-md">{item.cargo[0]} - {item.cargo[1]}</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Organización politica</label>
                                            <label className="py-2 p-3 border rounded-md flex gap-2">
                                                <Image className="h-4 w-4" height={10} width={10} src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${item.idOrganizacionPolitica}`} loading="lazy" unoptimized alt={item.nombreCompleto} />
                                                {item.organizacionPolitica}
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Posición</label>
                                            <label className="py-2 p-3 border rounded-md flex gap-2">
                                                {
                                                    item.estado === "INSCRITO" ? (
                                                        <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" size={16}/>
                                                    ) : (
                                                        <IconLoader size={16}/>
                                                    )
                                                }
                                                {item.estado}
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Departamento</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.postulaDepartamento ?? "--"}</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Provincia</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.postulaProvincia ?? "--"}</label>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-muted-foreground">Distrito</label>
                                            <label className="py-2 p-3 border rounded-md">{ item.postulaDistrito ?? "--"}</label>
                                        </div>
                                    </div>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 leading-none font-medium">
                            Datos Personales
                            <IconTrendingUp className="size-4" />
                        </div>
                        <div className="flex flex-col gap-2 text-xs mt-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-muted-foreground">Nombre completo</label>
                                <label className="py-2 p-3 border rounded-md">{ item.nombreCompleto.split("-")[0] }</label>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-muted-foreground">Sexo</label>
                                <label className="py-2 p-3 border rounded-md">MASCULIN@</label>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-muted-foreground">Fecha de nacimiento</label>
                                <label className="py-2 p-3 border rounded-md">04-12-1980</label>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-muted-foreground">DNI</label>
                                <label className="py-2 p-3 border rounded-md">{ item.numeroDocumento }</label>
                            </div>
                        </div>
                    </div>
                       
                </div>
                <DrawerFooter>
                    <Button asChild>
                        <Link href={"/candidatos/" + item.numeroDocumento}>
                            Ver Candidato(s)
                        </Link>
                    </Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cerrar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
