import React from 'react'

export const Wrapper = ({children}) => {
    return (
        <div className='flex justify-center'>
            <div className='xl:w-1170 lg:w-[1024px] md:w-[768px] sm:w-[360px] flex flex-col' >
            {children}
            </div>
        </div>
        
  )
}

