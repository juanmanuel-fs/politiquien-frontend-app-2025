import { Dispatch, ReactElement, SetStateAction } from 'react'
import { Input } from '../ui/input'


interface InputTextInterface {
  type?: string
  value: string 
  name?: string
  change: (e) => void
  placeholder?: string
  autoComplete?: string
  icon?: ReactElement
  isFocus?: boolean
  setIsFocus?: Dispatch<SetStateAction<boolean>>
}

function InputText({value, change, name, placeholder, icon, setIsFocus}: InputTextInterface) {
  

  const focused = () => {
    if(!!value) setIsFocus!(true)
    else setIsFocus!(false)
  }

  return (
    !!icon
    ? <div className='flex items-center' style={{position:'relative'}}>
        <span style={{position:'absolute', zIndex:2, paddingLeft: '18px', fontSize:'20px'}}>{icon}</span>
        <Input 
          type="text" 
          style={{paddingLeft:'52px'}} 
          value={value} 
          name={name}
          onChange={(e) => change(e)} 
          onFocus={!!setIsFocus ? focused : undefined} 
          onKeyDown={!!setIsFocus ? focused : undefined} 
          placeholder={placeholder} 
          autoComplete='off'
        />
      </div>
    : <Input type="text" name={name} value={value} onChange={(e)=>change(e)} placeholder={placeholder} autoComplete='off'/>
  )
}

export default InputText