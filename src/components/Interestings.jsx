import React from 'react'
import { reactjs } from '../assets'

export default function Interestings() {
    return (
        <div className='container mx-auto py-20'>
            <h2 className='text-center text-white font-mono text-3xl'>Qiziqishlarim</h2>
            <div className='flex flex-col-reverse md:flex-row gap-10 items-center mt-10'>
                <div className='w-full md:w-1/2'>
                    <img className='rounded-xl hover:blur-lg transition-all duration-1000' src={reactjs} alt="Nimadir xato ketdi" />
                </div>
                <div className='w-full md:w-1/2'>
                    <p className='font-mono leading-1 text-white text-xl'>Hozirgi kunda men Expo platformasiga katta qiziqish bildirayapman. Mobil ilovalar uchun Expo (React Native) bilan ishlamoqdaman va backend uchun Django (Python) texnologiyasidan foydalanmoqdaman. Bu texnologiyalarni birlashtirib, samarali va zamonaviy ilovalar yaratish yo'lida tajriba orttirayapman.</p>
                </div>
            </div>
        </div>
    )
}
