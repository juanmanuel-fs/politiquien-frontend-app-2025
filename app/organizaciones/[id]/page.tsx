'use client'

import React from 'react'
import HeaderOrganization from './components.tsx/Header'
import CandidateList from './components.tsx/CandidateList'
import { useParams } from 'next/navigation';

function Page() {
    const {id} = useParams<{ id: string }>();

    return (
        <div className='flex flex-col gap-8'>
            <HeaderOrganization id={parseInt(id)} />
            <CandidateList id={parseInt(id)} />

        </div>
        
    )
}

export default Page