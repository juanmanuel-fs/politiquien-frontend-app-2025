import Image from 'next/image'

function CandidateMainCard() {
  return (
    <div className='flex gap-x-3 rounded-xl hover:bg-fill-tertiary p-2 md:p-3 cursor-pointer '>
      <div className='flex-none'>
        <img className='bg-black-5 h-16 w-12 rounded-lg' src="https://declara.jne.gob.pe/Assets/Fotos-HojaVida/234108.jpg" alt="" />
      </div>
      <div className='flex-auto flex flex-col gap-1'>
        <div className='flex flex-row gap-2 justify-between'>
          <h5 className='text-subhead font-semibold text-black-88 line-clamp-2'>RUBELA JUANA, TREJO MARQUEZ</h5>
          <span className='text-subhead text-black-50 block uppercase'>87674356</span>
        </div>
        <div className='w-full flex flex-col'>
          <p className='text-footnote text-primary-88 line-clamp-1'>GOBERNADOR REGIONAL</p>
          <p className='text-footnote text-black-75 uppercase line-clamp-1'> Partido popular cristiano</p>
          <p className='text-footnote text-black-75 uppercase line-clamp-1'> Elecciones municipales y regionales 2022</p>
        </div>
      </div>
    </div>
  )
}

export default CandidateMainCard