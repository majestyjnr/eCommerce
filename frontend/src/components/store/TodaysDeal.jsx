import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Banner from "../../images/bg-banner/2.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'

const TodaysDeal = () => {
    const [qty, setQty] = useState(1)
    const productList = useSelector(state => state.productList)
    const {products, loading, error} = productList;
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        document.title = "Today's Deals | Limpupa"

        // Dispatching the listProducts action
        dispatch(listProducts());
    
    }, []);

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
                            <li className="active">Today's Deals</li>
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
                            <li className="active">Today's Deals</li>
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
                            <li className="active">Today's Deals</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-wraper pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-1 order-lg-2">
                            <div className="single-banner shop-page-banner">
                                <a href="#">
                                    <img src={Banner} alt="Li's Static Banner"/>
                                </a>
                            </div>
                            <div className="shop-top-bar mt-30">
                                <div className="shop-bar-inner">
                                    <div className="product-view-mode">
                                        <ul className="nav shop-item-filter-list" role="tablist">
                                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i className="fa fa-th"></i></a></li>
                                            <li className="active" role="presentation"><a aria-selected="true" className="active show" data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i className="fa fa-th-list"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="toolbar-amount">
                                        <span>Showing 1 to 9 of 15</span>
                                    </div>
                                </div>
                                <div className="product-select-box">
                                    <div className="product-short">
                                        <p>Sort By:</p>
                                        <select className="nice-select">
                                            <option value="trending">Relevance</option>
                                            <option value="sales">Name (A - Z)</option>
                                            <option value="sales">Name (Z - A)</option>
                                            <option value="rating">Price (Low &gt; High)</option>
                                            <option value="date">Rating (Lowest)</option>
                                            <option value="price-asc">Model (A - Z)</option>
                                            <option value="price-asc">Model (Z - A)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-products-wrapper">
                                <div className="tab-content">
                                    <div id="grid-view" className="tab-pane fade" role="tabpanel">
                                        <div className="product-area shop-product-area">
                                            <div className="row">
                                                {
                                                    products.map(product => {
                                                        return(
                                                            <div className="col-lg-4 col-md-4 col-sm-6 mt-40">
                                                            <div className="single-product-wrap">
                                                                <div className="product-image">
                                                                    <Link to={`/p/` + product._id}>
                                                                        <img src={`http://localhost:2500/todaysdeals/` + product.productImage}
                                                                    alt="Product Image" />
                                                                    </Link>
                                                                    <span className="sticker">New</span>
                                                                </div>
                                                                <div className="product_desc">
                                                                    <div className="product_desc_info">
                                                                        <div className="product-review">
                                                                            <h5 className="manufacturer">
                                                                                <Link to='/product'>{product.productBrand}</Link>
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
                                                                        <h4><Link className="product_name" to={`/p/` + product._id}>{product.productName}</Link></h4>
                                                                        <div className="price-box">
                                                                            <span className="new-price">GHS {product.productPrice}.00</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="add-actions">
                                                                        <ul className="add-actions-link">
                                                                            <li className="add-cart active"><a href="shopping-cart.html">Add to cart</a></li>
                                                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )                                                            
                                                    })                     
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div id="list-view" className="tab-pane fade product-list-view active show" role="tabpanel">
                                        <div className="row">
                                            <div className="col">
                                                {
                                                    products.map(function(product){
                                                        return(
                                                                <div className="row product-layout-list">
                                                                <div className="col-lg-3 col-md-5 ">
                                                                    <div className="product-image">
                                                                        <Link to={`/p/` + product._id}>
                                                                            <img src={`http://localhost:2500/todaysdeals/` + product.productImage}
                                                                        alt="Product Image" />
                                                                        </Link>
                                                                        <span className="sticker">New</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-5 col-md-7">
                                                                    <div className="product_desc">
                                                                        <div className="product_desc_info">
                                                                            <div className="product-review">
                                                                                <h5 className="manufacturer">
                                                                                    <Link to='/product'>{product.productBrand}</Link>
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
                                                                            <h4><Link className="product_name" to={`/p/` + product._id}>{product.productName}</Link></h4>
                                                                            <div className="price-box">
                                                                                <span className="new-price">GHS {product.productPrice}.00</span>
                                                                            </div>
                                                                            <p>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Desig</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="shop-add-action mb-xs-30">
                                                                        <ul className="add-actions-link">
                                                                            <li className="add-cart"><a href="#" onClick={addToCart}>Add to cart</a></li>
                                                                            <li className="wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a></li>
                                                                            <li><a className="quick-view" data-toggle="modal" data-target="#exampleModalCenter" href="#"><i className="fa fa-eye"></i>Quick view</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                

                                                {/* <div className="row product-layout-list last-child">
                                                    <div className="col-lg-3 col-md-5 ">
                                                        <div className="product-image">
                                                            <Link to = '/product'>
                                                                <img src="images/product/large-size/1.jpg" 
                                                               alt="Product Image" />
                                                            </Link>
                                                            <span className="sticker">New</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-7">
                                                        <div className="product_desc">
                                                            <div className="product_desc_info">
                                                                <div className="product-review">
                                                                    <h5 className="manufacturer">
                                                                        <Link to='/product'>Graphic Corner</Link>
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
                                                                <h4><a className="product_name" href="single-product.html">Hummingbird printed t-shirt</a></h4>
                                                                <div className="price-box">
                                                                    <span className="new-price">$46.80</span>
                                                                </div>
                                                                <p>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Desig</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="shop-add-action">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart"><a href="#">Add to cart</a></li>
                                                                <li className="wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a></li>
                                                                <li><a className="quick-view" data-toggle="modal" data-target="#exampleModalCenter" href="#"><i className="fa fa-eye"></i>Quick view</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Showing 1-12 of 13 item(s)</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul className="pagination-box">
                                                    <li><a href="#" className="Previous"><i className="fa fa-chevron-left"></i> Previous</a>
                                                    </li>
                                                    <li className="active"><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li>
                                                      <a href="#" className="Next"> Next <i className="fa fa-chevron-right"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 order-2 order-lg-1">
                            <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
                                <div className="sidebar-title">
                                    <h2>Laptop</h2>
                                </div>

                                <div className="category-sub-menu">
                                    <ul>
                                        <li className="has-sub"><a href="# ">Prime Video</a>
                                            <ul>
                                                <li><a href="#">All Videos</a></li>
                                                <li><a href="#">Blouses</a></li>
                                                <li><a href="#">Evening Dresses</a></li>
                                                <li><a href="#">Summer Dresses</a></li>
                                                <li><a href="#">T-Rent or Buy</a></li>
                                                <li><a href="#">Your Watchlist</a></li>
                                                <li><a href="#">Watch Anywhere</a></li>
                                                <li><a href="#">Getting Started</a></li>  
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#">Computer</a>
                                            <ul>
                                                <li><a href="#">TV & Video</a></li>
                                                <li><a href="#">Audio & Theater</a></li>
                                                <li><a href="#">Camera, Photo</a></li>
                                                <li><a href="#">Cell Phones</a></li>
                                                <li><a href="#">Headphones</a></li>
                                                <li><a href="#">Video Games</a></li>
                                                <li><a href="#">Wireless Speakers</a></li> 
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#">Electronics</a>
                                            <ul>
                                                <li><a href="#">Amazon Home</a></li>
                                                <li><a href="#">Kitchen & Dining</a></li>
                                                <li><a href="#">Bed & Bath</a></li>
                                                <li><a href="#">Appliances</a></li>    
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-categores-box">
                                <div className="sidebar-title">
                                    <h2>Filter By</h2>
                                </div>
                                <button className="btn-clear-all mb-sm-30 mb-xs-30">Clear all</button>
                                <div className="filter-sub-area">
                                    <h5 className="filter-sub-titel">Brand</h5>
                                    <div className="categori-checkbox">
                                        <form action="#">
                                            <ul>
                                                <li><input type="checkbox" name="product-categori"/><a href="#">Prime Video (13)</a></li>
                                                <li><input type="checkbox" name="product-categori"/><a href="#">Computers (12)</a></li>
                                                <li><input type="checkbox" name="product-categori"/><a href="#">Electronics (11)</a></li>
                                            </ul>
                                        </form>
                                    </div>
                                 </div>
                                <div className="filter-sub-area pt-sm-10 pt-xs-10">
                                    <h5 className="filter-sub-titel">Categories</h5>
                                    <div className="categori-checkbox">
                                        <form action="#">
                                            <ul>
                                                <li><input type="checkbox" name="product-categori"/><a href="#">Graphic Corner (10)</a></li>
                                                <li><input type="checkbox" name="product-categori"/><a href="#"> Studio Design (6)</a></li>
                                            </ul>
                                        </form>
                                    </div>
                                 </div>
                                <div className="filter-sub-area pt-sm-10 pt-xs-10">
                                    <h5 className="filter-sub-titel">Size</h5>
                                    <div className="size-checkbox">
                                        <form action="#">
                                            <ul>
                                                <li><input type="checkbox" name="product-size"/><a href="#">S (3)</a></li>
                                                <li><input type="checkbox" name="product-size"/><a href="#">M (3)</a></li>
                                                <li><input type="checkbox" name="product-size"/><a href="#">L (3)</a></li>
                                                <li><input type="checkbox" name="product-size"/><a href="#">XL (3)</a></li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                                <div className="filter-sub-area pt-sm-10 pt-xs-10">
                                    <h5 className="filter-sub-titel">Color</h5>
                                    <div className="color-categoriy">
                                        <form action="#">
                                            <ul>
                                                <li><span className="white"></span><a href="#">White (1)</a></li>
                                                <li><span className="black"></span><a href="#">Black (1)</a></li>
                                                <li><span className="Orange"></span><a href="#">Orange (3) </a></li>
                                                <li><span className="Blue"></span><a href="#">Blue  (2) </a></li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                                <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
                                    <h5 className="filter-sub-titel">Dimension</h5>
                                    <div className="categori-checkbox">
                                        <form action="#">
                                            <ul>
                                                <li><input type="checkbox" name="product-categori"/><a href="#">40x60cm (6)</a></li>
                                                <li><input type="checkbox" name="product-categori"/><a href="#">60x90cm (6)</a></li>
                                                <li><input type="checkbox" name="product-categori"/><a href="#">80x120cm (6)</a></li>
                                            </ul>
                                        </form>
                                    </div>
                                 </div>
                            </div>
                            <div className="sidebar-categores-box mb-sm-0">
                                <div className="sidebar-title">
                                    <h2>Laptop</h2>
                                </div>
                                <div className="category-tags">
                                    <ul>
                                        <li><a href="# ">Devita</a></li>
                                        <li><a href="# ">Cameras</a></li>
                                        <li><a href="# ">Sony</a></li>
                                        <li><a href="# ">Computer</a></li>
                                        <li><a href="# ">Big Sale</a></li>
                                        <li><a href="# ">Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaysDeal
