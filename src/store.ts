import { StaticImageData } from "next/image";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

type productType = {
    name: string,
    images: StaticImageData[] | string[],
    price: number,
    label: string,
    rating: number,
    quantity: number,
    id: string
}

type Store = {
    cart: productType[];
    liked: string[];
    count: () => number;
    totalCostFn: () => number;
    addToCart: (payload: productType) => void;
    addToLiked: (payload: string) => void;
    removeFromCart: (payload: string) => void;
    removeAllofOneProduct: (payload: string) => void;
    removeFromLiked: (payload: string) => void;
    removeAll: () => void;
}

const useStore = create(persist<Store>(
    (set, get) => ({
        cart: [],
        liked: [],
        count: () => {
            const { cart } : { cart: productType[] } = get();
            if (cart.length) return cart.map(item => item.quantity).reduce((prev, curr) => prev + curr);
            return 0;
        },
        totalCostFn: () => {
            const { cart } = get();
            if (cart.length) return cart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr);
            return 0;
        },
        // deliveryFee: '',
        // setDeliveryFee(val) {
        //     set(state => ({
        //         ...state, deliveryFee: val
        //     }))
        // },
        isChanged: false,
        addToCart(payload) {
            const { cart } = get();
            const updatedCart = updateCart(payload, cart);
            set(state => ({
                ...state, cart: updatedCart
            }));
        },
        addToLiked(productId) {
            const { liked } = get();
            set(state => ({
                ...state, liked: [...liked, productId]
            }));
        },
        removeFromCart(productId) {
            const { cart } = get();
            const updatedCart = removeCart(productId, cart);
            set(state => ({
                ...state, cart: updatedCart, isChanged: true
            }))
        },
        removeAllofOneProduct(productId) {
            const {cart} = get();
            set(state => ({
                ...state, cart: cart.filter(el => el.name !== productId)
            }))
        },
        removeFromLiked(productId) {
            const { liked } = get();
            set(state => ({
                ...state, liked: liked.filter(el => el !== productId)
            }))
        },
        removeAll() {
            set(state => ({
                ...state, cart: []
            }));
        }
    }),
    {
        name: 'cart-thia',
        storage: createJSONStorage(() => sessionStorage),
    }
));

function updateCart(product: productType, cart: productType[]) {
    const doesProductExist = cart.find(item => item.name === product.name);

    if (!doesProductExist) cart.push(product);
    else {
        return cart.map(item => {
            if (item.name === product.name) {
                return { ...item, quantity: doesProductExist.quantity + product.quantity }
            }

            return item
        })
    }
    return cart;
}

function removeCart(nameProduct: string, cart: productType[]) {
    return cart.map(item => {
        if (item.name === nameProduct)
            return { ...item, quantity: item.quantity - 1 }
        return item;
    }).filter(item => {
        return item.quantity;
    });
}

export default useStore;