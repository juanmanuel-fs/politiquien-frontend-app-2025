import FeaturedNewsCard from '@/components/cards/FeaturedNewsCard'
import React from 'react'
import { News } from '../hooks/useGetNews';

interface FeaturedNewsProps {
  news: News[];
}

function FeaturedNews({ news }: FeaturedNewsProps) {
  
  return (
    <div className='basis-4/12'>
      <h2 className='text-title3 mb-4'>NOTICIAS DESTACADAS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
        {news.slice(0, 6).map((newsItem) => (
          <FeaturedNewsCard key={newsItem.id} news={newsItem} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedNews