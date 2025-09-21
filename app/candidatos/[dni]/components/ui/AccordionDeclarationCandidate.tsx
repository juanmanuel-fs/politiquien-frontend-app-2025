'use client'
import { Button } from '@/components/ui/button'
import React, { ReactElement, useState } from 'react'

import { SlArrowDown } from "react-icons/sl"
import { SlArrowUp } from "react-icons/sl"

interface AccordionDeclarationCandidateProps {
  description : string
  value : string
  isOpen?: boolean
  children: ReactElement
}

function AccordionDeclarationCandidate({description, value, isOpen= false, children}: AccordionDeclarationCandidateProps) {
  const [isActive, setIsActive] = useState<boolean>(isOpen)

  return (
    <div>
      <Button variant="secondary" className='flex flex-row gap-2 justify-between text-left w-full p-4 py-6 hover:text-black-100' onClick={() => setIsActive(!isActive)}>
        <h6 className={`text-sm font-normal font-montserrat block ${isActive ? 'text-black-100': 'text-black-75'}`}>{description}</h6>
        <div className='flex-none flex flex-row items-center gap-4'>
          <p className='text-sm text-muted-foreground'>{value}</p>
          { isActive ? <SlArrowUp className='block text-lg text-gray-950'/> : <SlArrowDown className='block text-lg text-gray-400'/> }
        </div>
      </Button>
      <div className={`overflow-hidden ${isActive ? 'max-h-max' : 'max-h-0' } rounded-b-xl transition delay-1000 duration-700 ease-in-out`}>
        <div className='py-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionDeclarationCandidate