import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/login.webp'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex '>
            {/* Left Side - Form */}
            <div className='w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12'>
                <form onSubmit={handleSubmit} className='w-full max-w-md bg-white rounded-lg border shadow-lg p-6'>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl font-medium'>FShop</h2>
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-3'>Hey there! 👋</h2>
                    <p className='text-center mb-6 text-gray-600'>Enter your email and password to login</p>

                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-1 text-gray-700'>Email</label>
                        <input type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            placeholder='Enter your email address' />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-1 text-gray-700'>Password</label>
                        <input type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter your password' />
                    </div>

                    <button type="submit" className="w-full bg-black text-white p-3 font-semibold rounded-lg mt-4 hover:bg-gray-600 transition">
                        Sign In
                    </button>
                    <p className='mt-6 text-center text-sm'>
                        Don't have an account?
                        <Link to='/register' className='text-blue-500'>Register</Link>
                    </p>
                </form>
            </div>

            {/* Right Side - Image */}
            <div className='hidden md:block w-1/2'>
               <div className='h-full flex flex-col justify-center items-center'>
               <img src={login} alt="Login Image" className="w-full h-[550px] object-cover" />
               </div>
            </div>
        </div>
    )
}

export default Login
