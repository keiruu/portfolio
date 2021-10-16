import React from 'react'
import Image from 'next/image'
import line from '../images/line.svg'

const works = [
    {
        name: 'Takape',
        desc: 'A simple local cafe finder',
        img: '/takape.png',
        link: 'https://takape-vhlum.mongodbstitch.com/'
    },
    {
        name: 'Takape',
        desc: 'A simple local cafe finder',
        img: '/takape.png',
        link: 'https://takape-vhlum.mongodbstitch.com/'
    }
]

export default function Projects() {
    return (
        <div className="relative glass p-10 shadow-none">
            <p className="relative z-10 font-inter text-dark font-semibold text-2xl md:text-3xl">Stuff I <br/> worked on</p>
            
            <div className="absolute top-22 md:top-24 w-24 md:w-32 left-9 z-0">
                <Image src={line} alt=""/>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {works.map((work, index) => (
                    <div key={index} className="group gap-5 cursor-pointer font-inter text-dark transform transition duration-500 ease-in-out hover:-translate-y-1.5">
                        <a href={work.link} target="_blank" rel="noreferrer">
                            <div className="shine">
                                <Image src={work.img} alt="" width="450" height="350"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-2xl"> {work.name} </p>
                                    <p className="opacity-80">{work.desc}</p>
                                </div>
                                <a href={work.link} target="_blank" rel="noreferrer"><button className="border-2 border-gray p-2 px-4 rounded-lg group-hover:text-white group-hover:bg-gray transition-all text-gray">Visit Site</button></a>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
