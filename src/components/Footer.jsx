import { AiFillInstagram, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import logo from '../assets/thia-logo.png';
import { FaTiktok } from "react-icons/fa"; 
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="mt-7 mb-10 w-[84%] mx-auto">
        {/* <footer className='md:hidden w-full'>
            <p className="mt-8 text-sm mb-4">REACH US</p>
            
            <span className="flex gap-4 mb-6 items-center">
                <AiOutlineMail size={24} />
                <p className='text-sm'>ezohcynthia12@gmail.com</p>
            </span>
            <span className="flex gap-4 items-center">
                <GoLocation size={24} />
                <p className='text-sm'>Lagos, Nigeria</p>
            </span>
        </footer> */}

        <footer className="block w-full">
            <nav className='flex md:flex-row flex-col md:justify-between md:items-center w-full my-8 px-10 gap-8 md:gap-4 items-start justify-start'>
                <Image src={logo} alt="" className='max-w-[16rem]' />
                <section className='justify-self-start'>
                    <a href='mailto:kingsleyizima@gmail.com' className="flex gap-4 mb-6 items-center">
                        <AiOutlineMail size={30} />
                        <p className='text-sm'>cynthiaezoh@gmail.com</p>
                    </a>
                    <span className="flex gap-4 items-center">
                        <GoLocation size={30} />
                        <p className='text-sm'>Lagos, Nigeria</p>
                    </span>
                </section>
                <div className="flex gap-12 md:gap-7 md:mt-6 items-center">
                    <a 
                        className='hover:scale-125 transition-transform duration-500 ease-in-out group'
                        rel='noreferrer'
                        target="_blank"
                        href="https://www.instagram.com/thia_crochets/"
                    >
                        <AiFillInstagram size={40} className='group-hover:text-[#a5625f] text-[#a5625f]' />
                    </a>

                    <a
                        className='hover:scale-125 transition-transform duration-500 ease-in-out group'
                        rel='noreferrer'
                        target="_blank"
                        href="https://www.tiktok.com/@thia_crochets"
                    >
                        <FaTiktok size={40} className='group-hover:text-[#a5625f] text-[#a5625f]' />
                    </a>

                    <a
                        className='hover:scale-125 transition-transform duration-500 ease-in-out group'
                        rel='noreferrer'
                        target="_blank"
                        href="https://web.facebook.com/thiacrochets/"
                    >
                        <FaFacebook size={40} className='group-hover:text-[#a5625f] text-[#a5625f]' />
                    </a>
                </div>
            </nav>
            <aside>
                <p className='text-center font-medium mt-2'>Thia's Crochets © 2024. All Rights Reserved.</p>
            </aside>
        </footer>
    </div>
  )
}

export default Footer