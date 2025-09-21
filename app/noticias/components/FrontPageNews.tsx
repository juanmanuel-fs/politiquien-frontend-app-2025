import React from 'react'
import CardFrontPageNews from './components/CardFrontPageNews'
import { News } from '../hooks/useGetNews';

interface FeaturedNewsProps {
  news: News[];
}

function FrontPageNews({news}: FeaturedNewsProps) {
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="relative w-full flex gap-2 md:gap-4 snap-x snap-mandatory overflow-x-auto pb-4">
        {
          news.map((newsItem) => (
            <CardFrontPageNews key={newsItem.id} news={newsItem} />
          ))
        }
      </div>
    </div>
  )
}

export default FrontPageNews