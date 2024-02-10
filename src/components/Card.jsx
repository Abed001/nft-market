import React from 'react'

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger);

export default function Card({Images,index}) {

  const { url} = Images[index]; 

    
  const comp = useRef(null)


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#Card",
          pin: true, // pin the trigger element while active
          start: "-20px center", // when the top of the trigger hits the top of the viewport
          end: "top center", // end after scrolling 500px beyond the start
          scrub:5,
        }
      })

      t1.from("#Card", {
        rotationZ: 50,
        duration: 1.5,
        opacity: 0,
        delay:0.5,
      })
     
        .to("#Card", {
          duration: 1.5,
          opacity: 100,
        })

    }, comp)
    return () => ctx.revert()
  }, [])

  return (
   
   
       <article ref={comp} className=' bg-gold flex flex-col w-[280px] h-[320px]  rounded-xl shadowcss'>
        <div id='Card' className='flex flex-col justify-center items-center p-2'>
            <img src={url} className='w-[97%] h-60 rounded-xl' alt="" />
            <div className=' flex justify-between items-center w-full p-2'>
                <div className='flex flex-col'>
                    <p>NECO</p>
                    <p>NO. 00852</p>
                    </div>
                <button>Bid Now</button>
            </div>
        </div>


    </article>
  
  )
}

