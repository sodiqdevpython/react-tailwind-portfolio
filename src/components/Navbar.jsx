import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className='flex flex-col md:justify-between md:flex-row px-1 md:px-10 py-4 md:py-10'>
            <div>
                <h1 className='font-inter font-medium text-white text-2xl md:text-4xl'>Sodiq Oydinov</h1>
            </div>
            <div className='flex justify-end mt-3 md:mt-0 md:justify-center items-center gap-4 md:gap-10 text-3xl md:text-4xl text-white'>
                <FaTelegram className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' />
                <FaSquareGithub className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' />
                <FaSquareXTwitter className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' />
                <FaSquareFacebook className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' />
            </div>
        </div>
    )
}
