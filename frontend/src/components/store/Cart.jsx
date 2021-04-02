import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItemFromCart } from '../../actions/cartActions';
import {applyCoupon} from '../../actions/couponAction'


const Cart = (props) => {
    var totalPrice = 0;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart
    const coupon = useSelector(state => state.coupon);
    const { couponDetails, couponLoading, error } = coupon
    const  productID = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]) : 1
    const dispatch = useDispatch()
    const [code, setCode] = useState('')

    const removeFromCart = (productID) =>{
        dispatch(removeItemFromCart(productID))
    }

    const checkOut = () =>{
        props.history.push('/')
    }

    const applyTheCoupon = () =>{
        console.log(code)
        dispatch(applyCoupon(code))
    }
    
    useEffect(() => {
        console.log(code)
        document.title = 'Cart | Limpupa';

        if(productID){
            dispatch(addToCart(productID, qty))
        }
     }, [])

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>

                
                        <div className="Shopping-cart-area pt-60 pb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="#">
                                        <div className="table-content table-responsive">

                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th className="li-product-remove">remove</th>
                                                                    <th className="li-product-thumbnail">images</th>
                                                                    <th className="cart-product-name">Product</th>
                                                                    <th className="li-product-price">Unit Price</th>
                                                                    <th className="li-product-quantity">Quantity</th>
                                                                    <th className="li-product-subtotal">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                cartItems.length == 0  ?
                                                                <div className="text-center mt-60 mb-60">
                                                                    <h1> No item found in cart</h1>
                                                                </div>
                                                
                                                                :
                                                
                                                                cartItems.map(item => {
                                                                    return(
                                                                            <tr key={item._id}>
                                                                                <td className="li-product-remove"><button type="button" className="btn btn-danger" onClick={()=> removeFromCart(item._id)}><i className="fa fa-times"></i></button></td>
                                                                                <td width='200' align="center" className="li-product-thumbnail"><a href="#"><img src={`http://localhost:2500/productimages/` + item.productImage} style={{display: 'block'}} width="60%" alt="Li's Product Image" /></a></td>
                                                                                <td className="li-product-name"><a href="#">{item.productName}</a></td>
                                                                                <td className="li-product-price"><span className="amount">GHS {item.productPrice}.00</span></td>
                                                                                <td className="quantity">
                                                                                    <label>Quantity</label>
                                                                                    <div className="cart-plus-minus">
                                                                                    <select className="nice-select" value={item.qty} onChange={(e) => dispatch(addToCart(item._id, e.target.value))}> 
                                                                                        {[...Array(item.countInStock).keys()].map(x =>
                                                                                            <option value={x + 1} key={x + 1}>{x + 1}</option>
                                                                                        )}
                                                                                    </select>
                                                                                </div>
                                                                                </td>
                                                                                <div style={{display:'none'}}>{totalPrice += item.qty * item.productPrice}</div>
                                                                                <td className="product-subtotal"><span className="amount">GHS {item.qty * item.productPrice}.00</span></td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                        </div>
                                        <div className="row">
                                            <form onSubmit={applyTheCoupon}>
                                                <div className="col-12">                                               
                                                    <div className="coupon-all">
                                                        <div className="coupon">
                                                            <input className="input-text" value={code} onChange={(e) => setCode(e.target.value)}  placeholder="Coupon code" type="text" />
                                                            <input className="button" value="Apply coupon" onClick={applyTheCoupon} type="button"/>
                                                        </div>
                                                    </div>                                                            
                                                </div>
                                            </form> 
                                        </div>
                                        <br/>
                                        {
                                            couponLoading ? <h3 className='text-info'>Checking coupon validity...</h3> : error ? <h3 className='text-danger'>Coupon is either used or Invalid.</h3> : <h3 className='text-success'>Valid Coupon.</h3>
                                        }
                                            
                                        {
                                            (couponDetails.length != 0) ? (
                                                <div className="row">
                                                    <div className="col-md-5 ml-auto">
                                                        <div className="cart-page-total">
                                                            <h2>Cart totals</h2>
                                                            <ul>
                                                                <li>Subtotal <span>GHS {totalPrice - couponDetails.couponValue}.00</span></li>
                                                                <li>Total <span>GHS {totalPrice - couponDetails.couponValue}.00</span></li>
                                                            </ul>
                                                            <input className="button btn-warning" onClick={checkOut} value="Proceed to checkout" type="button" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                            :

                                            (
                                                <div className="row">
                                                    <div className="col-md-5 ml-auto">
                                                        <div className="cart-page-total">
                                                            <h2>Cart totals</h2>
                                                            <ul>
                                                                <li>Subtotal <span>GHS {totalPrice}.00</span></li>
                                                                <li>Total <span>GHS {totalPrice}.00</span></li>
                                                            </ul>
                                                            <input className="button btn-warning" onClick={checkOut} value="Proceed to checkout" type="button" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Cart
