import React from 'react'
import AccordionCandidate from './ui/AccordionCandidate'
import SimpleLabelInfoCandidate from './ui/SimpleLabelInfoCandidate'

function GeneralDataCandidate() {
  return (
    <AccordionCandidate 
      title='DATOS GENERALES'
      caption='Datos personales personales, lugar de nacimiento y domicilio'
      isOpen={true}
    >
      <>
        <div className='flex flex-col gap-6'>
          <div>
            <h6 className='text-base mb-2 px-4'>Personales:</h6>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <SimpleLabelInfoCandidate label='Apellido Paterno' info='TREJO'/>
              <SimpleLabelInfoCandidate label='Apellido Materna' info='MARQUEZ'/>
              <SimpleLabelInfoCandidate label='Nombres' info='RUBELA JUANA'/>
              <SimpleLabelInfoCandidate label='Sexo' info='Masculino'/>
              <SimpleLabelInfoCandidate label='Fecha de nacimiento' info='28-11-1965'/>
              <SimpleLabelInfoCandidate label='DNI' info='98677865'/>
            </div>
          </div>
          <div>
            <h6 className='text-base mb-2 px-4'>Lugar de nacimiento:</h6>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <SimpleLabelInfoCandidate label='País' info='PERÚ'/>
              <SimpleLabelInfoCandidate label='Departamento' info='AREQUIPA'/>
              <SimpleLabelInfoCandidate label='Provincia' info='AREQUIPA'/>
              <SimpleLabelInfoCandidate label='Distrito' info='AREQUIPA'/>
            </div>
          </div>
          <div>
            <h6 className='text-base mb-2 px-4'>Lugar de domicilio:</h6>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <SimpleLabelInfoCandidate label='Dirección' info='AVENIDA SIEMPRE VIVA 123'/>
              <SimpleLabelInfoCandidate label='Departamento' info='AREQUIPA'/>
              <SimpleLabelInfoCandidate label='Provincia' info='AREQUIPA'/>
              <SimpleLabelInfoCandidate label='Distrito' info='AREQUIPA'/>
            </div>
          </div>
        </div>
      </>
    </AccordionCandidate>
  )
}

export default GeneralDataCandidate