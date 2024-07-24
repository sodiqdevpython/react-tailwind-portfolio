import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiSelenium } from "react-icons/si";

export default function Technologies() {
    return (
        <div className='container mx-auto justify-center py-10'>
            <h1 className='text-white font-light text-4xl font-mono text-center py-12'>Men ishlatadigan texnalogiyalar</h1>
            <div className='flex flex-col md:flex-row items-center justify-center py-10'>
                <div className="flex text-5xl md:text-7xl">
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-[#58c4dc]' >
                        <FaReact />
                    </div>
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-[#44b78b]'>
                        <SiDjango />
                    </div>
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-[#31648c]'>
                        <BiLogoPostgresql />
                    </div>
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-Light'>
                        <SiFlask />
                    </div>
                </div>
                <div className="flex text-5xl md:text-7xl mt-5 md:mt-0">
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-[#7a11f8]'>
                        <FaBootstrap />
                    </div>
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-[#36b7f0]'>
                        <RiTailwindCssFill />
                    </div>
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-green-300'>
                        <SiSelenium />
                    </div>
                    <div className='hover:cursor-pointer px-4 ms-2 md:ms-4 hover:border-none hover:rotate-360 hover:scale-150 transition-all duration-1000 border-solid border-2 p-2 border-neutral-800 rounded-xl shadow-2xl text-[#58c4dc]'>
                        <TbBrandReactNative />
                    </div>
                </div>
            </div>
        </div>
    )
}
