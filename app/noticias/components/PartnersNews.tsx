import React from 'react'
import CardPartnersNews from './components/CardPartnersNews'

function PartnersNews() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-title3 '>MEDIOS ALIADOS</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        <CardPartnersNews/>
        <CardPartnersNews/>
        <CardPartnersNews/>
        <CardPartnersNews/>
        <CardPartnersNews/>
        <CardPartnersNews/>
      </div>
    </div>
  )
}

export default PartnersNews