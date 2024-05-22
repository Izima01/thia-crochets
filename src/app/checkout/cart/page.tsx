"use client"

import useStore from '../../../store';
import './cart.css';
import CartBox from '../../../components/Marketplace/CartBox';
import { useState } from 'react';
import Link from 'next/link';
// import '../../../'

const Cart = () => {
    const { cart, removeAllofOneProduct } = useStore();
    console.log(cart);
    const [currentCart, setCurrentCart] = useState(cart);
    
    return (
        <section className="shop-cart w-[84%] py-10 mx-auto">
                        <div className="shop__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(prod => (
                                        <CartBox id={prod.id} removeAllOfMe={removeAllofOneProduct} image={prod.images[0]} rating={prod.rating} name={prod.name} price={prod.price} quantity={prod.quantity} key={prod.id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="cart__btn">
                            <Link href="/products">Continue Shopping</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="cart__btn update__btn">
                            <a href="#"><span className="icon_loading"></span>Update cart</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="discount__content">
                            <h6>Discount codes</h6>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code" />
                                <button type="submit" className="site-btn">Apply</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2">
                        <div className="cart__total__procced">
                            <h6>Cart total</h6>
                            <ul>
                                <li>Subtotal <span>$ 750.0</span></li>
                                <li>Total <span>$ 750.0</span></li>
                            </ul>
                            <a href="#" className="primary-btn">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
}

export default Cart