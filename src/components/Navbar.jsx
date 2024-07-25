import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='flex flex-col md:justify-between md:flex-row px-1 md:px-10 py-4 md:py-6 static md:sticky top-0 z-10 md:bg-[#1c1c29]'>
            <div>
                <motion.h1
                    className='font-inter font-medium text-white text-2xl md:text-4xl'
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >Sodiq Oydinov</motion.h1>
            </div>
            <div className='flex justify-end mt-3 md:mt-0 md:justify-center items-center gap-4 md:gap-10 text-3xl md:text-4xl text-white'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                ><a target='blank' href="https://t.me/sodiq0813"><FaTelegram className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' /></a></motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    <a target='balnk' href="https://github.com/sodiqdevpython"><FaSquareGithub className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' /></a>
                </motion.div>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                ><FaSquareXTwitter className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' /></motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}><FaSquareFacebook className='hover:cursor-pointer hover:blur-sm transition-all duration-1000' /></motion.div>
            </div>
        </motion.div>
    )
}
