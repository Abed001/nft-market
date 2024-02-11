import { React } from 'react'
import { useLayoutEffect, useRef } from "react"
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap"
import first from '../images/nft/first.webp'
import Svgelipsestart from './svg/Svgelipsestart';
import SvgAroundImage from './svg/SvgAroundImage';
import SvgAroundImagebig from './svg/SvgAroundImagebig';
import StraigthDashedStar from './svg/StraigthDashedStar';
import DownArrow from './svg/DownArrow';
import cupcartoon from '../images/nft/cupcartoon.png';
import gorilla from '../images/nft/gorilla.png';

gsap.registerPlugin(ScrollTrigger);

export default function FirstSection() {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from(["#SvgAroundImage", "#text"], {
                opacity: 0,
                yPercent: "-100",
                duration: 1,
                delay: 0.3,
                stagger: 0.1,
            })
                .from(["#Cupanime", "#letteranime"], {
                    opacity: 0,
                    xPercent: -100,
                    duration: 1,
                    delay: 0.1,
                    stagger: 0.1,
                })
                .from("#downarrow", {
                    opacity: 0,
                    yPercent: 100,
                    duration: 0.5,
                    delay: 0.1,

                })
        }, comp)
        return () => ctx.revert()
    }, [])

    return (
        <div ref={comp} className='bg-purple'>
            <main className=' font-kulimpark relative flex flex-col justify-center items-center bg-purple w-[100%] lg:flex-row lg:w-full lg:justify-around lg:px-10'>
                <div className='w-[1/2] pl-10 flex flex-col justify-center items-center  '>
                    <div id='SvgAroundImage' className=' lg:hidden md:hidden sm:block'> <SvgAroundImage /></div>
                    <div id='SvgAroundImage' className=' hidden-on-phone mt-10 lg:ml-20'> <SvgAroundImagebig /></div>
                    <img id='SvgAroundImage' className=' lg:hidden md:hidden sm:block absolute w-[250px] h-[1/2] top-[60px] right-[110px] bigshadow' src={first} />
                    <img id='SvgAroundImage' className=' lg:w-1/5 hidden-on-phone absolute bigshadow lg:top-[60px] lg:left-[230px] lg:mt-10' src={first} />
                    <p id='text' className='mr-10 mt-[100px] w-[300px] text-white font-normal lg:text-xl lg:mt-[120px]  lg:w-[80%]'>Find Your Next Rare NFT Treasure At Our Marketplace.</p>

                </div>

                <div className=' w-[1/2] lg:min-w-[300px] h-full mt-[12px] lg:mt-[-10px]  lg:pr-5'>
                    <div id="Cupanime" className='lg:ml-[240px] lg:mb-5'><Svgelipsestart /></div>
                    <div className='mt-2'><img id='Cupanime' className='mt-2 absolute top-[400px] right-[95px] w-[230px] lg:top-[34px] lg:right-[160px]' src={cupcartoon} alt="" />
                    </div>
                    <div className=' flex flex-row justify-end items-center lg:h-[50px]'><p id='letteranime' className='text-[3rem] h-[100px] uppercase text-white font-bold tracking-wider lg:mr-10 textShadow '>c<img id='letteranime' className='w-10 h-10 inline p-0 mb-2' src={gorilla} alt="" />llect</p>
                    </div>
                    <div className=' flex items-center flex-col lg:flex-row lg:w-[100%]  lg:mr-10  '>
                        <div id='letteranime' className=' w-[100%] lg:mr-2 lg:w-1/2 '><StraigthDashedStar /></div>
                        <div id='letteranime' className='  w-1/2'><h1 className='uppercase text-purple font-bold text-[2.5rem] tracking-wide stroked-text mb-5 lg:mt-2'>your rare</h1>
                        </div>
                    </div>

                    <div className=' w-[100%] flex items-center flex-row justify-between lg:flex-row lg:w-[100%]  lg:mr-10  '>
                        <div className='flex flex-row w-[100%] justify-end mr-5 '><p id='letteranime' className='text-[3.2rem]  uppercase text-white font-bold tracking-widest textShadow  '>NFT</p></div>
                        <div className='inline-block '><p id='letteranime' className='uppercase bg-yellow rounded-lg px-0.5 text-purple font-bold text-[2.5rem] tracking-widest mr-5 transform rotate-12  outline-dashed outline-2 outline-offset-4 outline-yellow '>here</p></div>

                    </div>



                </div>




            </main>

            <div id='downarrow' className='mt-5 mb-5 bg-purple w-[100%] flex justify-center lg:pt-0'><DownArrow /></div>
        </div>
    )
}
