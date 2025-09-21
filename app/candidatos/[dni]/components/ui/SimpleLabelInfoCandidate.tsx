
interface SimpleLabelInfoCandidateProps {
  label: string
  info: string
  bg?: boolean
  className?: string
}

function SimpleLabelInfoCandidate({label, info, bg= false, className}:SimpleLabelInfoCandidateProps) {
  return (
    <div className={`rounded-xl ${bg ?  'bg-fill-quaternary border border-black-5' : 'border border-black-22'}  p-2 px-4 ${className}`}>
      <span className="block text-xs text-muted-foreground mb-1">{label}</span>
      <p className="text-sm font-normal text-black-75">{info}</p>
    </div>
  )
}

export default SimpleLabelInfoCandidate