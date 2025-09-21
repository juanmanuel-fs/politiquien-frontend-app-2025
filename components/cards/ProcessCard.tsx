import Image from "next/image"

function ProcessCard() {
  return (
    <div className='border border-black-22 rounded-xl p-4'>
      <div className='flex flex-col gap-3'>
        <div className='aspect-w-16 aspect-h-7 rounded-lg'>
          <Image className="rounded-lg object-cover object-center bg-fill-tertiary" width={40} height={40} src="examples/front_page.png" alt="Ejemplo"/>
        </div>
        <div className='flex flex-col items-center gap-1 text-center '>
          <div className='flex flex-col w-[80%]'>
            <h6 className='text-headline uppercase'>RUBELA JUANA, TREJO MARQUEZ</h6>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-subhead block font-medium text-black-75'>REGIONAL / PROVINCIAL / DISTRITAL</span>
          </div>
        </div>
        <hr  className=""/>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Organizaciones:</span>
            <span className='block text-subhead font-normal text-black-75'>234</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='block text-subhead text-black-50'>Candiatos:</span>
            <span className='block text-subhead font-normal text-black-75'>4394359</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessCard