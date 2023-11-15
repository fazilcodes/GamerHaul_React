import React, { useState } from 'react'
import "./cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/CartReducer'
import { useDispatch } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest'

const Cart = () => {
  
  const [showCart, setShowCart] = useState(true)
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()
  
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => {
        total += item.quantity * item.price
    });

    return total.toFixed(2);
  }

  const stripePromise = loadStripe('pk_test_51O9ul5SIxbmbXEMM8qcnb0fd4Gjwv6KRzZePxM5TRixFt57jo6lwSGSukvZNmuCvCaV8yocQejkYg4BhxlUuTNcq00vuv36rwB');

  const handlePayment = async() => {
    try {
        const stripe = await stripePromise;

        const res = await makeRequest.post("/orders", {
            products
        })

        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
        })
    }catch(err) {
        console.log(err);
    }
  }

  return (
    <div className={`${showCart? 'cart': 'inactive'}`}>
        <div className='ooo'>
            <h1>Your cart items</h1>
            <div className="close" onClick={() => setShowCart(false)}>
                <span></span>
                <span></span>
            </div>
        </div>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 25)}</p>
                    <div className="price">
                        {item.quantity} x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>CHECKOUT</button>
        <span className='reset' onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart