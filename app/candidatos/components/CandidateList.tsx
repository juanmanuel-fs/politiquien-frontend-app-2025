'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { RowList } from "./lists/RowList"


import { ListIcon } from "lucide-react"
import { BsGrid3X3Gap } from "react-icons/bs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react"
import { PostulationEnum } from "../enums/Postulation"

import CardList from "./lists/CardList"
import { Label } from "@/components/ui/label"
import useFilterCandidate from "../hooks/useFilterCandidate"


export default function CandidateList() {
    
    const {candidates, organizations, departments, dataSearch, nextPage, prevPage, pagination, selectRangoPage, firstPage, lastPage, handleChange } = useFilterCandidate()

    return (
        <>
            <div className="border rounded-lg p-4">
                <div className="flex flex-row gap-2 mb-4 items-center">
                    <h3 className="font-semibold">Filtro</h3>
                    <div className="ml-auto flex flex-row gap-2 items-center">
                        <span>Elecciones:</span>
                        <Select name="postulation" defaultValue={PostulationEnum.PRESIDENTIAL} value={dataSearch.postulation} onValueChange={value => handleChange(value, "postulation")}>
                            <SelectTrigger
                                className="ml-auto w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
                                size="sm"
                            >
                                <SelectValue placeholder="Tipo de candidatura" />
                            </SelectTrigger>
                            <SelectContent align="end">
                            <SelectItem value={PostulationEnum.PRESIDENTIAL}>Presidenciales</SelectItem>
                            <SelectItem value={PostulationEnum.CONGRESSIONAL}>Congresales</SelectItem>
                            <SelectItem value={PostulationEnum.PARLIAMENTARY}>Parlamento Andino</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {
                        dataSearch.postulation != PostulationEnum.CONGRESSIONAL &&
                        <div>
                            <Input id="header" name="name" value={dataSearch.name} onChange={e => handleChange(e.target.value, "name")} placeholder="Buscar candidato" />
                        </div>

                    }
                    
                    <div>
                        <Select name="organization" value={dataSearch.organization} onValueChange={value => handleChange(value, "organization")}>
                        <SelectTrigger id="type" className="w-full">
                            <SelectValue placeholder="Organización política" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={" "}>Todos</SelectItem>
                            {
                            organizations.map((item, index) => (
                                <SelectItem value={item} key={index}>
                                    {item}
                                </SelectItem>
                            ))
                            }
                        </SelectContent>
                        </Select>
                    </div>
                    {
                        dataSearch.postulation == PostulationEnum.CONGRESSIONAL &&
                        <div>
                            <Select name="department" value={dataSearch.department} onValueChange={value => handleChange(value, "department")}>
                            <SelectTrigger id="type" className="w-full">
                                <SelectValue placeholder="Departamento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={" "}>Todos</SelectItem>
                                {
                                departments.map((item, index) => (
                                    <SelectItem value={item} key={index}>
                                        {item}
                                    </SelectItem>
                                ))
                                }
                            </SelectContent>
                            </Select>
                        </div>
                    }
                </div>
            </div>
            <Tabs defaultValue="row">
                <div className="flex flex-row justify-between items-center gap-2">
                <TabsList>
                    <TabsTrigger value="row"><ListIcon/></TabsTrigger>
                    <TabsTrigger value="card"><BsGrid3X3Gap/></TabsTrigger>
                </TabsList>
                <div className="flex items-center justify-between">
                    <div className="flex w-full items-center gap-4 lg:w-fit">
                        <div className="hidden items-center gap-2 lg:flex">
                            <Select value={`${pagination.pageSize}`} onValueChange={ value => selectRangoPage(value) }>
                                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                                    <SelectValue placeholder={pagination.pageTotal}/>
                                </SelectTrigger>
                                <SelectContent side="top">
                                    {[12, 24, 36, 48].map((pageSize) => (
                                        <SelectItem key={pageSize} value={`${pageSize}`}>{pageSize}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="ml-auto flex items-center gap-2 lg:ml-0">
                            <Button
                                variant="outline"
                                className="size-8"
                                size="icon"
                                onClick={prevPage}          
                            >
                                <span className="sr-only">Go to previous page</span>
                                <IconChevronLeft />
                            </Button>
                            <Button
                                variant="outline"
                                className="size-8"
                                size="icon"
                                onClick={nextPage}          
                            >
                                <span className="sr-only">Go to next page</span>
                                <IconChevronRight />
                            </Button>
                        </div>
                    </div>
                </div>
                </div>
                <TabsContent value="row">
                <RowList candidates={candidates} type={dataSearch.postulation} />
                </TabsContent>
                <TabsContent value="card">
                <CardList data={candidates} />
                </TabsContent>
                <div className="flex items-center justify-between px-4">
                    <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
                        {(pagination.pageIndex * pagination.pageSize) + 1} de{" "}
                        {
                            ((pagination.pageIndex + 1) * pagination.pageSize) > pagination.pageTotal
                                ? pagination.pageTotal
                                : (pagination.pageIndex + 1) * pagination.pageSize
                        } candidatos
                    </div>
                    <div className="flex w-full items-center gap-8 lg:w-fit">
                        <div className="hidden items-center gap-2 lg:flex">
                            <Label htmlFor="rows-per-page" className="text-sm font-medium">
                                Filas por página
                            </Label>
                            <Select value={`${pagination.pageSize}`} onValueChange={ value => selectRangoPage(value) }>
                                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                                    <SelectValue placeholder={pagination.pageTotal}/>
                                </SelectTrigger>
                                <SelectContent side="top">
                                    {[12, 24, 36, 48].map((pageSize) => (
                                        <SelectItem key={pageSize} value={`${pageSize}`}>{pageSize}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex w-fit items-center justify-center text-sm font-medium">
                            Página {pagination.pageIndex + 1} de{" "}
                            {pagination.pageCount}
                        </div>
                        <div className="ml-auto flex items-center gap-2 lg:ml-0">
                            <Button
                                variant="outline"
                                className="hidden h-8 w-8 p-0 lg:flex"
                                onClick={firstPage}
                            >
                                <span className="sr-only">Go to first page</span>
                                <IconChevronsLeft />
                            </Button>
                            <Button
                                variant="outline"
                                className="size-8"
                                size="icon"
                                onClick={prevPage}
                            >
                                <span className="sr-only">Go to previous page</span>
                                <IconChevronLeft />
                            </Button>
                            <Button
                                variant="outline"
                                className="size-8"
                                size="icon"
                                onClick={nextPage}
                            >
                                <span className="sr-only">Go to next page</span>
                                <IconChevronRight />
                            </Button>
                            <Button
                                variant="outline"
                                className="hidden size-8 lg:flex"
                                size="icon"
                                onClick={lastPage}
                            >
                                <span className="sr-only">Go to last page</span>
                                <IconChevronsRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </Tabs>
        </>
    )
}
