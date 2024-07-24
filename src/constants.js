// constants.jsx

import project1 from './assets/projects/project-1.webp';
import project2 from './assets/projects/project-2.jpg';
import project3 from './assets/projects/project-3.jpg';
import project4 from './assets/projects/project-4.jpg';

export const projects = [
    {
        title: "Elektron savod web sahifasi",
        body: "Elektron savdo web sahifasi django framework dan foydalangan holatda yaratilgan ajoyib admin paneli ham mavjud",
        image: project1,
        techs: [
            { name: 'python' },
            { name: 'sqlite' },
            { name: 'django' },
            { name: 'html' },
            { name: 'css' },
            { name: 'bootstrap' },
            { name: 'AWS' }
        ]
    },
    {
        title: "Topshiriq boshqarish dasturi android & ios uchun",
        body: "Topshiriq boshqarish dasturi android & ios uchun react native hamda expo cli dan foydalangan holatda backend uchun drf dan foydalanganman",
        image: project2,
        techs: [
            { name: 'python' },
            { name: 'sqlite' },
            { name: 'drf' },
            { name: 'react native' },
            { name: 'expo cli' },
            { name: 'AWS' },
            { name: 'tailwind' }
        ]
    },
    {
        title: "SammiPay",
        body: "SammiPay bunda shunchaki tailwind va react ni o'rganish uchun kichik bir loyihacha qilgan edim",
        image: project3,
        techs: [
            { name: 'react js' },
            { name: 'tailwind css' },
            { name: 'JS' }
        ]
    },
    {
        title: "Blogging platformasi",
        body: "Blog web sahifasi telegram orqali login & register qilish backend django da yozilgan frontend react js da permissions lar bilan ham ishlaganman umumiy qilib aytganda drf + react crud operatsiyasi uchun edi o'rganish va takrorlash uchun.",
        image: project4,
        techs: [
            { name: 'Python' },
            { name: 'JS' },
            { name: 'react js' },
            { name: 'drf' },
            { name: 'tailwind css' }
        ]
    },
];
