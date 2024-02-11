import React from 'react'
import ConflictingStarsBlack from './svg/ConflictingStarsBlack';
import ConflictingStarsBlackSmall from './svg/ConflictingStarsBlackSmall';
import BigPinkStar from './svg/BigPinkStar';
import StarWithFire from './svg/StarWithFire';
import StarWithFireOppo from './svg/StarWithFireOppo';
import RightArrow from './svg/RightArrow';
import LeftArrow from './svg/LeftArrow';
import klipartz from '../images/nft/klipartz.png'
import klipartz1 from '../images/nft/klipartz1.png'
import klipartz2 from '../images/nft/klipartz2.png'
import klipartz3 from '../images/nft/klipartz3.png'
import klipartz4 from '../images/nft/klipartz4.png'
import { useState } from 'react';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from "react"

export default function SecondSection() {
    const comp = useRef(null)
    const slides = [
        {
            url: klipartz,
        },
        {
            url: klipartz1,
        },
        {
            url: klipartz2,
        },

        {
            url: klipartz3,
        },
        {
            url: klipartz4,
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [increment, setIncrement] = useState(0);

    const IncrementNumber = () => {
        setIncrement((prevIncrement) => (prevIncrement === 4 ? 0 : prevIncrement + 1)); // Reset at 4, not 5
    };

    const DecrementNumber = () => {
        setIncrement((prevIncrement) => (prevIncrement === 0 ? 4 : prevIncrement - 1)); // Cycle back to 4 when decrementing at 0
    };


    const prevSlide = () => {

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        DecrementNumber();

    };

    const nextSlide = () => {


        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        IncrementNumber();



    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({ repeat: -1, yoyo: true })
            t1.from("#imganime", {
                opacity: 1,
                yPercent: 1,
                duration: 0.8, // Adjusted duration for smoother animation
                //  ease: 'power2.inOut',
            })
                .to("#imganime", {
                    opacity: 1,
                    yPercent: 1,
                    duration: 0.8, // Adjusted duration for smoother animation
                    // ease: 'power2.inOut',
                })
        }, comp)
        return () => ctx.revert()
    }, [increment])


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({ repeat: -1, yoyo: true })
            t1.from("#clockanime", {
                opacity: 1,
                rotationX: 180,
                duration: 1,
                delay: 0.3,
                stagger: 0.1,
            }).from("#dottedCircle", {
                rotationZ: 360,
            })
        }, comp)
        return () => ctx.revert()
    }, [increment])

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#main",
                    pin: true, // pin the trigger element while active
                    start: "top center", // when the top of the trigger hits the top of the viewport
                    end: "top center", // end after scrolling 500px beyond the start
                    scrub:10,
                }

            })
            t1.from("#main", {
                opacity: 0,
                x:-500,
                duration: 1,
                delay: 0.3,
                stagger: 0.1,
            })
            .to("#main", {
                opacity: 1,
            })
        }, comp)
        return () => ctx.revert()
    }, [])





    return (
        <main ref={comp} className='relative bg-pink overflow-hidden ' >

            <div id='main' className=' mt-10 lg:mt-20 flex justify-between items-center '>
                <p className='pl-10 text-[1.8rem] lg:text-[5rem]  uppercase text-black font-extrabold tracking-widest   '>our best nft</p>
                <div className='hidden-on-phone'><ConflictingStarsBlack /></div>
                <div className='sm:block lg:hidden md:hidden'><ConflictingStarsBlackSmall /></div>
            </div>

            <div className='px-10 flex flex-col-reverse justify-around items-center lg:flex-row'>

                <div   className='flex flex-row lg:flex-col justify-center items-center'>
                    <div className=' hidden-on-phone flex flex-col justify-center items-center border rounded-full w-[300px] h-[300px] lg:mt-20'>
                        <div id='dottedCircle' className=' flex justify-center items-center border-dashed border-2 border-black rounded-full w-[250px] h-[250px]'><span id='clockanime' className=' text-[8rem] uppercase text-black font-extrabold tracking-widest '>0<span  >{increment}</span> </span></div>
                    </div>
                    <div id='main' className='hidden-on-phone mt-5 lg:mt-20 w-[200px] flex justify-between'>
                        <span onClick={prevSlide} className=' opacity-50 hover:opacity-100 transition-all duration-100'><LeftArrow /></span>
                        <span onClick={nextSlide} className=' opacity-50 hover:opacity-100 transition-all duration-100'><RightArrow /></span>
                    </div>
                    {/*for mobile view i used absolute postion*/}
                    <div id='main'  className='sm:block lg:hidden md:hidden absolute top-[600px] mt-5 w-[200px] flex justify-between'>
                        <span onClick={prevSlide} className=' opacity-50 hover:opacity-100 transition-all duration-100'><LeftArrow /></span>
                        <span onClick={nextSlide} className=' opacity-50 hover:opacity-100 transition-all duration-100'><RightArrow /></span>
                    </div>


                </div>



                <div className='w-[100%] lg:w-[60%]  flex flex-col justify-center items-center'>
                    <div className='w-[100%] flex justify-start'><p className='pl-5 lg:text-[1.5rem] lg:w-[450px]'>Find The Best NFTs On Our Platform,
                        Where Quality Meets Rarity.
                    </p></div>

                    {/*<Slider />*/}

                    <div className=' w-full h-[600px] m-auto py-16 px-4 group'>

                        <div
                            className='z-10 bg-blue w-full h-1/2 lg:h-full  bg-center bg-contain bg-no-repeat duration-500 bigshadow'>
                            <div><img id='imganime' className='z-20 lg:mt-0 mt-5 box absolute w-[300px] top-[140px] right-[60px] lg:top-[230px] lg:right-[260px] lg:w-[400px] ' src={slides[currentIndex].url} />
                            </div>

                        </div>

                        <div className=' hidden-on-phone absolute top-[275px] left-[460px] '><BigPinkStar /> </div>
                        <div className='opacity-10 absolute top-80 right-80 lg:top-[400px] lg:left-[500px]'><StarWithFireOppo /></div>
                        <div className='opacity-10 absolute top-40 left-80 lg:top-[600px] lg:left-[1050px]'><StarWithFire /> </div>



                    </div>
                </div>

            </div>
        </main>
    )
}
