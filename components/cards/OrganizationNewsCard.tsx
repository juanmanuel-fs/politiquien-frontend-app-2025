function OrganizationNewsCard() {
  return (
    <div className='flex gap-x-2 items-center rounded-lg bg-fill-quaternary border border-fill-tertiary hover:bg-fill-tertiary p-2 cursor-pointer '>
      <div className='flex-none'>
        <img width={20} height={20} className='bg-black-5 border-none h-16 w-16 rounded-lg' src="https://images.seeklogo.com/logo-png/24/3/apra-logo-png_seeklogo-242389.png" alt="" />
      </div>
      <div className='flex-auto truncate'>
        <h5 className='text-sm font-semibold text-black-75 truncate'>PARTIDO POLÍTICO SOMOS PERÚ</h5>
        <span className='text-xs text-black-75 block uppercase truncate'>ALIANZA POLÍTICO</span>
      </div>
    </div>
  )
}

export default OrganizationNewsCard