'use client'
import React from 'react'
import Image from "next/image";
import { PostulationEnum } from '../candidatos/enums/Postulation';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function FontPageHome() {
    return (
        <div>
            <div className='relative'>
                <Image className="h-[360px] w-full object-cover rounded-lg" src="/front_page.png" alt="Elecciones Presidenciales 2026" width={1200} height={360} priority />
                <div className="absolute top-0 left-0 right-0 bottom-0 p-4">
                    <h1 className="text-4xl font-black text-white text-shadow-sm text-shadow-stone-600">Elecciones Presidenciales<br /> 2026</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
                <Link href={`/candidatos?postulacion=${PostulationEnum.PRESIDENTIAL}`} className={buttonVariants({variant: "default", size:"lg"})}>
                    Presidentes 
                </Link>
            
                <Link href={`/candidatos?postulacion=${PostulationEnum.CONGRESSIONAL}`}className={buttonVariants({variant: "default", size:"lg"})}>
                    Congresistas
                </Link>
            
                <Link href={`/candidatos?postulacion=${PostulationEnum.PARLIAMENTARY}`}className={buttonVariants({variant: "default", size:"lg"})}>
                    Parlamentarios Andinos
                </Link>
            </div>
        </div>
        
    )
}
