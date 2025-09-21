import Image from 'next/image'

function SaveCandidateCard() {
  return (
    <div className='flex gap-x-2 p-2 rounded-lg hover:bg-fill-quaternary hover:ring-1 hover:ring-black-5 cursor-pointer '>
      <div className='flex-none'>
        <Image className='bg-black-5 border-none h-20 w-16 rounded-lg' src="" alt="" />
      </div>
      <div className='flex-auto flex flex-col gap-[2px] truncate'>
        <h5 className='text-callout font-semibold text-black-100 truncate'>RUBELA JUANA, TREJO MARQUEZ fsaf</h5>
        <span className='text-footnote font-medium text-primary-75 block truncate'>GOBERNADOR REGIONAL</span>
        <span className='text-footnote font-medium text-black-75 block uppercase'>Arequipa / Arequipa / arequipa</span>
        <span className='text-footnote font-medium text-black-75 block uppercase truncate'> Partido popular cristiano</span>
        <span className='text-caption1 font-normal text-black-50 block '> Guardado 2 de mayo 2023</span>
      </div>
    </div>
  )
}

export default SaveCandidateCard