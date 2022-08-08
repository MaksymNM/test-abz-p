import React from 'react';
import Success from '../img/success.png';

export const SuccesRegistration = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[45px] mb-[100px]'>
            <div className='flex justify-center  '>
                <div className='text-heading xl:px-0 lg:px-0 md:px-0 sm:px-4 sm:text-center'>
                    User successfully registered
                </div>
            </div>
            <div className='mt-[50px]'>
                <img src={Success} alt="Succes"></img>
            </div>
            </div> 
  )
}
