import React from 'react'
import SaveCandidateCard from './ui/SaveCandidateCard'

function SaveCandidate() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2'>
      <h2 className='col-span-full text-title3 mb-2'>CANDIDATOS GUARDADOS</h2>
      <SaveCandidateCard/>
      <SaveCandidateCard/>
      <SaveCandidateCard/>
      <SaveCandidateCard/>
    </div>
  )
}

export default SaveCandidate