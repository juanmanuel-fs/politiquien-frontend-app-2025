'use client'
import { useRouter } from 'next/navigation'

function CardPartnersNews() {
  const router = useRouter()

  return (
    <div className='aspect-1 rounded-xl bg-fill-quaternary hover:bg-fill-tertiary group cursor-pointer' onClick={()=> router.push('/')}>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className=''>
          <img className='h-8 w-auto' src="examples/logo_newspaper.jpg" alt="" />
        </div>
        <div className='flex flex-col mt-4 text-center'>
          <h6 className='text-headline text-primary-75 group-hover:text-primary-88'>Arequipa</h6>
          <h6 className='text-headline text-black-75 group-hover:text-black-100'>EL BÚHO</h6>
        </div>
      </div>
    </div>
  )
}

export default CardPartnersNews