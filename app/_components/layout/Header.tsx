import React from 'react'
import Navbar from './Navbar'
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const Header = () => {
    return (
        <div >
            <div className='flex flex-col bg-primary sticky top-0 shadow-sm min-h-10 justify-center px-10 py-5'>
                <div className='flex  flex-row' >
                    <div className='flex flex-1 items-center' >
                        <span className='text-2xl italic font-bold' >Nexa Shopping</span>
                    </div>
                    <div className='flex-2' >
                        <input
                            className='border-white border rounded-sm h-10 w-full placeholder:px-2'
                            placeholder='Seach Products...'
                        />
                    </div>
                    <div className='flex flex-1 justify-evenly' >
                        <div className='flex flex-row items-center'>
                            <FaUserAlt className='mr-2'  />
                            My Account
                            <FaAngleDown className='ml-1 size-5'/>
                        </div>
                        <div className='flex flex-row items-center'>
                            <FaCartArrowDown className='mr-2'  />
                            <span>Cart</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Header