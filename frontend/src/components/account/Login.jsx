import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { signIn } from '../../actions/userActions';

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userSignIn = useSelector(state =>state.userSignIn)
    const {loading, userInfo, error} = userSignIn
    const dispatch = useDispatch()



    useEffect(() => {        

        if(userInfo){
            props.history.push('/')
        }
        document.title = 'Login | Limpupa'
    }, [userInfo]);

    const submitHandler = (e) =>{
        e.preventDefault();

        dispatch(signIn(email, password))
    }
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Login</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form onSubmit={submitHandler} >
                                <div className="login-form mt-30">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input className="mb-0" type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="Email Address"/>
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} placeholder="Password"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me"/>
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="#"> Forgotten password?</a>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="register-button mt-0" type="submit">Login</button>
                                        </div>
                                        <div className="col-md-12 mt-20 mb-20 text-center text-md-center">
                                            Not having an account? <Link to="/account/register"> Sign Up</Link>
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
