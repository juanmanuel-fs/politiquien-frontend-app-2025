'use client'

import { useRouter } from "next/navigation"
import { Badge } from "../ui/badge"


function RecommendedNewsCard() {
  const router = useRouter()

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const random = Math.floor(Math.random() * 20)
    e.currentTarget.src = `/image_news/image_news_${random}.jpg`
  }

  return (
    <div className='grid grid-cols-3 gap-2 group cursor-pointer' onClick={() => router.push('/noticias')}>
      <div className='col-span-1  rounded-xl'>
        <img className="w-[112px] h-[112px] rounded-xl object-cover object-center" src="https://images.unsplash.com/sfsdf80" onError={handleError}/>
      </div>
      <div className='col-span-2 flex flex-col h-full'>
        <h4 className='text-sm font-semibold capitalize group-hover:text-primary-88 line-clamp-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor ipsum dolor ...
        </h4>
        <div className='flex mt-auto flex-wrap gap-1'>
          <Badge variant="outline">Category</Badge>
          <Badge variant="outline">Category</Badge>
        </div>
        <span className='block text-xs font-normal text-black-50 group-hover:text-black-75 mt-1 text-muted-foreground'>2 de setiembre de 2022</span>
      </div>
    </div>
  )
}

export default RecommendedNewsCard