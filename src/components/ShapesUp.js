import React from 'react'
import green from '../images/green.svg'
import pink from '../images/pink.svg'
import white from '../images/white.svg'
import yellow from '../images/yellow.svg'
import Image from 'next/image'

import { motion } from "framer-motion"

const shapes = { 
    rotateInitial: {
        originX: 0,
        originY: 0,
        rotate: -90,
        y: 0,
    },
    rotate: { 
        y: 0,
        rotate: 0,
        opacity: 1,
        transition:{ 
            duration: 4, 
            type: "tween"
        }
    },
    rotateInitialTwo: {
        opacity: 0,
        originX: 0,
        originY: 1,
        rotate: 90,
        y: 0,
    },
    rotateTwo: {
        y: 0,
        rotate: 0,
        opacity: 1,
        transition:{ 
            delay: 1,   
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
            delay: 1,   
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
            delay: 2,   
            duration: 0.3, 
            type: "tween"
        }
    }
}

export default function Shapes() {
    return (
        <div className="z-0">
            <motion.div initial="boxInitial" animate="box" variants={shapes} className="absolute top-0 left-0">
                <Image src={white} alt=""/>
            </motion.div>

            <motion.div initial="rotateInitial" animate="rotate" variants={shapes} className="absolute top-0 left-30">
                <Image src={green} alt=""/>
            </motion.div>

            <motion.div initial="rotateInitialTwo" animate="rotateTwo" variants={shapes} className="absolute top-29 -left-0.1">
                <Image src={yellow} alt=""/>
            </motion.div>

            <motion.div initial="circleInitial" animate="circle" variants={shapes} className="absolute top-29 left-30">
                <Image src={pink} alt=""/>
            </motion.div>
        </div>
    )
}
