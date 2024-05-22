'use client'

import { Inter } from "next/font/google";
import logo from '../assets/thia-logo.png';
import logoSmall from '../assets/thia-logo-small.png';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import Link from "next/link";
import { usePathname } from "next/navigation";
// import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Footer from '../components/Footer';
import { ReactElement, useEffect, useState } from "react";
import useStore from "../store";

const navs = [
  {name: 'Home', link: '/'},
  {name: 'Marketplace', link: '/products'}
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { cart, count } = useStore();

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href='../assets/thia-logo-small.png' type="image/x-icon" />
        <link rel="icon" type="image/svg+xml" href="../assets/thia-logo-small.png" />

        {/* <link rel="icon" type="image/svg+xml" href='../assets/thia-logo-small.png' /> */}
        <title>Thia Crochet's Store</title>
      </Head>
      <body>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-[84%] navbar flex justify-between items-center pt-4 mx-auto">
              <div className='flex-none md:hidden'>
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <AiOutlineMenu
                    size="32px"
                    // htmlFor="my-drawer-3"
                    className='hover:rotate-90 duration-300 transition md:hidden block'
                    />
                </label>
              </div>
              <Link href='/'>
                <Image src={logo} alt="" className='h-14 w-[12rem]' />
              </Link>
              <nav className="gap-20">
                {navs.map(({name, link}, i) =>
                  <Link key={i} href={link} className={`w-fit md:block hidden active:text-clip ${pathname == link ? 'font-medium text-2xl text-[#a5626f]' : 'text-xl'}`}>
                    {name}
                  </Link>
                )}
                <Link href='/checkout/cart' className={`relative  ${pathname == '/products/checkout/cart' ? 'font-medium text-[#a5626f]' : ''}`}>
                  {
                    cart.length !== 0 ? <p className='bg-[#a5626f] rounded-full absolute top-0 right-0 text-xs leading-none text-white font-semibold px-1'>{count()}</p> : <></>
                  }
                  <AiOutlineShoppingCart size="30px" />
                </Link>
              </nav>
            </div>
            {children}
            <Footer />
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
  
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              {navs.map(({name, link}, i) =>
                <li key={i}>
                  <Link href={link} className={`w-fit md:block ${pathname == link ? 'font-medium text-2xl text-[#a5626f]' : 'text-xl'}`}>
                    {name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

      </body>
    </html>
  );
}
