'use client'

import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import { News } from '../../hooks/useGetNews'

type CardFrontPageNewsProps = {
  news: News
} 

function CardFrontPageNews({news}: CardFrontPageNewsProps) {
  const router = useRouter()

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const random = Math.floor(Math.random() * 20)
    e.currentTarget.src = `/image_news/image_news_${random}.jpg`
  }

  return (
    <div className="snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] group cursor-pointer" onClick={()=> {router.push('/noticias/'+news.id)}}>
      <div className='relative aspect-video bg-gray-200 rounded-xl bg-fill-quaternary'>
        <img className="aspect-video shrink-0 rounded-xl object-cover object-center" src={news.image} onError={handleError}/>
        <div className='absolute top-0 left-0 right-0 bottom-0 p-2 md:p-6 rounded-xl h-full w-full bg-gradient-to-b from-transparent to-black-50 group-hover:to-black-75 to-100%'>
          <div className='flex flex-col justify-between h-full'>
            <div className='mb-auto'>
              <div className='flex flex-row gap-2 items-center w-full'>
                <img className='h-6 w-auto' src={news.newspaper.logo} alt=""  onError={handleError}/>
                <div className='flex flex-col truncate'>
                  <h6 className='text-xs uppercase font-bold text-white text-shadow-2xs text-shadow-gray-600 truncate'>{news.newspaper.name}</h6>
                  <p className='text-xs uppercase font-bold text-white text-shadow-2xs text-shadow-gray-600 truncate'>{news.state }</p>
                </div>
              </div>
            </div>
            <div className='mt-auto'>
              <div className='flex mb-1 flex-wrap gap-1'>
                <Badge variant="default" >Category</Badge>
                <Badge variant="default" >Category</Badge>
              </div>
              <p className='line-clamp-3 text-sm text-white text-shadow-2xs text-shadow-gray-600 font-medium'>{news.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFrontPageNews