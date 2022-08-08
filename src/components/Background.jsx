import React from 'react'
import { Button } from './Button'

export const Background = () => {
    return (
        
            <div className='bg-field-background xl:h-650 lg:h-650 md:h-[500px] sm:h-[500px] w-full xl:w-1170 lg:w-[1024px] md:w-[768px] sm:w-[360px] bg-cover bg-center'>
                <div className=' bg-gradient-to-t from-fromGradient to-toGradient xl:h-650 lg:h-650 md:h-[500px] flex justify-center items-center'>
                    <div className=' xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px] xl:pt-0 lg:pt-0 md:pt-0 sm:pt-10 flex flex-col  text-center gap-5'>
                        <div className='text-heading text-white '>
                            Test assignment for front-end developer
                        </div>
                        <div className='text-body text-white'>
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                        </div>
                        <div className='flex justify-center pt-2.5'>
                            <Button label={'Sign up'} width={'100px'}/>
                        </div>
                        
                    </div>
                    
                </div>
        </div>
        
  )
}

