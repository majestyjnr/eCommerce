import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    useEffect(() => {
        document.title = 'Register | Limpupa'
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

        axios.post('http://localhost:9000/api/register-user', newUser).then((response) => console.log(response.data));
        
        console.log(newUser)
    }

    
    return (
        <div>
        <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Register</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="page-section mb-60">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                        <form onSubmit={registerUser} >
                            <div className="login-form mt-60">
                                <h4 className="login-title">Register</h4>
                                <div className="row">
                                    <div className="col-md-6 col-12 mb-20">
                                        <label>First Name</label>
                                        <input className="mb-0" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" required/>
                                    </div>
                                    <div className="col-md-6 col-12 mb-20">
                                        <label>Last Name</label>
                                        <input className="mb-0" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" required/>
                                    </div>
                                    <div className="col-md-12 mb-20">
                                        <label>Email Address*</label>
                                        <input className="mb-0" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required/>
                                    </div>
                                    <div className="col-md-12 mb-20">
                                        <label>Phone*</label>
                                        <input className="mb-0" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required/>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <label>Password*</label>
                                        <input className="mb-0" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <label>Confirm Password*</label>
                                        <input className="mb-0" type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="Confirm Password" required/>
                                    </div>
                                    <div className="col-12">
                                        <button className="register-button mt-0" type='submit' >Register</button>
                                    </div>
                                    <div className="col-md-12 mt-20 mb-20 text-center text-md-center">
                                            Already having an account? <Link to="/account/login"> Log In</Link>
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

export default Register
