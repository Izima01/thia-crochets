import React from 'react'
import { FaShippingFast, FaMoneyBillAlt } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Services = () => {
  return (
    <section className="services py-10 w-[84%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 justify-between w-fit">
            <div className="flex py-4 px-3 gap-6 bg-gray-50 hover:bg-[#d18090] group transition-all ease-in-out duration-500">
                <FaShippingFast size={52} className='group-hover:text-white text-[#a5626f]' />
                <div>
                    <h6 className='font-semibold text-lg'>Quick Shipping</h6>
                    <p className='text-[#666666] group-hover:text-white text-sm'>Get your orders on time</p>
                </div>
            </div>

            <div className="flex py-4 px-3 gap-6 bg-gray-50 hover:bg-[#d18090] group transition-all ease-in-out duration-500">
                <FaMoneyBillAlt size={52} className='group-hover:text-white text-[#a5626f]' />
                <div>
                    <h6 className='font-semibold text-lg'>Great Quality</h6>
                    <p className='text-[#666666] group-hover:text-white text-sm'>Quality Products Assured</p>
                </div>
            </div>
        
            <div className="flex py-4 px-3 gap-6 bg-gray-50 hover:bg-[#d18090] group transition-all ease-in-out duration-500">
                <BiSupport size={52} className='group-hover:text-white text-[#a5626f]' />
                <div>
                    <h6 className='font-semibold text-lg'>Online Support 24/7</h6>
                    <p className='text-[#666666] group-hover:text-white text-sm'>Dedicated support</p>
                </div>
            </div>

            <div className="flex py-4 px-3 gap-6 bg-gray-50 hover:bg-[#d18090] group transition-all ease-in-out duration-500">
                <RiSecurePaymentFill size={52} className='group-hover:text-white text-[#a5626f]' />
                <div>
                    <h6 className='font-semibold text-lg'>Payment Secure</h6>
                    <p className='text-[#666666] group-hover:text-white text-sm'>100% secure payment</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services