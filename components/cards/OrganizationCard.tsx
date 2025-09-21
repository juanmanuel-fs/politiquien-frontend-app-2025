
import { PiDotsThreeBold } from "react-icons/pi";
import ButtonStyle from '@/assets/styles/Button/Button.module.css'
import Link from "next/link";
import Image from "next/image";


function OrganizationCard() {
  return (
    <div className='border border-black-22 rounded-xl'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-end items-center p-2'>
          <PiDotsThreeBold className='text-3xl cursor-pointer text-black-50 hover:text-black-100'/>
        </div>
        <div className='flex-none flex justify-center px-4 rounded-l-xl'>
          <div className='relative'>
            <Image className='h-40 w-auto rounded-lg' width={40} height={40} src="examples/partido.png" alt="ejemplo" />
            <Image className='absolute h-8 w-8 bottom-1 right-1 rounded'  width={40} height={40} src="examples/partido.png" alt="ejemplo" />
          </div>
        </div>
        <div className='flex flex-col items-center gap-3 text-center '>
          <div className='flex flex-col w-[80%]'>
            <h6 className='text-headline uppercase'>Fuerza y Amistad por el Perú</h6>
          </div>
          <div className='flex flex-col gap-1 px-4'>
            <span className='text-callout block font-semibold text-black-100'>Partido Político</span>
          </div>
        </div>
        <hr  className="mx-4"/>
        <div className='flex flex-col gap-2 mx-4'>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Región:</span>
            <span className='block text-subhead font-normal text-black-75'>12</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Provincia:</span>
            <span className='block text-subhead font-normal text-black-75'>34</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Distrito:</span>
            <span className='block text-subhead font-normal text-black-75'>343</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Total de candiatos</span>
            <span className='block text-subhead font-normal text-black-100'>3654</span>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <Link href='organizaciones/dghgf' className={`${ButtonStyle.black} ${ButtonStyle.small} `} >Ver candidatos</Link>
        </div>
      </div>
    </div>
  )
}

export default OrganizationCard