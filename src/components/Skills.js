import React from 'react'
import Image from 'next/image'
import line from '../images/line.svg'

export default function Skills() {
    return (
        <div className="relative glass p-4 md:p-10 shadow-none flex flex-col gap-10">
            <div className="relative">
                <p className="relative z-10 font-inter text-dark font-semibold text-3xl md:text-4xl">Skills</p>
                <div className="absolute top-4 md:top-6 w-24 md:w-32 -left-2 md:-left-4 z-0">
                    <Image src={line} alt=""/>
                </div>
            </div>

            <div className="flex gap-20 md:gap-40 text-xl md:text-2xl"> 
                <ul className="flex flex-col gap-4">
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li>Tailwindcss</li>
                    <li>Figma</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>
    )
}
