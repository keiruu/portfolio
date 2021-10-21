import React from 'react'
import Image from 'next/image'
import logo from '../images/akulogo.svg'

import { motion } from "framer-motion"


const menus = [
    { name: 'works.'},
    { name: 'about.'},
    { name: 'skills.'},
    { name: 'contacts.'},
]

export default function Nav() {

    return (
        <div>
            <motion.div className="relative flex items-center justify-center gap-8 md:gap-14 my-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 4,
                    type: "spring",
                    bounce: 0.7,
                    duration: 2,
                  }}>
              {menus.map((menu, index) => (
                <div key={index} className="relative">
                  {/* {menu.name !== "none" ? 
                    <p className="cursor-pointer font-inter relative text-pink mt-3">{menu.name}</p>
                  : <motion.div
                      initial={{scale: 1}}
                      whileHover={{scale: 1.3}}
                    >
                      <Image src={logo} alt="AKU Logo" width="50" height="50" />
                    </motion.div>
                  } */}
                  <p className="text-xs md:text-lg cursor-pointer font-inter relative text-pink mt-3 font-bold transform transition duration-500 ease-in-out hover:-translate-y-1.5">{menu.name}</p>
                </div>
              ))}
          </motion.div>
      
          {/* <motion.div className="relative flex md:hidden items-center justify-center gap-8 md:gap-20 my-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 4,
              type: "spring",
              bounce: 0.7,
              duration: 2,
            }}
          >
            <Image src={logo} alt="AKU Logo" width="50" height="50" />
          </motion.div> */}
        </div>
    )
}
