import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
     <footer className='border-t py-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
                <p className='text-gray-500 mb-4 '>
                    Be the first to hear about new products, exclusive events, and online offers
                </p>
                <p className='font-medium text-sm text-gray-600 mb-6'>
                    Sign up and get 10% off your first order.
                </p>
                <form className='flex'>
                    <input type="emial" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' />
                    <button type='submit' className='bg-black text-white py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>
                       Subscribe 
                    </button>
                </form>
            </div>

            {/* shop links  */}

            <div>
                <h3 className='text-lg text-gray-800'>Shop</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>Men's top Wear</Link>
                    </li>
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>Women's top Wear</Link>
                    </li>
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>Men's botton Wear</Link>
                    </li>
                    
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>Women's botton Wear</Link>
                    </li>

                </ul>
            </div>

            {/* support links */}

            <div>
                <h3 className='text-lg text-gray-800'>Support </h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>Contact us</Link>
                    </li>
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>About us</Link>
                    </li>
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>FAQs</Link>
                    </li>
                    
                    <li>
                        <Link to='#' className='text-gray-600 transition-color'>Features</Link>
                    </li>

                </ul>
            </div>
    {/* follow us */}

    <div>
        <h3 className='text-lg text-gray-800 mb-4 '>Follow Us</h3>
        <div className='flex items-center space-x-4 mb-6'>
            <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'
            className='hover:text-gray-300'>
                <TbBrandMeta className='h-5 w-5'/>
            </a>

            <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'
            className='hover:text-gray-300'>
                <IoLogoInstagram className='h-5 w-5'/>
            </a>

            <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'
            className='hover:text-gray-300'>
                <RiTwitterXLine className='h-4 w-4'/>
            </a>
        </div>
        <p className='text-gray-500'>Call Us</p>
        <p>
            <FiPhoneCall className='inline-block mr-2 '/>
            +923406218617
        </p>
    </div>
        </div>

        {/* footer bottom */}
        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 '>
            <p className='text-gray-500 text-sm tracking-tighter text-center'>copyright 2025, compileTab , All Right Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer