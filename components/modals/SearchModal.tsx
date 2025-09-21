import { Dispatch, SetStateAction, useEffect, useRef } from "react";

// import CandidateMainCard from "../Cards/CandidateMainCard";

import { CgClose } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

interface SearchModalProps {
  valueSearch: string
  setOpenSearchModal: Dispatch<SetStateAction<boolean>>
}


function SearchModal({valueSearch, setOpenSearchModal}: SearchModalProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setOpenSearchModal(false)
      }
    }
    document.addEventListener("click", checkIfClickedOutside, true)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true)
    }
  },[])

  return (
    <div className='fixed z-50 left-0 right-0 bottom-0 top-[100px] md:top-[178px] md:bottom-16 w-screen md:max-h-[720px]'>
      <div className='relative w-screen md:max-w-2xl mx-auto ring-1 ring-black-5 shadow-md h-full bg-white-75 backdrop-blur-30 px-4 md:px-8 md:rounded-xl' ref={sectionRef}>
        <div className="absolute left-0 p-4 md:p-8 right-0 bg-white-10 backdrop-blur-30 border-b border-b-black-5 md:rounded-t-xl ">
          <div className="absolute top-4 right-4">
            <button className='' onClick={() => setOpenSearchModal(false)}>
              <CgClose className='text-black-50 hover:text-primary-75 text-3xl'/>
            </button>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-title4'>Resultado de candidatos</h3>
            <div className="flex flex-row items-center gap-2">
              <BiSearch className='text-black-50 text-xl'/>
              <p className="text-headline text-black-50">{valueSearch}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full pt-[88px] md:pt-[144px] overflow-y-scroll no-scrollbar pb-4 md:pb-6">
          {/* <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/> */}
        </div>
      </div>
    </div>
  )
}

export default SearchModal