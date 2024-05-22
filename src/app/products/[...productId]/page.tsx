"use client"

import Image from 'next/image';
import product1 from '../../../assets/product/details/product-1.jpg';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { productType } from '../../../components/Marketplace/ProductCard';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FaStar } from 'react-icons/fa';
import { formatNumberToCurrency } from '../../../utils/formatNumberToCurrency';
import Loader from '../../../components/Loader';
import { FiShoppingBag } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import useStore from '../../../store';
import { BiCheck } from 'react-icons/bi';

const defaultProduct = {
    name: '',
    images: [product1],
    price: 0,
    label: '',
    rating: 0,
    handleClick: () => 1,
    id: '1',
    description: '',
    category: ''
}

export default function Page({ params }: { params: { productId: string } }) {
    const { cart, liked, addToCart } = useStore();

    const [count, setCount] = useState(1);
    const [imgSelect, setImgSelect] = useState(1);
    
    const [product, setProduct] = useState<productType>(defaultProduct);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('my_tabs_1');

    const isProductInCart = () => {
        return cart.map(el => el.name).includes(product.name);
    }

    const fetchSingleProduct = async() => {
      try {
            const result = await fetch(`/api/products/${params.productId}`);
            const data = await result.json();
            console.log(data);
            setProduct(data.product);   
        } catch(e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
      fetchSingleProduct();
    }, []);

    return (
        <section className="product-details w-[84%] mx-auto">
            {loading && <Loader text='Details Loading'  />}
                <div className="grid grid-cols-1  md:grid-cols-5 gap-5 pt-8">
                    <div className="col-span-1 md:col-span-3">
                        <div className="overflow-hidden flex gap-3">
                            <div className="w-1/4 h-[27rem] carousel carousel-vertical  lg:block hidden">
                                {
                                    product?.images?.map((thumb, i) => (
                                        <a key={i} className={`mb-4 carousel-item cursor-pointer relative after:absolute after:w-full last:mb-0 after:h-full after:inset-0 after:bg-[#000] after:transition-all after:duration-300 ${imgSelect == i ? 'after:opacity-45' : 'after:opacity-0'}`} href={`#product-${i+1}`} onClick={() => setImgSelect(i)}>
                                            <Image className='min-w-full' src={thumb} alt="" />
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="w-full carousel h-[27rem] transition-all ease-in-out duration-500 relative">
                                {
                                    product?.images?.map((el, i) => (
                                        <div key={i} className='carousel-item relative w-full transition-all ease-in-out duration-500' id={`product-${i+1}`}>
                                            <Image src={el} alt='' className='w-full' />
                                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                <Link href={`#product-${i == 0 ? String(product?.images?.length-1) : i}`} onClick={() => setImgSelect(i == 0 ? product?.images?.length-1 : i-1)} className="btn btn-circle">❮</Link>
                                                <Link href={`#product-${i == product?.images?.length-1 ? '1' : i+2}`} onClick={() => setImgSelect(i == product?.images?.length-1 ? 0 : i+1)} className="btn btn-circle">❯</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <div className="product__details__text">
                            <h3 className='text-[#111111] font-semibold uppercase mb-2.5 text-xl px-2 '>{product.name}</h3>
                            <div className="rating text-sm leading-5 -mr-1 flex items-center mb-1">
                                {
                                    new Array(product?.rating).fill('rate').map((el, i) => (
                                        <FaStar fill='#e3c01c' key={i} />
                                    ))
                                }
                                <span className='text-sm text-[#666666] ml-1.5'>( 138 reviews )</span>
                            </div>
                            <h4 className="text-4xl font-semibold text-primary ml-3 mt-2 mb-5">
                                ${formatNumberToCurrency(product?.price)}
                                {product?.label == 'sale' && 
                                    <span className='text-lg text-[#b1b0b0] line-through ml-2 inline-block'>
                                        ${formatNumberToCurrency(product?.price*1.3)}
                                    </span>
                                }
                            </h4>
                            <div className="mb-5 lg:flex-row flex-col gap-5 lg:gap-0 flex justify-between">
                                <div className="quantity w-fit">
                                    <div className='flex gap-4 items-center border-primary border rounded-full py-3 text-2xl'>
                                        <button className='bg-transparent text-primary pl-6 leading-5' onClick={() => setCount(count => count == 1 ? count : count-1)}>-</button>
                                        <p className='bg-transparent text-primary px-3 leading-5'>{count}</p>
                                        <button className='bg-transparent text-primary pr-6 leading-5' onClick={() => setCount(count => count + 1 )}>+</button>
                                    </div>
                                </div>
                                <button
                                    disabled={isProductInCart()}
                                    onClick={() => addToCart({...product, quantity: count})}
                                    className="text-white w-fit text-xl bg-primary font-semibold px-6 md:px-4 py-2 flex gap-4 justify-center items-center rounded-xl cursor-pointer transition-all ease-in-out disabled:bg-[#603836]"
                                >
                                    {
                                        isProductInCart() ? <>
                                            In Cart
                                            <BiCheck />
                                        </>
                                        : <>
                                            <FiShoppingBag />
                                            Add to cart
                                        </>
                                    }
                                </button>
                            </div>
                            <p>{product.description}Id, itaque saepe. Eum incidunt aliquam, molestiae vel sapiente rerum tempora porro minima sit magni explicabo quis temporibus cumque!</p>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <div className="tabs tabs-lifted tabs-md" role='tablist'>
                            <input type="radio" name="my_tabs_1" role="tab" className="tab w-fit tabs-md" aria-label="Related" checked={activeTab == 'my_tabs_1'} onChange={(e) => setActiveTab(e.target.name)} />
                            <div role="tabpanel" className="tab-content p-10">{product.description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ipsam voluptatem magnam quisquam repudiandae a exercitationem. Qui laboriosam praesentium laudantium amet possimus reprehenderit. Nulla magnam earum quae tenetur iste.</div>

                            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Reviews" checked={activeTab == 'my_tabs_2'} onChange={(e) => setActiveTab(e.target.name)} />
                            <div role="tabpanel" className="tab-content p-10">
                                <ul>
                                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                        quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                        Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                        voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
