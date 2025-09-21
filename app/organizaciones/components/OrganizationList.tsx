'use client'
import React from 'react'
import CardList from './lists/CardList'
import useFilterOrganization from '../hooks/useFilterOrganization'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function OrganizationList() {

    const {organizations, types, dataSearch, handleChange} = useFilterOrganization()
    
    return (
        <div className='flex flex-col gap-4'>
            <div className="border rounded-lg p-4">
                <div className="flex flex-row gap-2 mb-4">
                    <h3 className="font-semibold">Filtro</h3>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Input id="header" name="name" value={dataSearch.name} onChange={e => handleChange(e.target.value, "name")} placeholder="Buscar partido" />
                    </div>
                    <div>
                        <Select name="type" value={dataSearch.type} onValueChange={value => handleChange(value, "type")}>
                            <SelectTrigger id="type" className="w-full">
                                <SelectValue placeholder="Partido político" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={" "}>Todos</SelectItem>
                                {
                                types.map((item, index) => (
                                    <SelectItem value={item} key={index}>
                                        {item}
                                    </SelectItem>
                                ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <CardList organizations={organizations}/>
        </div>
    )
}
