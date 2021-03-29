import React, { useEffect, useState } from 'react'
import axios from 'axios'
import $ from 'jquery'

import AccountImage from '../../images/account.jpg'
import { useSelector } from 'react-redux'

const Account = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const userSignIn = useSelector(state => state.userSignIn)
    const {userInfo} = userSignIn

    useEffect(() => {
        document.title = 'My Account | Limpupa'

        // showlogin toggle
		$('#showlogin').on('click', function() {
            $('#checkout-login').slideToggle(900);
        });

        // showlogin toggle
		$('#showcoupon').on('click', function() {
            $('#checkout_coupon').slideToggle(900);
        });

    }, []);

    function registerUser(e){
        e.preventDefault();
            const newUser = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                password: password
            }

        axios.post('http://localhost:9000/api/register-user', newUser).then((response) => {
            if(response.status == 200 || response.status == 201){
                window.location = '/account/'
            }
        });
        
        console.log(newUser)
    }

    return (
        <div>
        <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">My Account</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="checkout-area pt-60 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="coupon-accordion">
                <h3>
                  Want To Edit Your Account Details?{" "}
                  <span id="showlogin">Click here to Edit</span>
                </h3>
                <div id="checkout-login" className="coupon-content">
                  <div className="coupon-info">
                        <form onSubmit={registerUser} >
                            <div className="login-form mt-60">
                                <h4 className="login-title">Update Account Details</h4>
                                <div className="row">
                                    <div className="col-md-6 col-12 mb-20">
                                        <label>First Name</label>
                                        <input className="mb-0" type="text" value={userInfo.firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" required/>
                                    </div>
                                    <div className="col-md-6 col-12 mb-20">
                                        <label>Last Name</label>
                                        <input className="mb-0" type="text" value={userInfo.lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" required/>
                                    </div>
                                    <div className="col-md-12 mb-20">
                                        <label>Email Address*</label>
                                        <input className="mb-0" type="email" value={userInfo.email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required/>
                                    </div>
                                    <div className="col-md-12 mb-20">
                                        <label>Phone*</label>
                                        <input className="mb-0" type="number" value={userInfo.phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required/>
                                    </div>
                                    <div className="col-12">
                                        <button className="register-button mt-0 btn-block" type='submit' >Update Details</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                  </div>
                </div>
                <h3>
                  Want To Change Your Password?{" "}
                  <span id="showcoupon">Click here to change your password</span>
                </h3>
                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    <form action="#">
                      <p className="checkout-coupon">
                        <div className="col-md-6 mb-20">
                            <label>Old Password*</label>
                            <input className="mb-0" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="
                            Old Password" required/>
                        </div>
                        <div className="col-md-6 mb-20">
                            <label>New Password*</label>
                            <input className="mb-0" type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="New Password" required/>
                        </div>
                        <input value="Update Password" type="submit" />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
                <img src={AccountImage} alt="Account"/>
            </div>
            <div className="col-lg-6 col-12">
              <div className="your-order">
                <center><h3>My Account Details</h3></center> 
                <div className="your-order-table table-responsive">
                  <table className="table">
                    <tbody>
                      <tr className="cart_item">
                        <td className="cart-product-name">
                          Name
                        </td>
                        <td className="cart-product-total">
                          <span className="amount"><strong><h5>{userInfo.firstname + ' ' + userInfo.lastname}</h5></strong></span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="cart-product-name">
                          Email
                        </td>
                        <td className="cart-product-total">
                          <span className="amount"><strong><h5>{userInfo.email}</h5></strong></span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="cart-product-name">
                          Phone
                        </td>
                        <td className="cart-product-total">
                          <span className="amount"><strong><h5>{ userInfo.phone }</h5></strong></span>
                        </td>
                      </tr>
                    </tbody>
                    {/* <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          <span className="amount">£215.00</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td>
                          <strong>
                            <span className="amount">£215.00</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot> */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Account
