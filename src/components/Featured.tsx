'use client';

import img1 from '../assets/Carousel-1.png';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import useStore from '../store';
import { useRouter } from 'next/navigation';
import ProductCard, { productType } from './Marketplace/ProductCard';


export const Loader = () => {
    return (
        <div className='w-full flex flex-col gap-2'>
            <div className='h-72 skeleton rounded-none' />
            <div className='w-3/5 skeleton h-5 ml-1.5' />
            <div className='w-2/5 skeleton h-5 ml-1.5' />
        </div>
    )
}

const FeaturedProducts = () => {
    const { addToLiked  } = useStore();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImg, setSelectedImg] = useState<StaticImageData>(img1);
    const [productArray, setProductArray] = useState<productType[]>([]);
    const router = useRouter();

    const handleClick =(i: number, image: StaticImageData, id: string)=> {
        if (i==0) {
            setSelectedImg(image);
            setOpen(true);
        }
        if (i==1) {
            addToLiked(id);
        }
    }

    const dataFetcher = async() => {
        try {
            const result = await fetch('/api/products');
            const data = await result.json();
            setProductArray(data?.products.slice(0, 3));
            console.log(data);
        } catch(e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        dataFetcher();
    }, []);

    return (
        <div className="mt-20 w-[84%] mx-auto mb-16">
            <div className='w-full flex justify-between items-center mb-6'>
                <h1 className='text-3xl font-semibold leading-normal w-28 border-b-[#a5626f] border-b-4 text-nowrap mt-'>Featured Products</h1>
                <button className='mt-10 bg-[#a5626f] font-medium px-5 py-1 text-white rounded-lg' onClick={() => router.push('/products')}>See All</button>
            </div>

            <div className='grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    isLoading ? <>
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                    </> :
                    productArray.map(({name, images, label, price, rating, id}) => (
                        <ProductCard handleClick={(i) => handleClick(i, images[0], id)} id={id} label={label} images={images} key={id} name={name} price={price} rating={rating} />
                    ))
                }
            </div>

            <div
                className={`fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.9)] z-10 justify-center items-center transition-all duration-700 ease-in-out ${open ? 'flex' : 'opacity-0 hidden'}`}
            >
                <Image className='w-3/4 max-w-[800px] h-3/4' src={selectedImg} alt='big image' />
                <button className='fixed top-5 right-5' onClick={() => setOpen(false)}>
                    <IoMdClose size={28} fill='white' />
                </button>
            </div>
        </div>
    )
}

export default FeaturedProducts