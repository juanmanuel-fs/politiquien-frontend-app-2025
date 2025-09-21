
import { useState } from 'react'
import Link from "next/link"

// import { SummaryCandidate } from '@/model'

// import DropdownCandidate from "../Pages/Candidate/components/DropdownCandidate"

import ButtonStyle from '@/assets/styles/Button/Button.module.css'


// interface CandidateCardInterface {
//   summaryCandidate: SummaryCandidate
// }

function CandidateCard(
  // { summaryCandidate }: CandidateCardInterface
) {

  return (
    <div className='border border-black-22 rounded-xl w-[260px] max-w-[500px] flex-auto'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between items-start p-2'>
          <label htmlFor="" className='px-3 py-1 rounded-md bg-fill-secondary text-black-75 text-black-500 text-subhead font-medium uppercase '>Guardado</label>
          {/* <DropdownCandidate summaryCandidate={summaryCandidate}/> */}
        </div>
        <div className='flex-none flex justify-center px-4 rounded-l-xl'>
          <div className='relative'>
            <img className='h-48 w-auto rounded-lg bg-fill-tertiary' src="https://declara.jne.gob.pe/Assets/Fotos-HojaVida/234108.jpg" alt="" />
            <img className='absolute h-8 w-8 bottom-1 right-1 rounded' src="https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/142" alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 text-center '>
          <div className='flex flex-col w-[80%]'>
            <h6 className='text-headline uppercase'>RUBELA JUANA, TREJO MARQUEZ</h6>
          </div>
          <div className='flex flex-col gap-1 px-4'>
            <span className='text-subhead block text-black-50'>Postulación:</span>
            <span className='text-callout block font-semibold text-black-100'>GOBERNADOR REGIONAL</span>
            <span className='text-subhead block font-medium text-black-75'>PARTIDO POLITICO SOMOS PERÚ</span>
            <span className='text-subhead block font-medium text-black-75'>AREQUIPA / AREQUIPA / AREQUIPA</span>
            <div className='px-3 py-2 mt-1 rounded-md bg-fill-secondary block text-orange-500 text-subhead font-medium uppercase '>Improcedente</div>
          </div>
        </div>
        <hr  className="mx-4"/>
        <div className='flex flex-col gap-2 mx-4'>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>DNI:</span>
            <span className='block text-subhead font-normal text-black-75'>09854234</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Edad:</span>
            <span className='block text-subhead font-normal text-black-75'>43 Años</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Legal</span>
            <span className='block text-subhead font-normal text-black-75 text-orange-400'>3 Denuncias</span>
          </div>
        </div>
        <div className="p-4">
          <Link href='/candidatos/dghgf' className={`${ButtonStyle['black']} ${ButtonStyle.small} w-full`} >Ver Hoja de Vida</Link>
        </div>
      </div>
    </div>
  )
}

export default CandidateCard