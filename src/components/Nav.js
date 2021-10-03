import React from 'react'
import Image from 'next/image'
import logo from '../images/akulogo.svg'


import { motion } from 'framer-motion'

const menus = [
    { name: 'About'},
    { name: 'Projects'},
    { name: 'none'},
    { name: 'Skills'},
    { name: 'Contact'},
]

export default function Nav() {
    return (
        <motion.div className="relative flex items-center justify-center gap-20 my-10"
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
                {menu.name !== "none" ? 
                  <p className="relative text-pink mt-3 font-medium">{menu.name}</p>
                : <motion.div
                    initial={{scale: 1}}
                    whileHover={{scale: 1.3}}
                  >
                    <Image src={logo} alt="AKU Logo" width="50" height="50" />
                  </motion.div>
                }
              </div>
            ))}
        </motion.div>
    )
}
