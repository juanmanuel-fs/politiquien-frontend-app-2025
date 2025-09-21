'use client'

import React, { ReactElement, useState } from 'react'

import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";

interface AccordionCandidateProps {
  children: ReactElement
  title: string
  caption?: string
  isOpen?: boolean
}

function AccordionCandidate({title, children, caption, isOpen = false}: AccordionCandidateProps) {
  const [isActive, setIsActive] = useState<boolean>(isOpen)

  return (
    <div className={`border ${isActive ? 'border-black-22' : 'border-black-10'} rounded-xl`}>
      <button className='flex flex-col w-full p-4 lg:px-6' onClick={() => setIsActive(!isActive)}>
        <div className={`flex justify-between items-center w-full group hover:text-primary-100 ${isActive ? 'text-primary-100': 'text-primary-75'}`} >
          <h6 className={`text-title4 font-montserrat block group-hover:text-primary-100 ${isActive ? 'text-primary-100': 'text-primary-75'}`}>{title}</h6>
          { isActive ? <RiSubtractLine/> : <AiOutlinePlus/> }
        </div>
        <div className='w-full'>
          <p className='text-muted-foreground text-black-50 text-left'>{caption}</p>
        </div>
      </button>
      <div className={`overflow-hidden ${isActive ? 'max-h-max' : 'max-h-0' } rounded-b-xl bg-white-100 transition delay-1000 duration-700 ease-in-out`}>
        <div className='border-t border-t-black-22 p-4 lg:px-6 py-6'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionCandidate