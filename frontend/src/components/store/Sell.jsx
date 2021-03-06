import React, {useEffect} from 'react'

const Sell = () => {
    useEffect(() => {
        document.title = "Sell | Limpupa"
    }, []);

    return (
        <div>
            <div className="container">
    
                    <span style={{fontSize: "100px"}}>Sell on <span style={{color: "#fed700"}}><b>Limpupa</b></span></span>
                    <br/>
                    <button className="btn btn-warning" style={{marginBottom: '100px'}}>Sign Up</button>
            </div>
        </div>
    )
}

export default Sell
