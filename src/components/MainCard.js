import React from 'react'
import star from '../images/Star.svg'
import Image from 'next/image'

import { motion } from 'framer-motion'

export default function MainCard() {
    return (
        <div className="relative flex flex-col items-center justify-center z-10">
            
            <motion.div className="mt-14 relative glass rounded-3xl p-10 py-20 md:px-32 shadow-none text-center text-pink font-inter"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 5,
                  type: "spring",
                  bounce: 0.7,
                  duration: 2,
                }}
            >
                <motion.p className="text-2xl md:text-3xl font-inter font-light"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                    delay: 5.5,
                    type: "spring",
                    bounce: 0.7,
                    duration: 2,
                    }}
                // eslint-disable-next-line react/no-unescaped-entities
                >Hi I'm</motion.p>
                <motion.div className="absolute top-24 md:top-30 right-6 md:right-24"
                    initial={{ rotate: 0}}
                    animate={{ rotate: [0, 30, 0, 35, -10, 0]}}
                    transition={{ delay: 5.5, duration: 2, repeat: Infinity }}
                >
                    <Image src={star} alt="" width="35" height="35" />
                </motion.div>
                <motion.p className="font-extrabold text-7xl md:text-8xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 5.8,
                      type: "spring",
                      bounce: 0.7,
                      duration: 2,
                    }}
                >ABIGAIL</motion.p>
                <motion.p className=""
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 5.9,
                      type: "spring",
                      bounce: 0.7,
                      duration: 2,
                    }}
                >A web developer and UI/UX designer</motion.p>
                <motion.div className="flex gap-4 justify-center mt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 6,
                  type: "spring",
                  bounce: 0.7,
                  duration: 2,
                }}
                >
                    <button className="hover:bg-pink hover:text-white transition-all text-pink border-pink border-2 rounded-lg p-4 md:px-8">contact me</button>
                    <a href="/documents/resume.pdf" target="_blank" rel="noreferrer"><button className="hover:mb-2 transform transition duration-500 ease-in-out hover:-translate-y-1.5 transition-all border-2 border-pink bg-pink text-white p-4 px-8 md:px-10 rounded-lg">resume</button></a>
                </motion.div>
            </motion.div>
        </div>
    )
}
