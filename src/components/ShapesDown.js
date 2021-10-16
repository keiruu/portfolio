import React from 'react'
import lightgreen from '../images/lightgreen.svg'
import orange from '../images/orange.svg'
import peach from '../images/peach.svg'
import lightyellow from '../images/lightyellow.svg'
import Image from 'next/image'

import { motion } from "framer-motion"

const shapes = { 
    rotateInitial: {
        originX: 1,
        originY: 1,
        rotate: -90,
        y: 0,
        opacity: 0
    },
    rotate: { 
        y: 0,
        rotate: 0,
        opacity: 1,
        transition:{ 
            delay: 0.5,
            duration: 4, 
            type: "tween"
        }
    },
    rotateInitialTwo: {
        opacity: 0,
        originX: 1,
        originY: 0,
        rotate: 90,
        y: 0,
    },
    rotateTwo: {
        y: 0,
        rotate: 0,
        opacity: 1,
        transition:{ 
            delay: 1.5,   
            duration: 2, 
            type: "tween"
        }
    },
    circleInitial:{
        scale: 0
    },
    circle: {
        scale: [0, 0.5, 0.3, 1],
        transition:{ 
            delay: 1.5,   
            duration: 3, 
            type: "tween"
        }
    },
    boxInitial:{
        opacity: 0,
        scale: 0
    },
    box: {
        opacity: 1,
        scale: 1,
        transition:{ 
            delay: 2.5,   
            duration: 0.3, 
            type: "tween"
        }
    }
}

export default function ShapesDown() {
    return (
        <div >
            <div className="z-0">
            <motion.div initial="boxInitial" animate="box" variants={shapes} className="fixed top-24 md:top-30 right-0 w-24 md:w-32">
                <Image src={lightgreen} alt=""/>
            </motion.div>
            <motion.div initial="rotateInitial" animate="rotate" variants={shapes} className="fixed top-24 md:top-30 right-24 md:right-30 w-24 md:w-32">
                <Image src={peach} alt=""/>
            </motion.div>
            <motion.div initial="rotateInitialTwo" animate="rotateTwo" variants={shapes} className="fixed top-0 md:top-0 right-0 w-24 md:w-32">
                <Image src={orange} alt=""/>
            </motion.div>
            <motion.div initial="circleInitial" animate="circle" variants={shapes} className="fixed top-0 right-24 md:right-30 w-24 md:w-32">
                <Image src={lightyellow} alt=""/>
            </motion.div>
            </div>
        </div>
    )
}
