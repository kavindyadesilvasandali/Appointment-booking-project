import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*---Left section-----*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=""/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'> Lorem Ipsum is simply dump text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book </p>

            </div>
            {/*----Center section-----*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            {/*---Right section-----*/}
            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch </p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+11 456 8723</li>
                    <li>prescriptohospitals24@gmail.com</li>
                </ul>
            </div>

        </div>
    {/*------copyright text----------*/}
    <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto. All Right Reserved </p>
    </div>
    </div>
  )
}

export default Footer