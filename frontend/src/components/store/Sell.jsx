import React, {useEffect} from 'react'
import SellerImg from '../../images/seller/seller1.png'

const Sell = () => {
    useEffect(() => {
        document.title = "Sell | Limpupa"
    }, []);

    return (
        <div>
            <div className="container">  
                    <center><img src={SellerImg} alt="" style={{width: "70%"}}/></center>
                    <span style={{fontSize: "100px"}}>Sell on <span style={{color: "#fed700"}}><b>Limpupa</b></span></span>
                    <br/>
                    <a href="/sign_up" className="btn btn-warning" style={{marginBottom: '100px'}}>Sign Up</a>
            </div>
        </div>
    )
}

export default Sell
