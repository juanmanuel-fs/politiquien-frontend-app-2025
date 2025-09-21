'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import {line} from '@/data/lifeLine'
import AccordionCandidate from './ui/AccordionCandidate'

function LifeLineCandidate() {
  const [lifeLine, setLifeLine] = useState(line)

  useEffect(() => {
    lifeLine.sort((a: any,b: any) => {
      return b.startAnio - a.startAnio 
    })
    setLifeLine(lifeLine)
  },[])

  return (
    <AccordionCandidate
        title='LINEA DE VIDA'
        caption='Historial de la vida politica del candidato'
        isOpen={true}
      >
        <div className='flex flex-col gap-4'>
          <div className='mt-4 mx-auto max-w-lg'>
            <div className='flex flex-col gap-6 relative'>
              <span className='absolute h-full -mt-4 w-1 left-1/2 rounded-t-full  bg-black-22 '></span>
              {
                line.map((ln: any, index) => {
                  let result: ReactNode = <></>  
                  if(ln.type === 'partisan'){
                    result = (
                      <div className='relative'>
                        <div className='flex flex-col'>
                          <h6 className='text-sky-500 text-headline font-semibold'>{ln.position}</h6>
                          <small className='text-callout text-black-50 font-medium'>{ln.startAnio} - {ln.endAnio}</small>

                          <p className='mt-2 text-muted-foreground'>{!! parseInt(ln.endAnio) ? 'Fue' : 'Es'} partidario de la organización <span className='text-xs text-gray-950 font-bold underline underline-offset-1'>{ln.nameOrganization}</span ></p>
                          {
                            !!ln.comment &&
                            <div className='mt-1 flex flex-col gap-0'>
                              <small className='text-black-50'>Comentó:</small>
                              <small className='text-footnote text-black-75'>{ln.comment}</small>
                            </div>
                          }
                        </div>
                      </div>
                    )
                  }
                  if(ln.type === 'elected'){
                    result = (
                      <div className='relative'>
                        <div className='flex flex-col'>
                          <h6 className='text-lime-500 text-headline font-semibold'>{ln.namePosition}</h6>
                          <small className='text-callout text-black-50 font-medium'>{ln.startAnio} - {ln.endAnio}</small>

                          <p className='mt-2 text-muted-foreground'>{!! parseInt(ln.endAnio) ? 'Fue' : 'Es'} electo de la organización <span className='text-xs text-gray-950 font-bold underline underline-offset-1'>{ln.nameOrganization}</span ></p>
                          {
                            !!ln.comment &&
                            <div className='mt-1 flex flex-col gap-0'>
                              <small className='text-black-50'>Comentó:</small>
                              <small className='text-footnote text-black-75'>{ln.comment}</small>
                            </div>
                          }
                        </div>
                      </div>
                    )
                  }
                  if(ln.type === 'renunciation'){
                    result = (
                      <div className='relative'>
                        <div className='flex flex-col'>
                          <h6 className='text-orange-500 text-headline font-semibold'>Renuncia de organización</h6>
                          <small className='text-callout text-black-50 font-medium'>{ln.startAnio}</small>

                          <p className='mt-2 text-muted-foreground'>Renunció a la organización <span className='text-xs text-gray-950 font-bold underline underline-offset-1'>{ln.nameOrganization}</span></p>
                          {
                            !!ln.comment &&
                            <div className='mt-1 flex flex-col gap-0'>
                              <small className='text-black-50'>Comentó:</small>
                              <small className='text-footnote text-black-75'>{ln.comment}</small>
                            </div>
                          }
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div className={`p-4 shadow-xl rounded-xl bg-white-100 z-10 ${index % 2 ? 'text-right mr-[15%] md:mr-[30%]' : 'text-left ml-[15%] md:ml-[30%]'}`} key={index}>
                      {result}
                    </div>
                  )
                  
                })
              }
              {/* <div className='relative'>
                <span className='absolute mt-2 h-1 w-5 rounded-e rounded-bl-full bg-black-22 '></span>
                <span className='pl-8 text-headline font-medium'>35</span>
              </div> */}
            </div>

          </div>
        </div>
    </AccordionCandidate>
    
  )
}

export default LifeLineCandidate