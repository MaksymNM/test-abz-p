import React, { useState } from 'react'
import { useEffect } from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { RadioInput } from './RadioInput';
import { SuccesRegistration } from './SuccesRegistration';

//eslint-disable-next-line
const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/;
//eslint-disable-next-line
const emailRexExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
    .min(2, 'Username should be more than 2 haracters')
    .max(60, 'Username should be less than 60 charcters')
    .required('Required'),
    email: Yup.string().matches(emailRexExp, 'Invalid email')
    .required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
    position: Yup.string()
    .required('Required'),
    file: Yup.mixed().required('Required'),
})

const PostBlock = ({page, setPage}) => {
    const [positions, setPositions] = useState([])
    const [token, setToken] = useState('');
    const [response, setResponse] = useState('');

    if(response === true) {
        if(page > 1) {
            setPage(1);
        }
        setTimeout(() => {
            setResponse('');
        }, 3000)
    }
    

    const fetchPositions = async () => {
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
        const data = await response.json();
        setPositions(data.positions);
        
    }

    const getToken = async () => {
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
        const data = await response.json();
        setToken(data.token);
    }

    const signUp = async (values) => {
        if(values !== undefined) {
            
            const formData = new FormData();
                formData.append('position_id', parseInt(values.position));
                formData.append('name', values.username);
                formData.append('email', values.email);
                formData.append('phone', values.phone);
                formData.append('photo', values.file)
                
                const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
                {
                method: 'POST', 
                headers: { 
                    'Token': token 
                }, 
                body: formData, 
                })
                const data = await response.json();
                setResponse(data.success);
                console.log(data);
        } 
    }

    useEffect(() => {
        fetchPositions();
        getToken();
    }, [])

    return (
        <div className='flex flex-col xl:w-[1170px] lg:w-[1024px] md:w-[768px] sm:w-[360px]'>
            <div className='flex justify-center mt-[140px]  '>
                <div className='text-heading xl:px-0 lg:px-0 md:px-0 sm:px-4 sm:text-center'>
                    Working with POST request
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-[50px] mt-[50px]'>
            <Formik
            initialValues={{
                username: '',
                email: '',
                phone: '',
                position: '',
                file: null,
            }}
            validateOnMount
            validationSchema={SignUpSchema}
            onSubmit={(values, {resetForm}) => {
                signUp(values);
                resetForm();
                

            }}
            >
            {({values, errors, touched,  isValid,  setFieldValue}) => (
                <Form className='xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px]'>
                    <Field 
                    name='username' 
                    placeholder='Your Name' 
                    className={`xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px] h-[54px] pl-4 rounded-[4px] ${errors.username && touched.username ? 'border-2 border-errorColor' : 'border border-borderInput'} `}/>
                    {errors.username && touched.username ? (<div className='text-errorColor text-small mt-1 ml-4'>{errors.username}</div>) : null }
                    <Field 
                    name='email' 
                    placeholder='Your Email' 
                    className={`xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px] h-[54px] pl-4 rounded-[4px] ${errors.email && touched.email ? 'border-2 border-errorColor' : 'border border-borderInput'} mt-[50px]`}/>
                    {errors.email && touched.email ? (<div className='text-errorColor text-small mt-1 ml-4'>{errors.email}</div>) : null }
                    <Field 
                    name='phone' 
                    placeholder='Phone' 
                    className={`xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px] h-[54px] pl-4 rounded-[4px] ${errors.phone && touched.phone ? 'border-2 border-errorColor' : 'border border-borderInput'} mt-[50px]`}/>
                    <p className='text-small text-smallTextColor mt-1 pl-[16px]'>+38 (XXX) XXX - XX - XX</p>
                    {errors.phone && touched.phone ? (<div className='text-errorColor text-small mt-1 ml-4'>{errors.phone}</div>) : null }
                    
                    <div className='mt-[25px]'>
                <div className='flex justify-center'>
                    <p className='text-body xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px]'>Select your position</p>
                </div>
                <RadioInput positions={positions} name={'position'}/>
                {errors.position && touched.position ? (<div className='text-errorColor text-small mt-1 ml-4'>{errors.position}</div>) : null }

                
                <div className='flex flex-col justify-center items-center mt-[45px]'>
                    <div className='relative'>
                    <input 
                        className='hidden'
                        id='file'
                        type='file'
                        name='file' 
                        onChange={(event) => {setFieldValue('file', event.currentTarget.files[0]);}}
                    />
                    <label for='file'>
                        <span className='inline-block xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[328px]   box-border h-[54px]'>
                        <span className={`flex items-center  xl:w-[297px] lg:w-[297px] md:w-[297px] sm:w-[245px] absolute top-0 left-[83px] ${errors.file && touched.file? 'border-2 border-errorColor' : 'border border-borderInput'} h-[54px] rounded-r`}>
                        <p className='pl-[16px] text-body text-smallTextColor'>{values.file === null ? 'Upload your photo' : values.file.name}</p>
                        </span>
                        </span>
                        <span className={`flex items-center justify-center w-[83px] h-[54px] absolute top-0 left-0  ${errors.file && touched.file ? 'border-2 border-errorColor' : 'border border-black'}  rounded-l`}>
                            <p className='text-body'>Upload</p></span>
                    </label>
                    {errors.file && touched.file ? (<div className='text-errorColor text-small mt-1 ml-4'>{errors.file}</div>) : null }
                    </div>
                </div>
                

                </div>

                <div className='flex justify-center mt-[43px] mb-[100px]'>
                <div className={`flex items-center justify-center w-[100px] h-34 ${!isValid ? 'bg-disabledBtn' : 'bg-primaryColor'}  rounded-[80px]`}>
                    <button className={`text-body ${!isValid ? 'text-white' : 'text-black'} `} type='submit' disabled={!isValid}>Sign up</button>
                </div>
            </div>

                </Form>
            )}
            </Formik>
            
            </div>
            
            {response === true ?
                <SuccesRegistration/>
            : ''}
        </div>
    )
}

export default PostBlock