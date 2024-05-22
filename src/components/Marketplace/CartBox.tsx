import React, { useState } from "react";
import { productType } from "./ProductCard";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";
import { formatNumberToCurrency } from "../../utils/formatNumberToCurrency";
import { IoClose } from "react-icons/io5";

type proopTypes = {
    name: string;
    price: number;
    quantity: number;
    image: string | StaticImageData;
    rating: number;
    removeAllOfMe: (id: string) => void;
    id: string;
};

const CartBox = (props: proopTypes) => {
    const {
        name,
        price,
        quantity,
        image,
        rating,
        removeAllOfMe,
        id,
    } = props;
    const [count, setCount] = useState(quantity);

    return (
        <tr>
            <td className="cart__product__item">
                <Image src={image} width={100} height={100} alt={name} />
                <div className="cart__product__item__title">
                    <h6>{name || "Chain bucket bag"}</h6>
                    <div className="rating leading-5 -mr-1 flex gap-2 text-lg items-center mb-1">
                        {new Array(rating).fill("open").map((el, i) => (
                            <FaStar fill="#e3c01c" key={i} />
                        ))}
                    </div>
                </div>
            </td>
            <td className="cart__price text-center">
                ${formatNumberToCurrency(price)}
            </td>
            <td className="cart__quantity">
                <div className="flex gap-2 items-center pyIoClose-2 text-lg w-fit mx-auto">
                    <button
                        className="bg-transparent pl-5"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        +
                    </button>
                    <p className="bg-transparent px-3">{count}</p>
                    <button
                        className="bg-transparent pr-5"
                        onClick={() =>
                            setCount((count) => (count == 1 ? count : count - 1))
                        }
                    >
                        -
                    </button>
                </div>
            </td>
            <td className="cart__total text-center">
                $ {formatNumberToCurrency(price * count)}
            </td>
            <td className="cart__close">
                <button onClick={() => removeAllOfMe(id)}>
                    <IoClose size={20} />
                </button>
            </td>
        </tr>
    );
};

export default CartBox;
