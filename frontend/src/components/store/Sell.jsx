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
                    <span style={{fontSize: "100px"}}>Sell on <span style={{color: "#fed700"}}><b>Limupa</b></span></span>
                    <br/>
                    <a href="http://localhost:2500" target='_blank' className="btn btn-warning" style={{marginBottom: '100px'}}>Sign Up</a>
            </div>
        </div>
    )
}

export default Sell
