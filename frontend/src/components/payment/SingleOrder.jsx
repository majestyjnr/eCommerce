import React from 'react'

const SingleOrder = (props) => {

    const 
    return (
        <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Order Details</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="checkout-area pt-60 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
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

export default SingleOrder
