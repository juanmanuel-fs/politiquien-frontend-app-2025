'use client'
import { useRouter } from 'next/navigation'
import { Badge } from '../ui/badge'

function RecommendedPoliticheckCard() {
  const router = useRouter()

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const random = Math.floor(Math.random() * 20)
    e.currentTarget.src = `/image_news/image_news_${random}.jpg`
  }

  return (
    <div className='flex flex-row gap-2 group cursor-pointer' onClick={() => router.push('/noticias')}>
      <div className='flex-none rounded-xl'>
        <img className="w-[164px] h-[112px] rounded-xl object-cover object-center" src="https://images.unsplash.com/photo-1540206351&h=160&q=80" onError={handleError}/>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-sm font-semibold capitalize group-hover:text-primary-88 line-clamp-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor ipsum dolor ...
        </h4>
        <div className='flex my-1 flex-wrap gap-1'>
          <Badge variant="outline">Category</Badge>
          <Badge variant="outline">Category</Badge>
        </div>
        <span className='block text-xs font-normal text-muted-foreground mt-1'>2 de setiembre de 2022</span>
      </div>
    </div>
  )
}

export default RecommendedPoliticheckCard