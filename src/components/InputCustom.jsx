import React from 'react'
import '../styles/InputCustom.css'
function InputCustom({title,value,type,onChange}) {
  return (
    <input 
    type={type}
    placeholder={title}
    value={value}
    onChange={onChange}
    className='input' />
  )
}

export default InputCustom