import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleOrder } from '../../actions/orderActions'

const SingleOrder = (props) => {
    var totalPrice = 0
    const orderDetails = useSelector(state => state.orderDetails)
    const {order, loading, orderError} = orderDetails

    order && console.log(order.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleOrder(props.match.params.id))
    }, [])

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className="active">Order Details</li>
                    </ul>
                </div>
                </div>
            </div>
            {
                loading 
                ? 
                (
                    <div className="text-center mt-60 mb-60"> 
                        <h2>Loading...</h2>
                    </div>
                )
                : orderError ?
                (
                    <div className="text-center mt-60 mb-60"> 
                        <h2>{orderError}</h2>
                    </div>
                )
                :
                (
                        <div className="checkout-area pt-60 pb-30">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                            <div className="your-order">
                                <h3 className='text-center'>Your order Summary</h3>
                                <h5>Customer Name: <span style={{float: 'right', color: 'blue'}}>Solomon Aidoo Junior</span></h5> 
                                <hr/>
                                <h5>Phone: <span style={{float: 'right', color: 'blue'}}>{order.customerPhone}</span></h5>
                                <hr/>
                                <h5>Town/City: <span style={{float: 'right', color: 'blue'}}>{order.customerTown}</span></h5>
                                <hr/>
                                <h5>Address: <span style={{float: 'right', color: 'blue'}}>{order.customerAddress}</span></h5>
                                <hr/>
                                {order.customerGPS ? (<h5>GPS Address: <span style={{float: 'right', color: 'blue'}}>{order.customerGPS}</span></h5>) : '' }
                                <hr/>

                                <div className="your-order-table table-responsive mt-10">
                                <table className="table">
                                    <thead>
                                    <tr className='bg-info text-white'>
                                        <th className="cart-product-name">Product</th>
                                        <th className="cart-product-total">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        order.products && order.products.map(product =>{
                                        return(
                                                <tr className="cart_item">
                                                    <td className="cart-product-name">
                                                        {" "}
                                                        {product.productName}
                                                        <strong className="product-quantity"> × {product.qty}</strong>
                                                    </td>
                                                    <td className="cart-product-total">
                                                        <span className="amount">GHS {product.productPrice}.00</span>
                                                        <div style={{display:'none'}}>{totalPrice += product.qty * product.productPrice}</div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                        <tfoot>
                                        <tr className="cart-subtotal">
                                            <th>Cart Subtotal</th>
                                            <td>
                                            <span className="amount">GHS {totalPrice}.00</span>
                                            </td>
                                        </tr>
                                        <tr className="order-total">
                                            <th>Order Total</th>
                                            <td>
                                            <strong>
                                                <span className="amount">GHS {totalPrice}.00</span>
                                            </strong>
                                            </td>
                                        </tr>
                                        </tfoot>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        
                    )
               
            }

        </div>
    )
}

export default SingleOrder
