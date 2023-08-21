import Image from 'next/image'
import React from 'react'
import foto from "@/public/IMG-20220315-WA0035.jpg"
export default function Intro() {
  return (
    <section>
        <div className='flex justify-center items-center'>
            <div className='relative'>
                <Image 
                src={foto} 
                alt='foto'
                width="250"
                height="192"
                quality="95"
                priority={true}
                className='h-30 w-24 rounded-full
                border-[0.35rem] border-white shadow-xl'/>
                <span className='text-4xl absolute bottom-0 right-0'>
                    👋
                </span>
            </div>
        </div>
    </section>
  )
}
