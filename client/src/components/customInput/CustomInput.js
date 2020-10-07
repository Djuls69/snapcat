import React from 'react'
import './customInput.css'

const CustomInput = ({ ...otherProps }) => {
  return (
    <div className='custom-input'>
      <input {...otherProps} />
    </div>
  )
}

export default CustomInput
