import Image, { StaticImageData } from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineExpandAlt, AiFillHeart} from "react-icons/ai";
import useStore from "../../store";
import { formatNumberToCurrency } from "../../utils/formatNumberToCurrency";

export type productType = {
    name: string,
    images: StaticImageData[],
    price: number,
    label: string,
    rating: number,
    handleClick: (i:number) => void,
    id: string,
    description?: string,
    category?: string
};

const ProductCard = (props: productType) => {
    const { name, images, price, label, rating, handleClick, id } = props;
    const { liked } = useStore();
    
    const icons = [<AiOutlineExpandAlt size={18} />, <AiFillHeart size={18} fill={liked.includes(id) ? '#e3c01c' : 'black'} />, <FiShoppingBag size={18} />];

    return (
        <div className="group bg-gray-50">
            <div
                className={`h-[21rem] md:h-[20rem] relative overflow-hidden`}
            >
                <Image priority src={images[0] as StaticImport} alt='product image' className='absolute inset-0 object-fill h-full w-full' />
                {label ? 
                    <div className={`${label == 'new' ? 'bg-[#36a300]' : label == 'sale' ? 'bg-[#ca1515]': 'bg-black'} text-sm text-white font-medium px-2 py-0.5 inline-block uppercase absolute top-2.5 left-2.5`}>{label}</div> : <></>
                }
                <ul className="product__hover absolute left-0 w-full bottom-8 flex justify-between px-6 text-center">
                    {
                        icons.map((icon, i) => (
                            <li
                                onClick={() => handleClick(i)}
                                key={i}
                                className={`list-none inline-flex relative top-20 group-hover:top-0 ease-in-out delay-${75*(i*2)}  duration-${75*(i*2)} dura transition-all w-11 h-11 rounded-full bg-white hover:bg-red-600 text-black justify-center items-center cursor-pointer hover:text-white hover:rotate-[360deg]`}
                            >
                                {icon}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="product__item__text pt-3 pb-2 text-center">
                <h6 className='text-lg'><a href="#">{name}</a></h6>
                <div className="rating leading-5 mb-1">
                    {
                        new Array(rating).fill('open').map((el, i) => (
                            <FaStar fill='#e3c01c' key={i} />
                        ))
                    }
                </div>
                <div className="text-[#11111] font-semibold text-lg">$ {formatNumberToCurrency(price)}</div>
            </div>
        </div>
    )
}

export default ProductCard