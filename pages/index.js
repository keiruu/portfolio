import Head from 'next/head'
import MainCard from '../src/components/MainCard'
import ShapesUp from '../src/components/ShapesUp'
import ShapesDown from '../src/components/ShapesDown'

import Nav from '../src/components/Nav'
import About from '../src/components/About'
import Projects from '../src/components/Projects'

import { motion } from "framer-motion"

export default function Home() {

  
  return (
    <div>
      <Head>
        <title>Abigail Kaye Unating</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/aku.png" />
      </Head>

      <main className="flex flex-col justify-center items-center">
            <ShapesUp/>
            <ShapesDown/>
          

          <div className="relative flex flex-col items-center gap-56 w-full h-screen">
            <MainCard/>
            <Projects/>
            <About/>
          </div>
          
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
