import React, { ChangeEvent, useState } from 'react'

interface CategoryCheckboxProps{
  label: string
  name?: string
  checked?: boolean
  index: number
  change: (e) => void
  value: number
}

function CategoryCheckbox({label, index, change, value, checked= false}: CategoryCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const changed = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    setIsChecked(!isChecked)
    change(e)
  }

  return (
    <div>
      <input 
        type="checkbox"
        className='select-none cursor-pointer'
        id={`category-check-${index}`}
        name={`category-check-${index}`}
        value={value}
        checked={isChecked}
        onChange={(e) => changed(e)}
      />
      <label htmlFor={`category-check-${index}`}>{label}</label>
    </div>
  )
}

export default CategoryCheckbox