'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Signup = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const router=useRouter();
    return (
        <div className='flex md:flex-row flex-col w-full bg-linear-to-b from-[#0F123B] via-[#090D2E] to-[#020515] min-h-screen'>
            <div className='relative bg-[url("/img/login-bg.jpg")] bg-cover bg-no-repeat bg-center flex items-center justify-center w-full flex-1 h-screen'>
            <div className="absolute w-full h-full bg-[#000000C7]/60  backdrop-blur-none ..."></div>
                <div className='z-10'>
                    <h3 className='md:text-[20px] text-[14px] font-[400] text-white/80 text-center'>INSPIRED BY THE FUTURE:</h3>
                    <h1 className='font-[700] md:text-[36px] text-[24px] bg-linear-to-r from-[#FFFFFF] via-[#ffffff] to-[#c4cbe6] text-transparent bg-clip-text text-center'>THE VISION UI DASHBOARD</h1>
                </div>

            </div>
            <div className='md:flex-1 flex-0 text-white flex items-center md:pl-20 pl-0 pr-0 mx-auto' >
                <div className='  rounded-[20px] bg-gradient-to-r from-[#6a6b7b] via-[#000000] to-[#4b4d5d] p-[1px]'>
                    <div className='bg-linear-to-b from-[#0F123B] via-[#090D2E] to-[#020515] p-8 rounded-[20px] '>
                        <h1 className='text-[30px] font-[700] text-center'>Welcome!</h1>
                    <p className='font-[400] text-[14px] mb-6 text-[#A0AEC0] text-center' >Use these awesome forms to login or create new <br></br> account in your project for free.

</p>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                                Name
                            </label>
                            {/* Wrapper for gradient border effect */}
                            <div className="p-[1px] rounded-[20px] bg-gradient-to-r from-[#6559a4] via-[#582CFF00] to-[#6559a4]">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your your name"
                                    className="w-full px-4 py-3 rounded-[20px] bg-[#0F123B] text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                                Email
                            </label>
                            {/* Wrapper for gradient border effect */}
                            <div className="p-[1px] rounded-[20px] bg-gradient-to-r from-[#6559a4] via-[#582CFF00] to-[#6559a4]">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 rounded-[20px] bg-[#0F123B] text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                                Password
                            </label>
                            {/* Wrapper for gradient border effect */}
                            <div className="p-[1px] rounded-[20px] bg-gradient-to-r from-[#6559a4] via-[#582CFF00] to-[#6559a4]">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Your email password"
                                    className="w-full px-4 py-3 rounded-[20px] bg-[#0F123B] text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="hidden" // Hide default checkbox
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="rememberMe" className="flex items-center cursor-pointer">
                                    <div
                                        className={`relative w-8 h-5 flex items-center bg-blue-600 rounded-full shadow-inner transition-colors duration-200 ease-in-out ${rememberMe ? 'bg-blue-500' : ''
                                            }`}
                                    >
                                        <div
                                            className={`dot absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${rememberMe ? 'translate-x-4' : 'translate-x-1'
                                                }`}
                                        ></div>
                                    </div>
                                    <span className="ml-3 text-gray-300 text-sm">Remember me</span>
                                </label>
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-lg"
                        >
                            SIGN UP
                        </button>

                    </form>

                    {/* Sign Up Link */}
                    <p className="mt-8 text-center text-gray-400 text-sm">
                        Don't have an account?{' '}
                        <a href="#" className="text-white hover:underline font-medium" onClick={()=>router.push('/auth/login')}>
                            Sign in
                        </a>
                    </p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Signup
