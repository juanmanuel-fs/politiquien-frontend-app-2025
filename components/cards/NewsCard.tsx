'use client'

import { useRouter } from 'next/navigation'
import { News } from '@/app/noticias/hooks/useGetNews'
import { Badge } from '../ui/badge'

interface NewsCardProps {
  news: News;
}

function NewsCard({ news }: NewsCardProps) {
  const router = useRouter()

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const random = Math.floor(Math.random() * 20)
    e.currentTarget.src = `/image_news/image_news_${random}.jpg`
  }

  return (
    <div className='flex flex-col gap-2 group cursor-pointer' onClick={() => router.push(`/noticias/${news.id}`)}>
      <div className='flex flex-row gap-2 items-center w-full'>
        <img className='h-6 w-auto' src={news.newspaper.logo} alt={news.newspaper.name} onError={e => e.currentTarget.src = `/logo_newspaper.jpg`} />
        <div className='flex flex-col truncate'>
          <h6 className='text-xs uppercase font-semibold font-montserrat truncate'>{news.newspaper.name}</h6>
          <p className='text-xs uppercase font-semibold font-montserrat text-primary-88 truncate'>{news.state}</p>
        </div>
      </div>
      <div className='aspect-video rounded-lg bg-gray-200'>
        <img className="aspect-video rounded-lg object-cover object-center" src={news.image} onError={handleError}/>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row flex-wrap gap-1'>
          {news.categories.map((category, index) => (
            <Badge key={index} variant="outline">{category}</Badge>
          ))}
        </div>
        <div className='flex-none'>
          <span className='text-xs font-light text-muted-foreground'>{new Date(news.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
      <div>
        <h6 className='text-sm font-semibold normal-case group-hover:text-primary-100 line-clamp-2'>{news.title}</h6>
      </div>
      <div>
        <p className='text-xs font-light text-black-75 line-clamp-3 group-hover:text-black-100'>{news.content}</p>
      </div>

    </div>
  )
}

export default NewsCard