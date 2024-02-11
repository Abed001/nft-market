import React from 'react'
import GroupStars from './svg/GroupStars';
import SmallGroupStars from './svg/SmallGroupStars';
import mon1 from '../images/nft/mon1.webp'
import mon2 from '../images/nft/mon2.webp'
import mon3 from '../images/nft/mon3.webp'
import mon4 from '../images/nft/mon4.webp'
import mon5 from '../images/nft/mon5.webp'
import mon6 from '../images/nft/mon6.webp'
import mon7 from '../images/nft/mon7.webp'
import mon8 from '../images/nft/mon8.webp'
import Card from './Card';
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger);
export default function SectionFour() {
  
  const comp = useRef(null)

  const cardImage = [
    {
      url: mon1,
    },
    {
      url: mon2,
    },
    {
      url: mon3,
    },
    {
      url: mon4,
    },
    {
      url: mon5,
    },
    {
      url: mon6,
    },
    {
      url: mon7,
    },

    {
      url: mon8,
    },


  ]


  return (
    <ReactLenis root>


      <div ref={comp} className='flex flex-col bg-green lg:px-10'>
        <header className=' mt-5 h-[100px] lg:px-10 flex lg:justify-center items-center lg:mt-40 lg:flex-row'>
          <div  className='hidden-on-phone'> <GroupStars /></div>
          <div className='lg:hidden md:hidden sm:block pr-5'> <SmallGroupStars /></div>
          <div className='flex flex-col lg:pl-10'>
            <p className='lg:mb-10 mb-5  text-[1rem] lg:text-[4rem]  uppercase
           text-black font-extrabold tracking-wide'>top arts work this week</p>
            <p className=' text-[10px] lg:text-[20px] w-[90%] opacity-80 font-bold'>This Week In The Art World, There Are Numerous Standout Exhibitions And Events Worth
              Mentioning.
            </p>
          </div>
        </header>

        <section id="Card" className=' mt-10 lg:mt-40 grid grid-cols-1  place-items-center lg:grid-cols-4 gap-y-10 mb-20 '>
          {cardImage.map((images, index) => (
            <Card key={index} Images={cardImage} index={index} />
          ))}

        </section>

      </div>
    </ReactLenis>
  )
}
