import FeaturedNewsCard from '@/components/cards/CandidateCard'
import React from 'react'

function FeaturedNews() {
  return (
    <div className='basis-4/12'>
      <h2 className='text-title3 mb-4'>NOTICIAS DESTACADAS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
        {/* <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/> */}
      </div>
    </div>
  )
}

export default FeaturedNews