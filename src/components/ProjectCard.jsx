import React from 'react';

export default function ProjectCard({ image, title, body, techs }) {
    return (
        <div className='flex flex-col md:flex-row mt-10 py-8'>
            <div className='flex w-full md:w-1/2 justify-center'>
                <img className='w-full md:w-1/2 rounded-xl h-[80%]' src={image} alt={title} />
            </div>
            <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                <h3 className='text-white font-mono text-2xl'>{title}</h3>
                <p className='text-white font-mono text-lg'>{body}</p>
                <div className='flex gap-5 flex-wrap mt-2'>
                    {techs.map((item, index) => (
                        <div key={index}>
                            <span className='text-[#321541] font-mono'>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}