import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Card = ({user}) => {
    return (
        <div className='flex flex-col items-center text-center xl:min-w-[370px] xl:max-w-[370px] lg:min-w-[282px] lg:max-w-[282px] md:min-w-[344px] md:max-w-[344px] sm:min-w-[328px] h-[254px] bg-white rounded-[10px]'>
            <>
                <img src={user.photo} alt="avatar" className='w-70 h-70 my-5 rounded-full' />
                <Tippy content={user.name} placement='bottom'>
                <p className='mx-5 text-body cursor-pointer'>
                    {user.name.length > 34 ? `${user.name.slice(0, 35)}...` : user.name}
                </p>
                </Tippy>
                <p className='mt-5 mx-5 text-body'> 
                    {user.position}
                </p>
                <Tippy content={user.email} placement='bottom'>
                <p className='mx-5 text-body cursor-pointer'> 
                    {user.email.length > 34 ? `${user.email.slice(0, 35)}...` : user.email}
                </p>
                </Tippy>
                <p className='mx-5 text-body'> 
                    {user.phone}
                </p>
            </>       
        </div>
  )
}
