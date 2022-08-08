import React from 'react';
import {Field } from 'formik';


export const RadioInput = ({positions, name}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-[7px] mt-[14px]'>
        {positions.map(position => (
        <label className='flex items-center xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px]'>
        <Field className='w-5 h-5  mr-[12px] cursor-pointer' key={position.name}
            type='radio' 
            value={position.id.toString()} 
            name={name} 
            />
        <p className='text-body'>{position.name}</p>
        
        </label>

    ))}
    </div>
    )
}
