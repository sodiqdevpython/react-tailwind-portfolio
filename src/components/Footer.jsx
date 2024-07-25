import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <div className='container mx-auto pb-10'>
            <motion.hr initial={{ x: -800, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} />\
            <motion.hr initial={{ x: 800, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} />
            <motion.h1 initial={{ y: -200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-center text-white font-mono text-4xl py-10'>Bog'lanish uchun</motion.h1>
            <motion.p initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-white text-center'>Telefon raqam: <a href="tel:+998990327898">+998 99 032 78 98</a></motion.p>
            <motion.p initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-white text-center'>Telegram: <a target='blank' href="https://t.me/sodiq0813">sodiq0813</a></motion.p>
        </div>
    )
}
