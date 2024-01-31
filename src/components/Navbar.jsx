import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Navbar() {
    const [clickedItemIndex, setClickedItemIndex] = useState(null);

    const [open, setOpen] = useState(false)

    const [iconState, setIconState] = useState("hamburger")

    const menuItems = ['Home', 'Collection', 'How IT WORK', 'CONTACT'];

    const handleItemClick = (index) => {
        setClickedItemIndex(index);
        setOpen(!open);
    };


    const handleMenuToggle = () => {
        setOpen(!open);
        if (iconState === 'hamburger') {
            setIconState('close');
        } else {
            setIconState('hamburger');
        }
    };
    return (
        <div className=' relative font-kulimpark flex bg-purple w-[100%] justify-between py-5 px-5 lg:py-5 lg:px-20'>
            <button className='uppercase text-white font-Shrikhand lg:text-[2rem]'>Met<span className='text-yellow font-Shrikhand'>a</span>fy</button>
            <div className='hidden-on-phone bg-cyan rounded-full py-3 px-7 shadow'>
                <ul className='flex uppercase space-x-4 cursor-pointer text-[15px]'>
                    {menuItems.map((item, index) => (
                        <li key={index} className={`hover:font-bold ${clickedItemIndex === index ? 'font-bold' : 'font-normal'}`}
                            onClick={() => handleItemClick(index)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {open && (
            <div className=' absolute top-0 right-0 lg:hidden md:hidden bg-cyan p-3  w-[90%] h-[100vh] z-20'>
               
                    <ul className='mt-20 pl-10 flex flex-col justify-end uppercase space-y-10 cursor-pointer text-[20px]'>
                        {menuItems.map((item, index) => (
                            <li  key={index} className={` ${clickedItemIndex === index ? 'font-bold' : 'font-normal'}`}
                                onClick={() => handleItemClick(index)}>
                                {item}
                            </li>
                        ))}
                    </ul>
               
            </div> )}

            <button className='px-3 py-3 bg-yellow text-black font-bold shadow rounded-lg lg:px-7 lg:py-3'>Get Started</button>

            <button className='sm:block md:hidden lg:hidden z-30 '><Hamburger toggled={open} size={20} toggle={setOpen} /> </button>

        </div>
    )
}
