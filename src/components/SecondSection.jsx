import React from 'react'
import ConflictingStarsBlack from './ConflictingStarsBlack';
import ConflictingStarsBlackSmall from './ConflictingStarsBlackSmall';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Slider from './Slider'

export default function SecondSection() {
    return (
        <main className='bg-pink '>

            <div className='mt-10 lg:mt-20 flex justify-between items-center '>
                <p className='pl-10 text-[1.8rem] lg:text-[5rem]  uppercase text-black font-extrabold tracking-widest   '>our best nft</p>
                <div className='hidden-on-phone'><ConflictingStarsBlack /></div>
                <div className='sm:block lg:hidden md:hidden'><ConflictingStarsBlackSmall /></div>
            </div>

            <div className=' border px-10 flex flex-col-reverse justify-around items-center lg:flex-row'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='hidden-on-phone flex flex-col justify-center items-center border rounded-full w-[300px] h-[300px] lg:mt-20'><span className='flex justify-center items-center border-dashed  border-2 border-black  rounded-full w-[250px] h-[250px] text-[8rem] uppercase text-black font-extrabold tracking-widest '>01</span> </div>
                    <div className='mt-5 lg:mt-20 border w-[200px] flex justify-between'> <span className=' opacity-50 hover:opacity-100 transition-all duration-100'><LeftArrow /></span> <span className=' opacity-50 hover:opacity-100 transition-all duration-100'><RightArrow /></span> </div>
                </div>

                <div className='w-[100%] lg:w-[60%] border flex flex-col justify-center items-center'>
                    <div className='w-[100%] flex justify-start'><p className='pl-5 border lg:text-[1.5rem] lg:w-[450px]'>Find The Best NFTs On Our Platform,
                    Where Quality Meets Rarity.
                   </p></div>
                   
                   <Slider/>
                </div>

            </div>
        </main>
    )
}
