import React, {useEffect} from 'react'
import Image from 'next/image'
import mem from '../images/memoji.svg'
import e1 from '../images/ecclipse1.svg'
import e2 from '../images/ecclipse2.svg'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const transition = { 
    hidden: { scale: 0, opacity: 0},
    appear: {
        scale: 1, opacity: 1, 
        transition: {
            type: "spring", 
            bounce: 0.5, 
            duration: 3,
        }
    }
}

const transitionAppear = { 
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
        staggerChildren: 0.2,
      }
    }
}


export default function Contact() {

    const {inView, ref} = useInView()
    const animationControl = useAnimation()

    useEffect(() => {
        if (inView) {
            animationControl.start("appear")
        }
    }, [animationControl, inView]);

    return (
        <div className="relative glass shadow-none md:p-0 p-10" ref={ref}>
            <motion.div variants={container} initial="hidden" animate={animationControl} className="z-10 relative flex flex-col gap-4">
                <motion.p variants={transitionAppear} className="font-semibold text-2xl md:text-4xl">Let&apos;s Talk <span>🤙</span></motion.p>
                <motion.p variants={transitionAppear} className="text-xl md:text-3xl transition-all hover:underline">
                    <a href = "mailto: abbyunat@gmail.com">abbyunat@gmail.com</a>
                </motion.p>
            </motion.div>
            <motion.div variants={container} initial="hidden" animate={animationControl} className="hidden md:block md:absolute top-0 flex z-0">
                <motion.div variants={transition} className="absolute -right-40 -top-6 w-80">
                    <Image src={e1} alt="" />
                </motion.div>
                <motion.div variants={transition} className="absolute left-28 -top-32 w-96">
                    <Image src={e2} alt="" className="absolute left-4"/>
                </motion.div>
            </motion.div>
        </div>
    )
}
