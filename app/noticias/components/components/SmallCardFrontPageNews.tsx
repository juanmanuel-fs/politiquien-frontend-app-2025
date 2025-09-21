'use client'

import { useRouter } from "next/navigation"

function SmallCardFrontPageNews() {
  const router = useRouter()

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const random = Math.floor(Math.random() * 20)
    e.currentTarget.src = `/image_news/image_news_${random}.jpg`
  }

  return (
    <div className='flex flex-row gap-2 group cursor-pointer' onClick={() => router.push('/noticias/jfg')}>
      <div className='flex-none rounded-xl'>
        <img className="w-[80px] h-[80px] rounded-xl object-cover object-center" src="https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/1"  onError={handleError}/>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-callout font-semibold capitalize text-black-75 group-hover:text-black-100 line-clamp-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor ipsum dolor consectetur adipiscing elit
        </h4>
        <span className='block text-callout uppercase font-medium text-primary-75 mt-1'>Arequipa</span>
      </div>
    </div>
  )
}

export default SmallCardFrontPageNews