'use client'

import AcademyDataCandidate from './components/AcademyDataCandidate'
import ApplicationCandidate from './components/ApplicationCandidate'
import DeclarationCandidate from './components/DeclarationCandidate'
import ExperienceCandidate from './components/ExperienceCandidate'
import FaultsCandidate from './components/FaultsCandidate'
import GeneralDataCandidate from './components/GeneralDataCandidate'
import LifeLineCandidate from './components/LifeLineCandidate'
import RelatedNewsCandidate from './components/RelatedNewsCandidate'
import RelatedPolitichecksCandidate from './components/RelatedPolitichecksCandidate'
import SentenceCandidate from './components/SentenceCandidate'
import React from 'react'
import { useParams } from "next/navigation";

function Page() {

  const params = useParams<{ dni: string }>();


  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 lg:col-span-8'>
        <div className='flex flex-col gap-6'>
          <ApplicationCandidate dni={params.dni} />
          <div className='flex flex-col gap-4'>
            <GeneralDataCandidate/>
            <AcademyDataCandidate/>
            <ExperienceCandidate/>
            <DeclarationCandidate/>
            <FaultsCandidate/>
            <SentenceCandidate/>
            <LifeLineCandidate/>
          </div>
        </div>
      </div>
      <div className='col-span-12 md:col-span-8 lg:col-span-4'>
        <div className='flex flex-col gap-6'>
          <RelatedNewsCandidate/>
          <RelatedPolitichecksCandidate/>
        </div>
      </div>
    </div>
  )
}

export default Page