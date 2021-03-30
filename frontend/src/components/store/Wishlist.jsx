import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeItemFromWishList } from '../../actions/wishListActions';
import {Link} from 'react-router-dom'


const Wishlist = (props) => {
    const [qty, setQty] = useState(1)
    const wishList =  useSelector(state => state.wishList)
    const {wishListItems} = wishList

    const dispatch = useDispatch()

    const removeFromCart = (productID) =>{
        dispatch(removeItemFromWishList(productID))
    }

    const addToCart = () =>{
        props.history.push("/shopping-cart/" + props.match.params.id + "?qty=" + qty)
    }

    useEffect(() => {
        dispatch(addToWishList(props.match.params.id))
        document.title = 'Wishlist | Limpupa'
    }, []);
    
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Wishlist</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="wishlist-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="li-product-remove">remove</th>
                                                <th className="li-product-thumbnail">images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="li-product-price">Unit Price</th>
                                                <th className="li-product-stock-status">Stock Status</th>
                                                <th className="li-product-add-cart">add to cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                wishListItems.length == 0  ?
                                                <div className="text-center mt-60 mb-60">
                                                    <h1> No item added to wishlist</h1>
                                                </div>

                                                :

                                                wishListItems.map(item => {
                                                    return(
                                                        <tr>
                                                            <td className="li-product-remove"><button type="button" className="btn btn-danger" onClick={()=> removeFromCart(item._id)}><i className="fa fa-times"></i></button></td>
                                                            <td width='200' align="center" className="li-product-thumbnail"><Link to={"/p/" + item._id}><img src={`http://localhost:2500/todaysdeals/` + item.productImage} style={{display: 'block'}} width="60%" alt="" /></Link></td>
                                                            <td className="li-product-name"><Link to={"/p/" + item._id}>{item.productName}</Link></td>
                                                            <td className="li-product-price"><span className="amount">GHS {item.productPrice}.00</span></td>
                                                            <td className="li-product-stock-status">{item.countInStock >= 1 ? <span className="in-stock">In Stock</span> : <span className="out-stock">Out of Stock</span>}</td>
                                                            <td className="li-product-add-cart"><button onClick={addToCart} className="add-to-cart ml-60" type="submit">Add to cart</button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
