import { Dispatch, ReactElement, SetStateAction, useEffect } from "react"
import { CgClose } from "react-icons/cg"

interface SideRightModalProps {
  title: string
  children : ReactElement
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function SideRightModal({title, children, open, setOpen}: SideRightModalProps) {

  useEffect(() => {
    const staticScreem = document.querySelector('body')
    console.log(open)
    if(open){
      staticScreem?.classList.add('overflow-hidden')
    }

    return () => {
      staticScreem?.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <div className="fixed z-50 left-0 right-0 top-0 bottom-0 w-screen h-screen bg-[#00000080]">
      <div className="fixed right-0 top-0 bottom-0 w-screen md:w-[480px] p-6 bg-white flex flex-col overflow-auto">
        <div className=' flex flex-row justify-between items-center'>
          <h2 className='text-base font-bold'>{title}</h2>
          <button className="" onClick={() => setOpen(false)}>
            <CgClose className='text-black-50 hover:text-primary-75 text-3xl transition ease-in-out delay-150 duration-300 hover:rotate-90'/>
          </button>
        </div>
        <div className="my-4 h-full">
          {children}
        </div>
      </div>

    </div>
  )
}

export default SideRightModal