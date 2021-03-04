import React, {useEffect} from 'react'
import '../../style.css'
import '../../css/bootstrap.min.css'
import '../../css/font-awesome.min.css'
import '../../css/fontawesome-stars.css'
import '../../css/helper.css'
import '../../css/jquery-ui.min.css'
import '../../css/magnific-popup.css'
import '../../css/material-design-iconic-font.min.css'
import '../../css/meanmenu.css'
import '../../css/nice-select.css'
import '../../css/owl.carousel.min.css'
import '../../css/owl.video.play.png'
import '../../css/responsive.css'
import '../../css/slick.css'
import '../../css/venobox.css'

const Login = () => {
    useEffect(() => {
        document.title = 'Login | Limpupa'
    }, []);
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Login Register</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form action="#" >
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input className="mb-0" type="email" placeholder="Email Address"/>
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" placeholder="Password"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me"/>
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="#"> Forgotten pasward?</a>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="register-button mt-0">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Register</h4>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>First Name</label>
                                            <input className="mb-0" type="text" placeholder="First Name"/>
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Last Name</label>
                                            <input className="mb-0" type="text" placeholder="Last Name"/>
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label>Email Address*</label>
                                            <input className="mb-0" type="email" placeholder="Email Address"/>
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" placeholder="Password"/>
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Confirm Password</label>
                                            <input className="mb-0" type="password" placeholder="Confirm Password"/>
                                        </div>
                                        <div className="col-12">
                                            <button className="register-button mt-0">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
