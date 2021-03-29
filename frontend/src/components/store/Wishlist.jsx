import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../actions/wishListActions';

const Wishlist = (props) => {

    const wishList =  useSelector(state => state.wishList)
    const {wishListItems} = wishList

    const dispatch = useDispatch()
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
                                                            <td className="li-product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                                            <td width='200' align="center" className="li-product-thumbnail"><a href="#"><img src={`http://localhost:2500/todaysdeals/` + item.productImage} style={{display: 'block'}} width="60%" alt="" /></a></td>
                                                            <td className="li-product-name"><a href="#">{item.productName}</a></td>
                                                            <td className="li-product-price"><span className="amount">GHS {item.productPrice}.00</span></td>
                                                            <td className="li-product-stock-status">{item.countInStock >= 1 ? <span className="in-stock">In Stock</span> : <span className="out-stock">Out of Stock</span>}</td>
                                                            <td className="li-product-add-cart"><a href="#">add to cart</a></td>
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
