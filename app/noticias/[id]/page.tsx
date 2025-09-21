'use client'
import React from 'react'

import CandidateNews from './components/CandidateNews'
import ContentNews from '../components/ContentNews'
import OrganizationNews from './components/OrganizationNews'
import RecommendedNews from './components/RecommendedNews'
import { useParams } from 'next/navigation'

function Page() {

  const { id } = useParams<{ id: string }>();

  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 lg:col-span-8'>
        <div className='flex flex-col gap-6'>
          <ContentNews params={id}/>
          <hr />
          <CandidateNews/>
          <hr />
          <OrganizationNews/>
        </div>
      </div>
      <div className='col-span-12 lg:col-span-4'>
        <div className='flex flex-col gap-4'>
          <RecommendedNews/>
        </div>
      </div>
    </div>
  )
}

export default Page