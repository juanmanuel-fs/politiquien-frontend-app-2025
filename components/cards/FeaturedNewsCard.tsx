'use client'

import { useRouter } from "next/navigation"
import { News } from "@/app/noticias/hooks/useGetNews";

interface FeaturedNewsCardProps {
  news: News;
}

function FeaturedNewsCard({ news }: FeaturedNewsCardProps) {
  const router = useRouter()

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const random = Math.floor(Math.random() * 20)
    e.currentTarget.src = `/image_news/image_news_${random}.jpg`
  }

  return (
    <div className='flex flex-row gap-2 group cursor-pointer' onClick={() => router.push(`/noticias/${news.slug}`)}>
      <div className='flex-none rounded-xl bg-gray-200'>
        <img className="w-[112px] h-[112px] rounded-xl object-cover object-center" src={news.image} onError={handleError}/>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-sm font-semibold capitalize group-hover:text-primary-88 line-clamp-3'>
          {news.title}
        </h4>
        <span className='block text-sm uppercase font-semibold text-primary-88 mt-1'>{news.state}</span>
        <span className='block text-xs text-muted-foreground font-normal text-black-50 group-hover:text-black-75 mt-1'>
          {new Date(news.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
      </div>
    </div>
  )
}

export default FeaturedNewsCard