import React from 'react'
import { sodiq } from '../assets/index';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className='flex flex-col md:flex-row container mx-auto lg:mt-32 items-center'>
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-full md:w-1/2'>
                <h1 className='text-[#fff] font-thin font-inter text-7xl py-5'>Sodiq Oydinov</h1>
                <h3 className='font-normal font-inter text-4xl py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tighter text-transparent'>Full Stack Python Developer</h3>
                <p className='font-inter text-white font-light tracking-tighter'>Men Sodiq Oydinov, Alfraganus universiteti Raqamli texnologiyalar fakulteti kompyuter injenering yo'nalishida o'qiyman.

                    C++ asoslari, C# asoslari, JavaScript asoslari, hamda asosiy dasturlash tilim Python. Django, DRF, PostgreSQL, Flask, HTML, CSS, Bootstrap, Tailwind CSS, React JS lardan keng foydalanib kelaman. Aytgancha, React Native (Expo) bilan ham ishlayman.

                </p>
            </motion.div>
            <div className='w-full md:w-1/2'>
                <motion.img initial={{ x: 1400, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className='rounded-xl hover:cursor-pointer md:hover:blur-md lg:hover:blur-lg transition-all duration-1000 lg:ms-10' src={sodiq} alt="Nimadir xato letdi" />
            </div>
        </div>
    )
}
