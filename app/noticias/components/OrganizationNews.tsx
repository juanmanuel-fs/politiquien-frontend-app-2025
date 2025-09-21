import OrganizationNewsCard from '@/components/cards/OrganizationNewsCard'
import React from 'react'

function OrganizationNews() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='col-span-full'>
        <h4 className='text-title4'>ORGANIZACIONES POLÍTICAS RELACIONADAS</h4>
      </div>
      <OrganizationNewsCard/>
      <OrganizationNewsCard/>
      <OrganizationNewsCard/>
      <OrganizationNewsCard/>

    </div>
  )
}

export default OrganizationNews