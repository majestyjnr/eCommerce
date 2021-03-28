import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import Logo from '../../images/menu/logo/1.jpg'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart

    const userSignIn = useSelector(state => state.userSignIn)
    const {userInfo} = userSignIn

    const dispatch = useDispatch()
    useEffect(() => {

        $('.ht-setting-trigger, .ht-currency-trigger, .ht-language-trigger, .hm-minicart-trigger, .cw-sub-menu').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('is-active');
            $(this).siblings('.ht-setting, .ht-currency, .ht-language, .minicart, .cw-sub-menu li').slideToggle();
        });
        $('.ht-setting-trigger.is-active').siblings('.catmenu-body').slideDown();
    }, [])
   
    return (
        <header>
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Begin Header Top Left Area --> */}
                            <div className="col-lg-3 col-md-4">
                                <div className="header-top-left">
                                    <ul className="phone-wrap">
                                        <li><span>Telephone Enquiry:</span><a href="#">(+233) 544 174 142</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Header Top Left Area End Here --> */}
                            {/* <!-- Begin Header Top Right Area --> */}
                            <div className="col-lg-9 col-md-8">
                                <div className="header-top-right">
                                    <ul className="ht-menu">
                                        {/* <!-- Begin Setting Area --> */}
                                        <li>
                                            <div className="ht-setting-trigger">{userInfo? <span>{userInfo.email}</span> : <span>Log In</span> }</div>
                                            <div className="setting ht-setting">
                                                <ul className="ht-setting-list">
                                                    {
                                                        userInfo ? <li><Link to="/account/">My Account</Link></li> : null
                                                    }
                                                    {
                                                        userInfo ?  <li><Link to="/account/logout">Log Out</Link></li> : <li><Link to="/account/login">Log In</Link></li>
                                                    }
                                                    
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Setting Area End Here --> */}
                                        {/* <!-- Begin Currency Area --> */}
                                        <li>
                                            <span className="currency-selector-wrapper">Currency : GHS</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Header Top Right Area End Here --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Header Top Area End Here --> */}
                {/* <!-- Begin Header Middle Area --> */}
                <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Begin Header Logo Area --> */}
                            <div className="col-lg-3">
                                <div className="logo pb-sm-30 pb-xs-30">
                                    <Link to="/">
                                        <img src={Logo} alt=""/>
                                    </Link>
                                </div>
                            </div>
                            {/* <!-- Header Logo Area End Here --> */}
                            {/* <!-- Begin Header Middle Right Area --> */}
                            <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                                <form action="#" className="hm-searchbox">
                                    <select className="nice-select select-search-category">
                                        <option value="0">All</option>
                                        <option value="10">Laptops</option>
                                        <option value="17">- -  Prime Video</option>
                                        <option value="20">- - - -  All Videos</option>
                                        <option value="21">- - - -  Blouses</option>
                                        <option value="22">- - - -  Evening Dresses</option>
                                        <option value="23">- - - -  Summer Dresses</option>
                                        <option value="24">- - - -  T-shirts</option>
                                        <option value="25">- - - -  Rent or Buy</option>
                                        <option value="26">- - - -  Your Watchlist</option>
                                        <option value="27">- - - -  Watch Anywhere</option>
                                        <option value="28">- - - -  Getting Started</option>
                                        <option value="18">- - - -  Computers</option>
                                        <option value="29">- - - -  More to Explore</option>
                                        <option value="30">- - - -  TV &amp; Video</option>
                                        <option value="31">- - - -  Audio &amp; Theater</option>
                                        <option value="32">- - - -  Camera, Photo </option>
                                        <option value="33">- - - -  Cell Phones</option>
                                        <option value="34">- - - -  Headphones</option>
                                        <option value="35">- - - -  Video Games</option>
                                        <option value="36">- - - -  Wireless Speakers</option>
                                        <option value="19">- - - -  Electronics</option>
                                        <option value="37">- - - -  Amazon Home</option>
                                        <option value="38">- - - -  Kitchen &amp; Dining</option>
                                        <option value="39">- - - -  Furniture</option>
                                        <option value="40">- - - -  Bed &amp; Bath</option>
                                        <option value="41">- - - -  Appliances</option>
                                        <option value="11">TV &amp; Audio</option>
                                        <option value="42">- -  Chamcham</option>
                                        <option value="45">- - - -  Office</option>
                                        <option value="47">- - - -  Gaming</option>
                                        <option value="48">- - - -  Chromebook</option>
                                        <option value="49">- - - -  Refurbished</option>
                                        <option value="50">- - - -  Touchscreen</option>
                                        <option value="51">- - - -  Ultrabooks</option>
                                        <option value="52">- - - -  Blouses</option>
                                        <option value="43">- -  Sanai</option>
                                        <option value="53">- - - -  Hard Drives</option>
                                        <option value="54">- - - -  Graphic Cards</option>
                                        <option value="55">- - - -  Processors (CPU)</option>
                                        <option value="56">- - - -  Memory</option>
                                        <option value="57">- - - -  Motherboards</option>
                                        <option value="58">- - - -  Fans &amp; Cooling</option>
                                        <option value="59">- - - -  CD/DVD Drives</option>
                                        <option value="44">- -  Meito</option>
                                        <option value="60">- - - -  Sound Cards</option>
                                        <option value="61">- - - -  Cases &amp; Towers</option>
                                        <option value="62">- - - -  Casual Dresses</option>
                                        <option value="63">- - - -  Evening Dresses</option>
                                        <option value="64">- - - -  T-shirts</option>
                                        <option value="65">- - - -  Tops</option>
                                        <option value="12">Smartphone</option>
                                        <option value="66">- -  Camera Accessories</option>
                                        <option value="68">- - - -  Octa Core</option>
                                        <option value="69">- - - -  Quad Core</option>
                                        <option value="70">- - - -  Dual Core</option>
                                        <option value="71">- - - -  7.0 Screen</option>
                                        <option value="72">- - - -  9.0 Screen</option>
                                        <option value="73">- - - -  Bags &amp; Cases</option>
                                        <option value="67">- -  XailStation</option>
                                        <option value="74">- - - -  Batteries</option>
                                        <option value="75">- - - -  Microphones</option>
                                        <option value="76">- - - -  Stabilizers</option>
                                        <option value="77">- - - -  Video Tapes</option>
                                        <option value="78">- - - -  Memory Card Readers</option>
                                        <option value="79">- - - -  Tripods</option>
                                        <option value="13">Cameras</option>
                                        <option value="14">headphone</option>
                                        <option value="15">Smartwatch</option>
                                        <option value="16">Accessories</option>
                                    </select>
                                    <input type="text" placeholder="Enter your search key ..." />
                                    <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                                </form>
                                {/* <!-- Header Middle Searchbox Area End Here --> */}
                                {/* <!-- Begin Header Middle Right Area --> */}
                                <div className="header-middle-right">
                                    <ul className="hm-menu">
                                        {/* <!-- Begin Header Middle Wishlist Area --> */}
                                        <li className="hm-wishlist">
                                            <Link to="/wishlist">
                                                <span className="cart-item-count wishlist-item-count">0</span>
                                                <i className="fa fa-heart-o"></i>
                                            </Link>
                                        </li>
                                        {/* <!-- Header Middle Wishlist Area End Here --> */}
                                        {/* <!-- Begin Header Mini Cart Area --> */}
                                        <li className="hm-minicart">
                                            <div className='hm-minicart-trigger'>
                                                <span className="item-icon"></span>
                                                <span className="item-text">£80.00
                                                    <span className="cart-item-count">{cartItems.length}</span>
                                                </span>
                                            </div>
                                            <span></span>
                                            <div className="minicart">
                                                <ul className="minicart-product-list">
                                                    <li>
                                                        <a href="single-product.html" className="minicart-product-image">
                                                            <img src="images/product/small-size/5.jpg" alt="cart products" />
                                                        </a>
                                                        <div className="minicart-product-details">
                                                            <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                            <span>£40 x 1</span>
                                                        </div>
                                                        <button className="close" title="Remove">
                                                            <i className="fa fa-close"></i>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="single-product.html" className="minicart-product-image">
                                                            <img src="images/product/small-size/6.jpg" alt="cart products" />
                                                        </a>
                                                        <div className="minicart-product-details">
                                                            <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                            <span>£40 x 1</span>
                                                        </div>
                                                        <button className="close" title="Remove">
                                                            <i className="fa fa-close"></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                                <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                                                <div className="minicart-button">
                                                    <Link to="/shopping-cart" className="li-button li-button-fullwidth li-button-dark">
                                                        <span>View Full Cart</span>
                                                    </Link>
                                                    <Link to="/checkout" className="li-button li-button-fullwidth">
                                                        <span>Checkout</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <!-- Header Mini Cart Area End Here --> */}
                                    </ul>
                                </div>
                                {/* <!-- Header Middle Right Area End Here --> */}
                            </div>
                            {/* <!-- Header Middle Right Area End Here --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Header Middle Area End Here --> */}
                {/* <!-- Begin Header Bottom Area --> */}
                <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <!-- Begin Header Bottom Menu Area --> */}
                                <div className="hb-menu">
                                    <nav>
                                        <ul>
                                            <li className="megamenu-holder"><Link to={'/'}>All</Link>
                                                <ul className="megamenu hb-megamenu">
                                                    <li><a href="#">Electronics</a>
                                                        <ul>
                                                            <li><Link to="/products">Blenders</Link></li>
                                                            <li><Link to="/products">Computers & Accessories</Link></li>
                                                            <li><Link to="/products">Electronic Stoves</Link></li>
                                                            <li><li><Link to="/products">Home Theatres/Speakers</Link></li></li>
                                                            <li><Link to="/products">Phones & Accessories</Link></li>
                                                            <li><li><Link to="/products">TV's</Link></li></li>
                                                            <li><Link to="/products">Other Electronics</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Clothing & Accessories</a>
                                                        <ul>
                                                        <li><li><Link to="/products">Men's Wear</Link></li></li>
                                                        <li><li><Link to="/products">Women's Wear</Link></li></li>
                                                        <li><li><Link to="/products">Kid's Wear</Link></li></li>
                                                        <li><li><Link to="/products">Perfumes</Link></li></li>
                                                        <li><li><Link to="/products">Watches</Link></li></li>
                                                        <li><li><Link to="/products">Shoes</Link></li></li>
                                                        <li><li><Link to="/products">Jewelry</Link></li></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Accessories</a>
                                                        <ul>
                                                            <li><a href="single-product.html">Single Product</a></li>
                                                            <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                                            <li><a href="single-product-group.html">Single Product Group</a></li>
                                                            <li><a href="single-product-normal.html">Single Product Normal</a></li>
                                                            <li><a href="single-product-affiliate.html">Single Product Affiliate</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* <li><Link to="/about-us">About Us</Link></li> */}
                                            <li><Link to="/today's-deals">Today's Deals</Link></li>
                                            <li><Link to="/sell">Sell</Link></li>
                                            <li><Link to="/contact-us">Customer Service</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <!-- Header Bottom Menu Area End Here --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Header Bottom Area End Here --> */}
                {/* <!-- Begin Mobile Menu Area --> */}
                <div className="mobile-menu-area d-lg-none d-xl-none col-12">
                    <div className="container">
                        <div className="row">
                            <div className="mobile-menu">
                            </div>
                        </div>
                    </div>
                </div>
            </header>

    )
}

export default Navbar
