'use client'

import img1 from '../assets/Carousel-1.png';
import img2 from '../assets/Carousel-2.png';
import img3 from '../assets/Carousel-3.png';
import img4 from '../assets/Carousel-4.png';
import img5 from '../assets/Carousel-5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const obj = [ img1, img2, img4, img5, img3 ];

const Hero = () => {
  return (
    <div className="mt-9 w-[84%] mx-auto flex flex-col">
      <h1 className='text-center text-4xl font-semibold leading-relaxed mb-8 sm:px-10'>Photography is poetry and beautiful untold stories</h1>
      <p className='text-center text-lg px-3 font-medium sm:px-[10%]'> through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
      <Swiper
        className='mt-12 w-3/4 mx-auto h-[26rem]'
        modules={[ Autoplay, EffectCards ]}
        effect='cards'
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: 8
        }}
        autoplay
        slidesPerView={1}
        loop={true}
        centeredSlides
      >
        {
          obj.map((ob, i) => (
            <SwiperSlide key={i} className='h-full mx-auto'>
              <Image src={ob} className='mx-auto h-full w-[23rem]' alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Hero
