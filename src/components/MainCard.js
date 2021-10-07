import React from 'react'
import star from '../images/Star.svg'
import Image from 'next/image'
import Nav from './Nav'

import { motion } from 'framer-motion'

export default function MainCard() {
    return (
        <div className="relative flex flex-col items-center justify-center z-10">
            <Nav/>
            <motion.div className="mt-24 relative glass rounded-3xl p-20 px-20 md:px-32 shadow-pink text-pink font-raleway"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 5,
                  type: "spring",
                  bounce: 0.7,
                  duration: 2,
                }}
            >
                <motion.p className="text-2xl md:text-3xl font-montserrat"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                    delay: 5.5,
                    type: "spring",
                    bounce: 0.7,
                    duration: 2,
                    }}
                >Hi I'm</motion.p>
                <motion.div className="absolute top-0 right-12 md:right-24"
                    initial={{ rotate: 0}}
                    animate={{ rotate: [0, 30, 0, 35, -10, 0]}}
                    transition={{ delay: 5.5, duration: 2, repeat: Infinity }}
                >
                    <Image src={star} alt="" width="35" />
                </motion.div>
                <motion.p className="font-bold text-7xl md:text-8xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 5.8,
                      type: "spring",
                      bounce: 0.7,
                      duration: 2,
                    }}
                >Abigail</motion.p>
            </motion.div>
        </div>
    )
}
