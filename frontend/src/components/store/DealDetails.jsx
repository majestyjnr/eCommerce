import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dealProductDetail } from '../../actions/productActions';



const DealDetails = (props) => {
    const [qty, setQty] = useState(1)
    const productDetail = useSelector(state => state.productDetail)
    const { product, loading, error } = productDetail;
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dealProductDetail(props.match.params.id))
    }, [])

    const addToCart = () =>{
        props.history.push("/shopping-cart/" + props.match.params.id + "?qty=" + qty)
    }

    return loading ? 
    <div>
        <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Product Details</li>
                    </ul>
                </div>
            </div>
        </div> 
        <div className="text-center mt-60 mb-60"> 
            <h2>Loading...</h2>
        </div>
    </div>

    : error ? 
    
    <div>
        <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Product Details</li>
                    </ul>
                </div>
            </div>
        </div> 
        <div className="text-center mt-60 mb-60"> 
            <h2>{error}</h2>
        </div>
    </div>

    : 
    
    ( 
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Product Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-wraper">
                <div className="container">
                {
                            product.map(item => {
                                return(
                                    <div className="row single-product-area">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="product-details-left">
                                                <div className="product-details-images slider-navigation-1">
                                                    <div className="lg-image">
                                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/1.jpg" data-gall="myGallery">
                                                            <img src={`http://localhost:2500/productimages/` + item.productImage} className="mt-30" alt="product image"/>
                                                        </a>
                                                    </div>
                                                    {/* <div className="lg-image">
                                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/2.jpg" data-gall="myGallery">
                                                            <img src="images/product/large-size/2.jpg" alt="product image"/>
                                                        </a>
                                                    </div>
                                                    <div className="lg-image">
                                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/3.jpg" data-gall="myGallery">
                                                            <img src="images/product/large-size/3.jpg" alt="product image"/>
                                                        </a>
                                                    </div>
                                                    <div className="lg-image">
                                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/4.jpg" data-gall="myGallery">
                                                            <img src="images/product/large-size/4.jpg" alt="product image"/>
                                                        </a>
                                                    </div>
                                                    <div className="lg-image">
                                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/5.jpg" data-gall="myGallery">
                                                            <img src="images/product/large-size/5.jpg" alt="product image"/>
                                                        </a>
                                                    </div>
                                                    <div className="lg-image">
                                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/6.jpg" data-gall="myGallery">
                                                            <img src="images/product/large-size/6.jpg" alt="product image"/>
                                                        </a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                        
                                    <div className="col-lg-7 col-md-6">
                                    <div className="product-details-view-content pt-60">
                                        <div className="product-info">
                                            <h2>{ item.productName }</h2>
                                            <span class="product-details-ref">From: {item.productBrand}</span>
                                            <div className="rating-box pt-20">
                                                <ul className="rating rating-with-review-item">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="review-item"><a href="#">Read Review</a></li>
                                                    <li className="review-item"><a href="#">Write Review</a></li>
                                                </ul>
                                            </div>
                                            <div className="price-box pt-20">
                                                <span className="new-price new-price-2">GHS { item.productPrice }.00</span>
                                            </div>
                                            <div className="product-desc">
                                                <p>
                                                    <span>
                                                        { item.productDescription }
                                                    </span>
                                                </p>
                                            </div>
                                            {/* <div className="product-variants">
                                                <div className="produt-variants-size">
                                                    <label>Dimension</label>
                                                    <select className="nice-select">
                                                        <option value="1" title="S" selected="selected">40x60cm</option>
                                                        <option value="2" title="M">60x90cm</option>
                                                        <option value="3" title="L">80x120cm</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            <div className="single-add-to-cart">
                                                <form action="#" className="cart-quantity">
                                                    <div className="quantity">
                                                        <label>Quantity:</label>
                                                        <div className="cart-plus-minus">
                                                            <select className="nice-select" value={qty} onChange={(e)=> {setQty(e.target.value)}}>
                                                                {[...Array(item.countInStock).keys()].map(x =>
                                                                    <option value={x + 1} key={x + 1}>{x + 1}</option>
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <button onClick={addToCart} className="add-to-cart ml-60" type="submit">Add to cart</button>
                                                </form>
                                            </div>
                                            <div className="product-additional-info pt-25">
                                                <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a>
                                                <div className="product-social-sharing pt-25">
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="fa fa-facebook"></i>Facebook</a></li>
                                                        <li className="twitter"><a href="#"><i className="fa fa-twitter"></i>Twitter</a></li>
                                                        <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i>Google +</a></li>
                                                        <li className="instagram"><a href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="block-reassurance">
                                                <ul>
                                                    <li>
                                                        <div className="reassurance-item">
                                                            <div className="reassurance-icon">
                                                                <i className="fa fa-check-square-o"></i>
                                                            </div>
                                                            <p>Security policy (edit with Customer reassurance module)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="reassurance-item">
                                                            <div className="reassurance-icon">
                                                                <i className="fa fa-truck"></i>
                                                            </div>
                                                            <p>Delivery policy (edit with Customer reassurance module)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="reassurance-item">
                                                            <div className="reassurance-icon">
                                                                <i className="fa fa-exchange"></i>
                                                            </div>
                                                            <p> Return policy (edit with Customer reassurance module)</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                    </div>
                        )
                    })
                }
                </div>
            </div>


        {
            product.map(item => {
                return(

            <div className="product-area pt-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab">
                                <ul className="nav li-product-menu">
                                   <li><a className="active" data-toggle="tab" href="#description"><span>Description</span></a></li>
                                   <li><a data-toggle="tab" href="#product-details"><span>Product Details</span></a></li>
                                   <li><a data-toggle="tab" href="#reviews"><span>Reviews</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="description" className="tab-pane active show" role="tabpanel">
                            <div className="product-description">
                                <span>{item.productDescription}</span>
                            </div>
                        </div>
                        <div id="product-details" className="tab-pane" role="tabpanel">
                            <div className="product-details-manufacturer">
                                <a href="#">
                                    <img src={`http://localhost:2500/todaysdeals/` + item.productImage} alt="Product Manufacturer Image"/>
                                </a>
                                <p><span>Reference</span> demo_7</p>
                                <p><span>Reference</span> demo_7</p>
                            </div>
                        </div>
                        <div id="reviews" className="tab-pane" role="tabpanel">
                            <div className="product-reviews">
                                <div className="product-details-comment-block">
                                    <div className="comment-review">
                                        <span>Grade</span>
                                        <ul className="rating">
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>
                                    <div className="comment-author-infos pt-25">
                                        <span>HTML 5</span>
                                        <em>01-12-18</em>
                                    </div>
                                    <div className="comment-details">
                                        <h4 className="title-block">Demo</h4>
                                        <p>Plaza</p>
                                    </div>
                                    <div className="review-btn">
                                        <a className="review-links" href="#" data-toggle="modal" data-target="#mymodal">Write Your Review!</a>
                                    </div>
                            
                                    <div className="modal fade modal-wrapper" id="mymodal" >
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <h3 className="review-page-title">Write Your Review</h3>
                                                    <div className="modal-inner-area row">
                                                        <div className="col-lg-6">
                                                           <div className="li-review-product">
                                                               <img src={`http://localhost:2500/todaysdeals/` + item.productImage} style={{width: '70%'} } alt="Li's Product"/>
                                                               <div className="li-review-product-desc">
                                                                   <p className="li-product-name">{ item.productName }</p>
                                                                   <p>
                                                                       <span>{ item.productDescription }</span>
                                                                   </p>
                                                               </div>
                                                           </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="li-review-content">
                                                
                                                                <div className="feedback-area">
                                                                    <div className="feedback">
                                                                        <h3 className="feedback-title">Your Feedback</h3>
                                                                        <form action="#">
                                                                            <p className="your-opinion">
                                                                                <label>Your Rating</label>
                                                                                <span>
                                                                                    <select className="star-rating">
                                                                                      <option value="1">1</option>
                                                                                      <option value="2">2</option>
                                                                                      <option value="3">3</option>
                                                                                      <option value="4">4</option>
                                                                                      <option value="5">5</option>
                                                                                    </select>
                                                                                </span>
                                                                            </p>
                                                                            <p className="feedback-form">
                                                                                <label for="feedback">Your Review</label>
                                                                                <textarea id="feedback" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                                                            </p>
                                                                            <div className="feedback-input">
                                                                                <p className="feedback-form-author">
                                                                                    <label for="author">Name<span className="required">*</span>
                                                                                    </label>
                                                                                    <input id="author" name="author" value="" size="30" aria-required="true" type="text"/>
                                                                                </p>
                                                                                <p className="feedback-form-author feedback-form-email">
                                                                                    <label for="email">Email<span className="required">*</span>
                                                                                    </label>
                                                                                    <input id="email" name="email" value="" size="30" aria-required="true" type="text"/>
                                                                                    <span className="required"><sub>*</sub> Required fields</span>
                                                                                </p>
                                                                                <div className="feedback-btn pb-15">
                                                                                    <a href="#" className="close" data-dismiss="modal" aria-label="Close">Close</a>
                                                                                    <a href="#">Submit</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
            })
        }
            <section className="product-area li-laptop-product pt-30 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>15 other products in the same category:</span>
                                </h2>
                            </div>
                            <div className="row">
                                <div className="product-active owl-carousel">
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="product-details.html">Graphic Corner</a>
                                                        </h5>
                                                        <div className="rating-box">
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#" onClick={addToCart}>Add to cart</a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/2.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="product-details.html">Studio Design</a>
                                                        </h5>
                                                        <div className="rating-box">
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/3.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="product-details.html">Graphic Corner</a>
                                                        </h5>
                                                        <div className="rating-box">
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#" onClick={addToCart}>Add to cart</a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/4.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="product-details.html">Studio Design</a>
                                                        </h5>
                                                        <div className="rating-box">
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#" onClick={addToCart}>Add to cart</a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="product-details.html">Graphic Corner</a>
                                                        </h5>
                                                        <div className="rating-box">
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/6.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="product-details.html">Studio Design</a>
                                                        </h5>
                                                        <div className="rating-box">
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DealDetails
