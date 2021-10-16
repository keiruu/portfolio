import React, {useEffect} from 'react'
import Image from 'next/dist/client/image'
import abigail from '../images/abigail.svg'
import line from '../images/line.svg'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const transition = { 
    hidden: { y: 20, opacity: 0},
    appear: {
        y: 0, opacity: 1, 
        transition: {
            type: "spring", bounce: 0.5, duration: 2,
        }
    }
}

const container = {
    hidden: {},
    appear: {
      transition: {
        staggerChildren: 0.5, delay: 5
      }
    }
  }

  
export default function About() {

    const {inView, ref} = useInView()
    const animationControl = useAnimation()

    useEffect(() => {
        if (inView) {
            animationControl.start("appear")
        }
      }, [animationControl, inView]);

    return (
        <div className="flex md:flex-row flex-col justify-center gap-6">
           
            <motion.div className="flex flex-col gap-6 md:gap-2 md:w-1/2 lg:w-1/3 mx-2 p-10 lg:p-0 md:mx-0 glass shadow-none" >
                <motion.div variants={container} initial="hidden" ref={ref} animate={animationControl} className="flex flex-col gap-3 relative">
                    <motion.p className="z-10 font-inter text-dark text-2xl md:text-3xl"
                        variants={transition}
                    >About Me</motion.p>
                    <div className="absolute top-5 md:top-6 w-40 md:w-56 -left-5 z-0">
                        <Image src={line} alt=""/>
                    </div>
                    <motion.p className="font-inter text-dark text-3xl md:text-5xl font-bold"
                        variants={transition}
                    >I’m Abigail Kaye R. Unating a Web Developer and UI/UX Designer from the Philippines</motion.p>
                </motion.div>

                {/* <hr className="text-pink border-2 bg-pink w-24 my-3" /> */}
                
                <div className="md:hidden flex justify-center w-full">
                    <Image src={abigail} alt="" width="250" height="250"/>
                </div>

                <motion.ul variants={container} initial="hidden" animate={animationControl} className="font-inter text-dark mt-4">
                    <motion.li
                        variants={transition}
                    >
                        I’m currently a 3rd year Information Technology student majoring 
                        in Software Technologies at West Visayas State University, 
                        Iloilo City, Philippines. 
                    </motion.li>
                    <br/>
                    <motion.li 
                        variants={transition}
                    > 
                        I started coding way back in 2016 and have been casually making 
                        small programs since then. It was only recently that I decided 
                        to work hard to push out projects I can deem worthy of having 
                        a place in my portfolio.
                    </motion.li>
                    <br/>
                    <motion.li
                        variants={transition}
                    >
                        I also enjoy learning about UI/UX design and Graphic Design 
                        alongside coding and have been steadily improving my skills in those areas.
                    </motion.li>
                </motion.ul>
            </motion.div>
            <div className="md:block hidden">
                <Image src={abigail} alt="" width="400" height="400"/>
            </div>
        </div>
    )
}
