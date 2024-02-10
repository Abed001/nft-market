import React from 'react'
import { useLayoutEffect, useRef } from "react"
import { gsap } from 'gsap';
import ConflictingStarsBlack from './svg/ConflictingStarsBlack';
import ConflictingStarsBlackSmall from './svg/ConflictingStarsBlackSmall';
import clipskull from '../images/nft/clipskull.png'
import RoundedStar from './svg/RoundedStar';
export default function SectionThree() {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({ repeat: -1, yoyo: true })
            t1.from("#imganime", {
                opacity: 1,
                yPercent: 1,
                duration: 0.8, // Adjusted duration for smoother animation
                //ease: 'power2.inOut',
            }).to("#imganime", {
                opacity: 1,
                yPercent: 1,
                duration: 0.8, // Adjusted duration for smoother animation
                //ease: 'power2.inOut',
            })

        }, comp)
        return () => ctx.revert()
    }, [])


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({ repeat: -1, yoyo: true })
            t1.from("#roundedStar", {
                rotationZ: 10,
                duration: 0.8,
                //ease: 'power2.inOut',
            })

                .to("#roundedStar", {
                    rotationZ: 10,
                    duration: 0.8,
                    // ease: 'power2.inOut',
                })

        }, comp)
        return () => ctx.revert()
    }, [])

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#main",
                    pin: true, // pin the trigger element while active
                    start: "10px center", // when the top of the trigger hits the top of the viewport
                    end: "top center", // end after scrolling 500px beyond the start
                    scrub: 10,
                }


            })
            t1.from("#main", {
                opacity: 0,
                x: -500,
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

        <main ref={comp} className='relative bg-yellow font-kulimpark'>
            <header id='main' className='mt-10 lg:mt-20 flex justify-between items-center '>
                <p className='pl-10 text-[1.8rem] lg:text-[5rem]  uppercase text-black font-extrabold tracking-widest'>our feature</p>
                <div className='hidden-on-phone'><ConflictingStarsBlack /></div>
                <div className='sm:block lg:hidden md:hidden'><ConflictingStarsBlackSmall /></div>
            </header>
            <section className='mt-10 mb-10 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-10'>
                {/*image*/}
                <div className=' lg:w-[600px] bg-purple bigshadow w-[80%] flex justify-center items-center'><img id="imganime" className=' w-[60%]' src={clipskull} alt="nft image of skull" /></div>

                {/*flex-col for cards*/}
                <div className='flex flex-col justify-center items-center lg:w-1/2'>

                    {/*InfoDiv*/}
                    <div id='main' className='  w-full px-10 mt-10 flex flex-row justify-center text-left items-center lg:justify-between'>
                        {/* dotted circle*/}
                        <div className=' flex flex-col justify-center items-center border rounded-full h-[100px] w-[100px] lg:w-[130px] lg:h-[100px] '>
                            <div className=' flex justify-center items-center border-[1px] border-black rounded-full w-[90px] h-[90px]'>
                                <div id='dottedCircle' className=' flex justify-center items-center w-[91px] h-[91px]'>
                                    <span id='clockanime' className=' text-[3rem] uppercase text-black font-extrabold tracking-widest'>01</span>
                                </div>
                            </div>

                        </div>
                        {/* Info Text*/}
                        <div className=' w-[250px] ml-5 lg:w-full lg:text-[2.5rem]'><h1 className='uppercase font-bold'>nft managment</h1>
                            <p className='text-[10px] lg:text-[15px] w-[90%] opacity-80 font-bold'>A System For Organizing And Managing NFT
                                Collections, Including The Ability To View And
                                Transfer Ownership Of NFTs.</p>
                        </div>
                    </div>


                    {/*InfoDiv*/}
                    <div id='main' className='w-full px-10 mt-10 flex flex-row justify-center text-left items-center'>
                        {/* dotted circle*/}
                        <div className=' flex flex-col justify-center items-center border rounded-full h-[100px] w-[100px] lg:w-[130px] lg:h-[100px] '>
                            <div className=' flex justify-center items-center border-[1px] border-black rounded-full w-[90px] h-[90px]'>
                                <div id='dottedCircle' className=' flex justify-center items-center w-[91px] h-[91px]'>
                                    <span id='clockanime' className=' text-[3rem] uppercase text-black font-extrabold tracking-widest'>02</span>
                                </div>
                            </div>

                        </div>
                        {/* Info Text*/}
                        <div className='w-[250px] ml-5 lg:w-full lg:text-[2.5rem]'><h1 className='uppercase font-bold'>nft analytics</h1>
                            <p className='text-[10px] lg:text-[15px] w-[90%] opacity-80 font-bold'>Insights And Data On The NFT Market.
                                Including. Trends, Sales Data, And Market Analysis.</p>
                        </div>
                    </div>


                    {/*InfoDiv*/}
                    <div id='main' className='w-full px-10 mt-10 flex flex-row justify-center text-left items-center'>
                        {/* dotted circle*/}
                        <div className=' flex flex-col justify-center items-center border rounded-full h-[100px] w-[100px] lg:w-[130px] lg:h-[100px]'>
                            <div className=' flex justify-center items-center border-[1px] border-black rounded-full w-[90px] h-[90px]'>
                                <div id='dottedCircle' className=' flex justify-center items-center w-[91px] h-[91px]'>
                                    <span id='clockanime' className=' text-[3rem] uppercase text-black font-extrabold tracking-widest'>03</span>
                                </div>
                            </div>

                        </div>
                        {/* Info Text*/}
                        <div className='w-[250px] ml-5 lg:w-full lg:text-[2.5rem]'><h1 className='uppercase font-bold'>nft community</h1>
                            <p className='text-[10px] lg:text-[15px] w-[90%] opacity-80 font-bold'>A Social Network For NFT Creator,
                                And Enthusiasts To Connect. Share, And Discuss NFTs.</p>
                        </div>
                    </div>
                    {/* star above robot image*/}
                    <div id='roundedStar' className='absolute top-[100px] right-[600px]'> <RoundedStar /></div>


                </div>
            </section>





        </main>

    )
}
