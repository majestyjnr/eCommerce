import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartActions';


const Cart = (props) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart
    const  productID = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]) : 1

    const dispatch = useDispatch()
    useEffect(() => {
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
            {
                cartItems.length == 0  ?
                <div className="text-center mt-60 mb-60">
                    <h1> No item found in cart</h1>
                </div>

                :

                cartItems.map(item => {
                    return(
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
                                                    <tr>
                                                        <td className="li-product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                                        <td className="li-product-thumbnail"><a href="#"><img src={`http://localhost:2500/todaysdeals/` + item.productImage} alt="Li's Product Image" /></a></td>
                                                        <td className="li-product-name"><a href="#">{item.productName}</a></td>
                                                        <td className="li-product-price"><span className="amount">GHS {item.productPrice}.00</span></td>
                                                        <td className="quantity">
                                                            <label>Quantity</label>
                                                            <div className="cart-plus-minus">
                                                            <select className="nice-select" value={qty}>
                                                                {[...Array(item.countInStock).keys()].map(x =>
                                                                    <option value={x + 1} key={x + 1}>{x + 1}</option>
                                                                )}
                                                            </select>
                                                        </div>
                                                        </td>
                                                        <td className="product-subtotal"><span className="amount">GHS {qty * item.productPrice}.00</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="coupon-all">
                                                    <div className="coupon">
                                                        <input id="coupon_code" className="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text" />
                                                        <input className="button" name="apply_coupon" value="Apply coupon" type="submit" />
                                                    </div>
                                                    <div className="coupon2">
                                                        <input className="button" name="update_cart" value="Update cart" type="submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 ml-auto">
                                                <div className="cart-page-total">
                                                    <h2>Cart totals</h2>
                                                    <ul>
                                                        <li>Subtotal <span>$130.00</span></li>
                                                        <li>Total <span>$130.00</span></li>
                                                    </ul>
                                                    <a href="#">Proceed to checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            
        </div>
    )
}

export default Cart
