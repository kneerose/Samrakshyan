import React from 'react'

export default function Button({text,onClickHandler,icon,className}) {
  return (
    <button type='button' onClick={onClickHandler} className={`flex rounded-xl  ${className} items-center text-lg px-4 py-3`}>
     <span> {icon}</span>
    <p className='text-center'>{text}</p>
    </button>
  )
}
