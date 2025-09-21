import RecommendedPoliticheckCard from '@/components/cards/RecommendedPoliticheckCard'
import React from 'react'

function RelatedPolitichecksCandidate() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-title4'>POLITIHECKS RELACIONADAS</h2>
      <RecommendedPoliticheckCard/>
      <RecommendedPoliticheckCard/>
      <RecommendedPoliticheckCard/>
    </div>
  )
}

export default RelatedPolitichecksCandidate