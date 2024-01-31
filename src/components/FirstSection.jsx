import React from 'react'
import first from '../images/nft/first.jpg'
import Svgelipsestart from './Svgelipsestart';
import SvgAroundImage from './SvgAroundImage';
import SvgAroundImagebig from './SvgAroundImagebig';
import StraigthDashedStar from './StraigthDashedStar';
import DownArrow from './DownArrow';
import cupcartoon from '../images/nft/cupcartoon.png';
import gorilla from '../images/nft/gorilla.png';
export default function FirstSection() {
    return (
        <div className='bg-purple'>
            <main className=' font-kulimpark relative flex flex-col justify-center items-center bg-purple w-[100%]  lg:flex-row lg:w-full lg:justify-around lg:px-10'>
                <div className='w-[1/2] pl-10 flex flex-col justify-center items-center  '>
                    <div className='lg:hidden md:hidden sm:block'> <SvgAroundImage /></div>
                    <div className='hidden-on-phone mt-10 lg:ml-20'> <SvgAroundImagebig /></div>
                    <img className='lg:hidden md:hidden sm:block absolute w-[250px] h-[1/2] top-[60px] right-[145px] bigshadow lg:top-[60px] lg:left-[80px]' src={first} alt="" />
                    <img className='lg:w-1/5 hidden-on-phone absolute bigshadow lg:top-[60px] lg:left-[230px] lg:mt-10' src={first} alt="" />
                    <p className='mr-10 mt-[100px] w-[300px] text-white font-normal lg:text-xl lg:mt-[120px]  lg:w-[80%]'>Find Your Next Rare NFT Treasure At Our Marketplace.</p>

                </div>

                <div className=' w-[1/2] lg:min-w-[300px] h-full mt-[12px] lg:mt-[-10px]  lg:pr-5'>
                    <div className='lg:ml-[240px] lg:mb-5'><Svgelipsestart /></div>
                    <div className='mt-2'><img className='mt-2 absolute top-[400px] right-[125px] w-[230px] lg:top-[34px] lg:right-[160px]' src={cupcartoon} alt="" />
                    </div>
                    <div className=' flex flex-row justify-end items-center lg:h-[50px]'><p className='text-[3rem] h-[100px] uppercase text-white font-bold tracking-wider lg:mr-10 textShadow '>c<img className='w-10 h-10 inline p-0 mb-2' src={gorilla} alt="" />llect</p>
                    </div>
                    <div className='flex items-center flex-col lg:flex-row lg:w-[100%]  lg:mr-10  '>
                        <div className='w-[100%] lg:mr-2 lg:w-1/2 '><StraigthDashedStar /></div>
                        <div className='w-1/2'><h1 className='uppercase text-purple font-bold text-[2.5rem] tracking-wide stroked-text mb-5 lg:mt-2'>your rare</h1>
                        </div>
                    </div>

                    <div className='w-[100%] flex items-center flex-row justify-between lg:flex-row lg:w-[100%]  lg:mr-10  '>
                        <div className=' flex flex-row w-[100%] justify-end mr-5 '><p className='text-[3.2rem]  uppercase text-white font-bold tracking-widest textShadow  '>NFT</p></div>
                        <div className='inline-block '><p className='uppercase bg-yellow rounded-lg px-0.5 text-purple font-bold text-[2.5rem] tracking-widest mr-5 transform rotate-12  outline-dashed outline-2 outline-offset-4 outline-yellow '>here</p></div>

                    </div>



                </div>




            </main>

            <div className='mt-5 mb-5 bg-purple w-[100%] flex justify-center lg:pt-0'><DownArrow /></div>
        </div>
    )
}
