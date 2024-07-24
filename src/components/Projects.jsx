import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../constants'

export default function Projects() {
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-center text-white font-mono text-3xl py-5'>Menga yoqgan loyihalarim</h2>
            {projects.map((item, index) => (
                <ProjectCard image={item.image} title={item.title} body={item.body} techs={item.techs} />
            ))}
        </div>
    )
}
