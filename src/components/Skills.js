import React, {useEffect} from 'react'
import Image from 'next/image'
import line from '../images/line.svg'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const transition = { 
    hidden: { y: 20, opacity: 0},
    appear: {
        y: 1, opacity: 1, 
        transition: {
            type: "spring", 
            bounce: 0.5, 
            duration: 1,
        }
    }
}

const container = {
    hidden: {},
    appear: {
      transition: {
        staggerChildren: 0.5,
      }
    }
}


export default function Skills() {

    const {inView, ref} = useInView()
    const animationControl = useAnimation()

    useEffect(() => {
        if (inView) {
            animationControl.start("appear")
        }
    }, [animationControl, inView]);

    return (
        <motion.div className="relative glass p-4 md:p-10 shadow-none flex flex-col gap-10 mb-20">
            <motion.div variants={container} ref={ref} initial="hidden" animate={animationControl} className="relative">
                <motion.p variants={transition} className="relative z-10 font-inter text-dark font-semibold text-3xl md:text-4xl">Skills</motion.p>
                <div className="absolute top-4 md:top-6 w-24 md:w-32 -left-2 md:-left-4 z-0">
                    <Image src={line} alt=""/>
                </div>
            </motion.div>

            <div className="flex gap-20 md:gap-40 text-xl md:text-2xl"> 
                <motion.ul variants={container} ref={ref} initial="hidden" animate={animationControl} className="flex flex-col gap-4">
                    <motion.li variants={transition}>Javascript</motion.li>
                    <motion.li variants={transition}>React</motion.li>
                    <motion.li variants={transition}>Node.js</motion.li>
                    <motion.li variants={transition}>Firebase</motion.li>
                    <motion.li variants={transition}>MongoDB</motion.li>
                </motion.ul>
                <motion.ul variants={container} ref={ref} initial="hidden" animate={animationControl} className="flex flex-col gap-4">
                    <motion.li variants={transition}>Tailwindcss</motion.li>
                    <motion.li variants={transition}>Figma</motion.li>
                    <motion.li variants={transition}>Adobe Photoshop</motion.li>
                    <motion.li variants={transition}>Adobe Illustrator</motion.li>
                    <motion.li variants={transition}>Python</motion.li>
                </motion.ul>
            </div>
        </motion.div>
    )
}
