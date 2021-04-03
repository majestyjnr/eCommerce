import React, { useEffect, useState } from "react";
import { usePaystackPayment } from 'react-paystack'
import Cookie from 'js-cookie'
import $ from "jquery";
import { useSelector } from "react-redux";

const Checkout = () => {
  var totalPrice = 0;
  const [address, setAddress] = useState('')
  const [gps, setGps] = useState('')
  const [town, setTown] = useState('')
  const [amount, setAmount] = useState(0)

  const userSignIn = useSelector(state => state.userSignIn)
  const {userInfo} = userSignIn

  const coupon = useSelector(state => state.coupon);
  const { couponDetails, couponLoading, error } = coupon

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart

  const pConfig = {
    email: `${userInfo.email}`,
    amount: amount * 100,
    currency: 'GHS',
    publicKey: 'SOMETHING_SECRET' 
  }

  const onSuccess = (reference) =>{
    if(reference.status == 'success'){
      console.log('Payed')
    }
    Cookie.remove('cartItems')
    Cookie.remove('couponDetails')
    console.log(reference)
  }

  const onClosed = () =>{
    console.log('closed')
  }

  const initializePayment = usePaystackPayment(pConfig)

  useEffect(() => {
    document.title = "Checkout | Limpupa";

    // showlogin toggle
    $("#showlogin").on("click", function () {
      $("#checkout-login").slideToggle(900);
    });
    // showlogin toggle
    $("#showcoupon").on("click", function () {
      $("#checkout_coupon").slideToggle(900);
    });
  }, []);

  return (
    <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Checkout</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="checkout-area pt-60 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {
                userInfo ? (
                  ''
                )
                :
                (
                  <div className="coupon-accordion">
                    <h3>
                        Returning customer?{" "}
                        <span id="showlogin">Click here to login</span>
                      </h3>
                      <div id="checkout-login" className="coupon-content">
                        <div className="coupon-info">
                          <p className="coupon-text">
                            Quisque gravida turpis sit amet nulla posuere lacinia.
                            Cras sed est sit amet ipsum luctus.
                          </p>
                          <form action="#">
                            <p className="form-row-first">
                              <label>
                                Username or email <span className="required">*</span>
                              </label>
                              <input type="text" />
                            </p>
                            <p className="form-row-last">
                              <label>
                                Password <span className="required">*</span>
                              </label>
                              <input type="text" />
                            </p>
                            <p className="form-row">
                              <input value="Login" type="submit" />
                              <label>
                                <input type="checkbox" />
                                Remember me
                              </label>
                            </p>
                            <p className="lost-password">
                              <a href="#">Lost your password?</a>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                )
              }

              {
                (couponDetails.length !=0 ) ? (
                  ''
                )
                : 
                (
                  <div className="coupon-accordion">
                    <h3>
                      Have a coupon?{" "}
                      <span id="showcoupon">Click here to enter your code</span>
                    </h3>
                    <div id="checkout_coupon" className="coupon-checkout-content">
                      <div className="coupon-info">
                        <form action="#">
                          <p className="checkout-coupon">
                            <input placeholder="Coupon code" type="text" />
                            <input value="Apply Coupon" type="submit" />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              }
  
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <form action="#">
                <div className="checkbox-form">
                  <h3>Please Enter Your Address</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" placeholder='Cantonments' onChange={(e) => {setTown(e.target.value)}} value={town} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input placeholder="Street address" type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          GPS Address: <span className="required">(Optional)</span>
                        </label>
                        <input
                          placeholder="eg: GS-233-223"
                          type="text"
                          onChange={(e) => setGps(e.target.value)} value={gps}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-12">
              <div className="your-order">
                <h3>Your order Summary</h3>
                <h5>Customer Name: <span style={{float: 'right', color: 'blue'}}>{userInfo.firstname + ' ' + userInfo.lastname}</span></h5> 
                <hr/>
                <h5>Phone: <span style={{float: 'right', color: 'blue'}}>{userInfo.phone}</span></h5>
                <hr/>
                <h5>Town/City: <span style={{float: 'right', color: 'blue'}}>{town}</span></h5>
                <hr/>
                <h5>Address: <span style={{float: 'right', color: 'blue'}}>{address}</span></h5>
                <hr/>
                <h5>GPS Address: <span style={{float: 'right', color: 'blue'}}>{gps}</span></h5>
                <hr/>

                <div className="your-order-table table-responsive mt-60">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="cart-product-name">Product</th>
                        <th className="cart-product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map(product =>{
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
                    {
                      (couponDetails.length != 0) ? (
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                              <span className="amount">GHS {totalPrice}.00</span>
                            </td>
                          </tr>
                          <tr className="cart-subtotal">
                            <th>Coupon Value</th>
                            <td>
                              <strong>
                                <span className="amount">- GHS {couponDetails.couponValue}.00</span>
                              </strong>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>Order Total</th>
                            <td>
                              <strong>
                                <span className="amount">GHS {totalPrice - couponDetails.couponValue}.00</span>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      )

                      :

                      (
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
                      )
                    }
                  </table>
                </div>
                Payment Method: <span style={{color: 'red'}}>(Tick to confirm payment with Paystack)</span>  
                <br/><br/> 
                {
                  (couponDetails.length == 0) ? (
                    <input type="checkbox" onChange={e => setAmount(totalPrice)} value={amount} id='checktopay'/>
                  )
                  :
                  (
                    <input type="checkbox" onChange={e => setAmount(totalPrice - couponDetails.couponValue)} value={amount} id='checktopay'/>
                  )
                }
                <div className="payment-method">
                  <div className="payment-accordion">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="#payment-1">
                          <h5 className="panel-title">
                            <a
                              className=""
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                             <b> Paystack</b>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Make your payment directly into our bank account with Paystack. You can make payment with your card or Mobile Money.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="order-button-payment">
                      <input value="Place order" type="button" onClick={()=>{
                        if(document.getElementById('checktopay').checked){

                          if(town != '' && address != ''){
                            initializePayment(onSuccess, onClosed)
                          }else{
                            alert('Enter your address details to proceed')
                          }
                          
                        }else{
                          alert('Check the payment method in order to initialize payment')
                        }
                        
                      }}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
