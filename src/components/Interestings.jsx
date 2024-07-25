import React from 'react'
import { reactjs } from '../assets'
import { motion } from 'framer-motion'

export default function Interestings() {
    return (
        <div className='container mx-auto py-20'>
            <motion.h2 initial={{ y: 400, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='text-center text-white font-mono text-3xl'>Qiziqishlarim</motion.h2>
            <div className='flex flex-col-reverse md:flex-row gap-10 items-center mt-10'>
                <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='w-full md:w-1/2'>
                    <img className='rounded-xl hover:blur-lg transition-all duration-1000' src={reactjs} alt="Nimadir xato ketdi" />
                </motion.div>
                <div className='w-full md:w-1/2'>
                    <motion.p initial={{ y: -400, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='font-mono leading-1 text-white text-xl'>Hozirgi kunda men Expo platformasiga katta qiziqish bildirayapman. Mobil ilovalar uchun Expo (React Native) bilan ishlamoqdaman va backend uchun Django (Python) texnologiyasidan foydalanmoqdaman. Bu texnologiyalarni birlashtirib, samarali va zamonaviy ilovalar yaratish yo'lida tajriba orttirayapman.</motion.p>
                </div>
            </div>
        </div>
    )
}
