import React from 'react'
import Logo from '../img/Logo.jpg'
import { Button } from './Button'

export const Header = () => {
    return (
        <div className='max-w-screen-[100vw] h-60 flex justify-center bg-white '>
            <div className=' sm:w-[360px] xl:w-1170 lg:w-[1024px] md:w-[768px]  flex items-center justify-between'>
                <div className='py-4 xl:pl-0 lg:pl-[60px] md:pl-8 sm:pl-4'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='flex gap-2.5 py-3 xl:pr-0 lg:pr-[60px] md:pr-8 sm:pr-4'>
                    <Button label={'Users'} width={'100px'}/>
                    <Button label={'Sign up'}  width={'100px'}/>
                </div>
            </div>
        </div>
  )
}

