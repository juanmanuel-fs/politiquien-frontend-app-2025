import CandidateNewsCard from '@/components/cards/CandidateNewsCard'
import React from 'react'

function CandidateNews() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='col-span-full'>
        <h4 className='text-title4'>Candidatos relacionados</h4>
      </div>
      <CandidateNewsCard/>
      <CandidateNewsCard/>
      <CandidateNewsCard/>
      <CandidateNewsCard/>
    </div>
  )
}

export default CandidateNews