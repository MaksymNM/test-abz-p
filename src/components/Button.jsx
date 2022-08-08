import React from 'react'

export const Button = ({label, onClick, width}) => {
    return (
        <div className={`flex items-center justify-center w-[${width}] h-34 bg-primaryColor hover:bg-hoverColor rounded-[80px]`}>
            <button className='text-body' onClick={onClick}>{label}</button>
        </div>
  )
}

