import React from 'react'
import Image from 'next/image'
import mem from '../images/memoji.svg'
import e1 from '../images/ecclipse1.svg'
import e2 from '../images/ecclipse2.svg'

export default function Contact() {
    return (
        <div className="relative glass shadow-none p-20 py-10">
            <div className="z-10 relative flex flex-col gap-4">
                <p className="font-semibold text-4xl">Let&apos;s Talk <span>🤙</span></p>
                <p className="text-3xl transition-all hover:underline">
                    <a href = "mailto: abbyunat@gmail.com">abbyunat@gmail.com</a>
                </p>
            </div>
            <div className="hidden md:block md:absolute top-0 flex z-0">
                <div className="absolute -right-40 -top-6 w-80">
                    <Image src={e1} alt="" />
                </div>
                <div className="absolute left-28 -top-32 w-96">
                    <Image src={e2} alt="" className="absolute left-4"/>
                </div>
            </div>
        </div>
    )
}
