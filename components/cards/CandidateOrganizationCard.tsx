import { PiDotsThreeBold } from 'react-icons/pi'
import ButtonStyle from '@/assets/styles/Button/Button.module.css'
import Link from "next/link";
import Image from 'next/image';

function CandidateOrganizationCard() {
  return (
    <div className='border border-black-22 rounded-xl'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between items-center p-2'>
          <label htmlFor="" className='px-3 py-1 rounded-md bg-fill-secondary text-orange-500 text-headline font-medium uppercase '>Improcedente</label>
          <PiDotsThreeBold className='text-3xl cursor-pointer text-black-50 hover:text-black-100'/>
        </div>
        <div className='flex-none flex justify-center px-4 rounded-l-xl'>
          <div className='relative'>
            <Image className='h-48 w-auto rounded-lg bg-fill-tertiary' width={40} height={40} src="https://declara.jne.gob.pe/Assets/Fotos-HojaVida/234108.jpg" alt="ejemplo" />
          </div>
        </div>
        <div className='flex flex-col items-center gap-3 text-center '>
          <div className='flex flex-col w-[80%]'>
            <h6 className='text-headline uppercase'>RUBELA JUANA, TREJO MARQUEZ</h6>
          </div>
          <div className='flex flex-col gap-1 px-4'>
            <span className='text-subhead block text-black-50'>Postulación:</span>
            <span className='text-callout block font-semibold text-black-100'>GOBERNADOR REGIONAL</span>
            <span className='text-subhead block font-medium text-black-75'>AREQUIPA / AREQUIPA / AREQUIPA</span>
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
        <div className="gap-2 p-4">
          <Link href='/candidatos/dghgf' className={`${ButtonStyle.black} ${ButtonStyle.small} `} >Hoja de Vida</Link>
        </div>
      </div>
    </div>
  )
}

export default CandidateOrganizationCard