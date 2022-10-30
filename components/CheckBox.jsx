import React from 'react'

const CheckBox = ({ title, isChecked, onChange }) => {
  return (
    <div className='flex gap-2 justify-cetner items-center text-lg font-medium select-none'>
      <input
        id={title}
        type='checkbox'
        checked={isChecked}
        onChange={(e) => onChange(e)}
      />
      <label
        htmlFor={title}
        className='select-none'>
        {title.toUpperCase()}
      </label>
    </div>
  )
}

export default CheckBox
