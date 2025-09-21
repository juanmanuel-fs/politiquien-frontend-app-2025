'use client'
import { Button } from "@/components/ui/button";
import { BsWindowStack } from "react-icons/bs";

interface ModalButtonCandidateProps {
  title: string
  count?: number
  countColor?: string
  onCLick: () => void
  disabled?: boolean
}

function ModalButtonCandidate({title, onCLick, count = 0, countColor = 'bg-black-100', disabled= false}:ModalButtonCandidateProps) {
  return (
    <Button variant="secondary" onClick={() => onCLick()} disabled={disabled || !!!count}>
      <BsWindowStack className={`flex-none ${disabled || !!!count ? 'text-black-50' : 'text-black-75'} text-xl`}/>
      <h6 className={`text-xs ${disabled || !!!count ? 'text-black-50' : 'text-black-75'} select-none font-semibold line-clamp-1`}>{title} </h6>
      <small className={`ml-auto block rounded-full ${ disabled || !!!count ? 'bg-black-10' : countColor + " text-white w-6 h-6 flex items-center justify-center"} `}>{ count }</small>
    </Button>
  )
}

export default ModalButtonCandidate