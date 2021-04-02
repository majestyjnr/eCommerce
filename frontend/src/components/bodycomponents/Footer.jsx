import React from "react";
import {Link} from 'react-router-dom'

import shippingIcon1 from '../../images/shipping-icon/delivery.png'
import shippingIcon2 from '../../images/shipping-icon/2.png'
import shippingIcon3 from '../../images/shipping-icon/3.png'
import shippingIcon4 from '../../images/shipping-icon/4.png'
import Logo from '../../images/menu/logo/1.jpg'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-static-top">
        <div className="container">
          <div className="footer-shipping pt-60 pb-55 pb-xs-25">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src={shippingIcon1} alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Free Delivery</h2>
                    <p>And free returns. See checkout for delivery dates.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src={shippingIcon2} alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Safe Payment</h2>
                    <p>
                      Pay with the world's most popular and secure payment
                      methods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src={shippingIcon3} alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Shop with Confidence</h2>
                    <p>
                      Our Buyer Protection covers your purchase from click to
                      delivery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src={shippingIcon4} alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>24/7 Help Center</h2>
                    <p>Have a question? Contact our customer service representatives now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-static-middle">
        <div className="container">
          <div className="footer-logo-wrap pt-50 pb-35">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo">
                  <img src={Logo} alt="Footer Logo" />
                  <p className="info">
                    An online mall that caters for all your needs within a matter of seconds.
                  </p>
                </div>
                <ul className="des">
                  <li>
                    <span>Address: </span>
                    Accra, Ghana.
                  </li>
                  <li>
                    <span>Phone: </span>
                    <a href="#">(+233) 544 174 142</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a href="mailto://info@limpupa.com">
                      info@limpupa.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Product</h3>
                  <ul>
                    <li>
                      <a href="#">Prices drop</a>
                    </li>
                    <li>
                      <a href="#">New products</a>
                    </li>
                    <li>
                      <a href="#">Best sales</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Our company</h3>
                  <ul>
                    <li>
                    <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                    <Link to="/delivery">Delivery</Link>
                    </li>
                    <li>
                    <Link to="/legal">Legal Notice</Link>
                    </li>
                    <li>
                    <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-block">
                  <h3 className="footer-block-title">Follow Us</h3>
                  <ul className="social-link">
                    <li className="twitter">
                      <a
                        href="https://twitter.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="rss">
                      <a
                        href="https://rss.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="RSS"
                      >
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                    <li className="google-plus">
                      <a
                        href="https://www.plus.google.com/discover"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Google Plus"
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a
                        href="https://www.youtube.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Youtube"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        href="https://www.instagram.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Instagram"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-newsletter">
                  <h4>Sign up to newsletter</h4>
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="footer-subscribe-form validate"
                    target="_blank"
                    novalidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div
                        id="mc-form"
                        className="mc-form subscribe-form form-group"
                      >
                        <input
                          id="mc-email"
                          type="email"
                          autocomplete="off"
                          placeholder="Enter your email"
                        />
                        <button className="btn" id="mc-submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-static-bottom pt-55 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="#">Online Shopping</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">My Orders</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Most Populars</a>
                  </li>
                  <li>
                    <a href="#">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#">Special Products</a>
                  </li>
                  <li>
                    <a href="#">Manufacturers</a>
                  </li>
                  <li>
                    <a href="#">Our Stores</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Warantee</a>
                  </li>
                  <li>
                    <a href="#">Refunds</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Discount</a>
                  </li>
                  <li>
                    <a href="#">Refunds</a>
                  </li>
                  <li>
                    <a href="#">Policy Shipping</a>
                  </li>
                </ul>
              </div>

              <div className="copyright text-center">
                <a href="#">
                  <img src="../../images/payment/1.png" alt="" />
                </a>
              </div>

              <div className="copyright text-center pt-25">
                <span>
                  <a target="_blank" href="https://www.templateshub.net">
                    Limpupa Digital Store
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
