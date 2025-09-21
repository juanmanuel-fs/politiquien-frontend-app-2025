import RecommendedNewsCard from '@/components/cards/RecommendedNewsCard'
import React from 'react'

function RecommendedNews() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-title3'>NOTICIAS RELACIONADAS</h2>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
    </div>
  )
}

export default RecommendedNews