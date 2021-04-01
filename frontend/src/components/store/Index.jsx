import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAudioProducts, listComputerProducts, listMajorProducts, listTrendingProducts, listTVProducts } from '../../actions/productActions'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css";


import Banner1 from "../../images/banner/1_1.jpg"
import Banner2 from "../../images/banner/1_2.jpg"

// Static Banner
import StaticBanner1 from '../../images/banner/1_3.jpg'
import StaticBanner2 from '../../images/banner/1_4.jpg'
import StaticBanner3 from '../../images/banner/1_5.jpg'



const Index = (props) => {
    const [qty, setQty] = useState(1)
    const majorProductsList = useSelector(state => state.majorProductsList)
    const audioProductsList = useSelector(state => state.audioProductsList)
    const computerProductsList = useSelector(state => state.computerProductsList)
    const televisionProductsList = useSelector(state => state.televisionProductsList)
    const trendingProductsList = useSelector(state => state.trendingProductsList)


    const {products, loading, error} = majorProductsList;
    const {audioProducts, audioProductsloading, audioProductserror} = audioProductsList;
    const {computerProducts, computerProductsloading, computerProductserror} = computerProductsList;
    const {televisionProducts, televisionProductsloading, televisionProductserror} = televisionProductsList;
    const {trendingProducts, trendingProductsloading, trendingProductserror} = trendingProductsList;


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listMajorProducts())
        dispatch(listAudioProducts())
        dispatch(listComputerProducts())
        dispatch(listTVProducts())
        dispatch(listTrendingProducts())


        document.title = 'Limpupa | A Shop Online';
     }, [])
     
    return (
        <div>
            <div className="slider-with-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="slider-area">
                                <div className="slider-active owl-carousel">
                                    <div className="single-slide align-center-left  animation-style-01 bg-1">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                            <h2>Chamcham Galaxy S9 | S9+</h2>
                                            <h3>Starting at <span>$1209.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide align-center-left animation-style-02 bg-2">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                            <h2>Work Desk Surface Studio 2018</h2>
                                            <h3>Starting at <span>$824.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* style={{backgroundImage: `url(${Banner1})`}} */}
                                    <div className="single-slide align-center-left animation-style-01 bg-3">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                            <h2>Phantom 4 Pro+ Obsidian</h2>
                                            <h3>Starting at <span>$1849.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div className="li-banner">
                                <a href="#">
                                    <img src={Banner1} alt=""/>
                                </a>
                            </div>
                            <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
                                <a href="#">
                                    <img src={Banner2} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-area pt-60 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab">
                                <ul className="nav li-product-menu">
                                   <li><a className="active" data-toggle="tab" href="#li-new-product"><span>New Arrival</span></a></li>
                                   <li><a data-toggle="tab" href="#li-bestseller-product"><span>Bestseller</span></a></li>
                                   <li><a data-toggle="tab" href="#li-featured-product"><span>Featured Products</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="li-new-product" className="tab-pane active show" role="tabpanel">
                            <div className="row">

                                
                                {
                                        products && (
                                            <OwlCarousel
                                            items={4}
                                            className="owl-theme"
                                            loop={true}
                                            margin={20}
                                            nav={true}
                                            dots={false}
                                            autoplay={true}
                                            autoplayTimeout={2000}
                                            items={4}
                                            >
                                                {
                                                    products.map(item => {
                                                        return (
                                                                <div className="col-lg-12" >
                                                                    <div className="single-product-wrap"key={item._id}>
                                                                        <div className="product-image">
                                                                            <a href="single-product.html">
                                                                                <img src={`http://localhost:2500/productimages/` + item.productImage} alt="Li's Product Image"/>
                                                                            </a>
                                                                            <span className="sticker">New</span>
                                                                        </div>
                                                                        <div className="product_desc">
                                                                            <div className="product_desc_info">
                                                                                <div className="product-review">
                                                                                    <h5 className="manufacturer">
                                                                                        <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                                <h4><a className="product_name" href="single-product.html">{item.productName}</a></h4>
                                                                                <div className="price-box">
                                                                                    <span className="new-price new-price-2">$71.80</span>
                                                                                    <span className="old-price">$77.22</span>
                                                                                    <span className="discount-percentage">-7%</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="add-actions">
                                                                                <ul className="add-actions-link">
                                                                                    <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                                    <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                                    <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                                                     
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        )
                                        
                                    }        
                                                                        
                            </div>
                        </div>
                        <div id="li-bestseller-product" className="tab-pane" role="tabpanel">
                            <div className="row">
                                <div className="product-active owl-carousel">
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/12.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/10.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/8.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="li-featured-product" className="tab-pane" role="tabpanel">
                            <div className="row">
                                <div className="product-active owl-carousel">
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
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/12.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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
            </div>
            <div className="li-static-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="single-banner">
                                <a href="#">
                                    <img src={StaticBanner1} alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div className="single-banner">
                                <a href="#">
                                    <img src={StaticBanner2} alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div className="single-banner">
                                <a href="#">
                                    <img src={StaticBanner3} alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-area li-laptop-product pt-60 pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>Computers & Accessories</span>
                                </h2>
                                <ul className="li-sub-category-list">
                                    <li className="active"><a href="shop-left-sidebar.html">Prime Video</a></li>
                                    <li><a href="shop-left-sidebar.html">Computers</a></li>
                                    <li><a href="shop-left-sidebar.html">Electronics</a></li>
                                </ul>
                            </div>
                            <div className="row">
                               
                            {
                                        computerProducts && (
                                            <OwlCarousel
                                            items={3}
                                            className="owl-theme"
                                            loop={true}
                                            margin={20}
                                            nav={true}
                                            dots={false}
                                            autoplay={true}
                                            autoplayTimeout={2000}
                                            items={4}
                                            >
                                                {
                                                    computerProducts.map(computerItem => {
                                                        return (
                                                           
                                                                <div className="col-lg-12" >
                                                                    <div className="single-product-wrap" key={computerItem._id}>
                                                                        <div className="product-image">
                                                                            <a href="single-product.html">
                                                                                <img src={`http://localhost:2500/productimages/` + computerItem.productImage} alt="Li's Product Image"/>
                                                                            </a>
                                                                            <span className="sticker">New</span>
                                                                            { console.log(computerItem)}
                                                                        </div>
                                                                        <div className="product_desc">
                                                                            <div className="product_desc_info">
                                                                                <div className="product-review">
                                                                                    <h5 className="manufacturer">
                                                                                        <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                                <h4><a className="product_name" href="single-product.html">{computerItem.productName}</a></h4>
                                                                                <div className="price-box">
                                                                                    <span className="new-price new-price-2">$71.80</span>
                                                                                    <span className="old-price">$77.22</span>
                                                                                    <span className="discount-percentage">-7%</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="add-actions">
                                                                                <ul className="add-actions-link">
                                                                                    <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                                    <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                                    <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                                                     
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        )
                                        
                                    }    
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-area li-laptop-product li-tv-audio-product pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>Audio</span>
                                </h2>
                                <ul className="li-sub-category-list">
                                    <li className="active"><a href="shop-left-sidebar.html">Chamcham</a></li>
                                    <li><a href="shop-left-sidebar.html">Sanai</a></li>
                                    <li><a href="shop-left-sidebar.html">Meito</a></li>
                                </ul>
                            </div>
                            <div className="row">

                                    {
                                        audioProducts && (
                                            <OwlCarousel
                                            items={3}
                                            className="owl-theme"
                                            loop={true}
                                            margin={20}
                                            nav={true}
                                            dots={false}
                                            autoplay={true}
                                            autoplayTimeout={2000}
                                            items={4}
                                            >
                                                {
                                                    audioProducts.map(audioItem => {
                                                        return (
                                                           
                                                                <div className="col-lg-12" >
                                                                    <div className="single-product-wrap" key={audioItem._id}>
                                                                        <div className="product-image">
                                                                            <a href="single-product.html">
                                                                                <img src={`http://localhost:2500/productimages/` + audioItem.productImage} alt="Li's Product Image"/>
                                                                            </a>
                                                                            <span className="sticker">New</span>
                                                                        </div>
                                                                        <div className="product_desc">
                                                                            <div className="product_desc_info">
                                                                                <div className="product-review">
                                                                                    <h5 className="manufacturer">
                                                                                        <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                                <h4><a className="product_name" href="single-product.html">{audioItem.productName}</a></h4>
                                                                                <div className="price-box">
                                                                                    <span className="new-price new-price-2">$71.80</span>
                                                                                    <span className="old-price">$77.22</span>
                                                                                    <span className="discount-percentage">-7%</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="add-actions">
                                                                                <ul className="add-actions-link">
                                                                                    <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                                    <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                                    <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                                                     
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        )
                                        
                                    }  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-area li-laptop-product li-tv-audio-product pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>Televisions</span>
                                </h2>
                                <ul className="li-sub-category-list">
                                    <li className="active"><a href="shop-left-sidebar.html">Chamcham</a></li>
                                    <li><a href="shop-left-sidebar.html">Sanai</a></li>
                                    <li><a href="shop-left-sidebar.html">Meito</a></li>
                                </ul>
                            </div>
                            <div className="row">

                                    {
                                        televisionProducts && (
                                            <OwlCarousel
                                            items={3}
                                            className="owl-theme"
                                            loop={true}
                                            margin={20}
                                            nav={true}
                                            dots={false}
                                            autoplay={true}
                                            autoplayTimeout={2000}
                                            items={4}
                                            >
                                                {
                                                    televisionProducts.map(tvItem => {
                                                        return (
                                                           
                                                                <div className="col-lg-12" >
                                                                    <div className="single-product-wrap" key={tvItem._id}>
                                                                        <div className="product-image">
                                                                            <a href="single-product.html">
                                                                                <img src={`http://localhost:2500/productimages/` + tvItem.productImage} alt="Li's Product Image"/>
                                                                            </a>
                                                                            <span className="sticker">New</span>
                                                                        </div>
                                                                        <div className="product_desc">
                                                                            <div className="product_desc_info">
                                                                                <div className="product-review">
                                                                                    <h5 className="manufacturer">
                                                                                        <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                                <h4><a className="product_name" href="single-product.html">{tvItem.productName}</a></h4>
                                                                                <div className="price-box">
                                                                                    <span className="new-price new-price-2">$71.80</span>
                                                                                    <span className="old-price">$77.22</span>
                                                                                    <span className="discount-percentage">-7%</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="add-actions">
                                                                                <ul className="add-actions-link">
                                                                                    <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                                    <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                                    <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                                                     
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        )
                                        
                                    }  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="li-static-home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-static-home-image"></div>
                            <div className="li-static-home-content">
                                <p>Sale Offer<span>-20% Off</span>This Week</p>
                                <h2>Featured Product</h2>
                                <h2>Majesty Accessories 2021</h2>
                                <p className="schedule">
                                    Starting at
                                    <span> GHS 19.99 </span>
                                </p>
                                <div className="default-btn">
                                    <a href="shop-left-sidebar.html" className="links">Shopping Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-area li-trending-product pt-60 pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab li-trending-product-tab">
                                <h2>
                                    <span>Trending Products</span>
                                </h2>
                                <ul className="nav li-product-menu li-trending-product-menu">
                                   <li><a className="active" data-toggle="tab" href="#home1"><span>Sanai</span></a></li>
                                   <li><a data-toggle="tab" href="#home2"><span>Camera Accessories</span></a></li>
                                   <li><a data-toggle="tab" href="#home3"><span>XailStation</span></a></li>
                                </ul>
                            </div>
                            <div className="tab-content li-tab-content li-trending-product-content">
                                <div id="home1" className="tab-pane show fade in active">
                                    <div className="row">
                        
                                    {
                                        trendingProducts && (
                                            <OwlCarousel
                                            items={3}
                                            className="owl-theme"
                                            loop={true}
                                            margin={20}
                                            nav={true}
                                            dots={false}
                                            autoplay={true}
                                            autoplayTimeout={2000}
                                            items={4}
                                            >
                                                {
                                                    trendingProducts.map(trendingItem => {
                                                        return (
                                                           
                                                                <div className="col-lg-12" >
                                                                    <div className="single-product-wrap" key={tvItem._id}>
                                                                        <div className="product-image">
                                                                            <a href="single-product.html">
                                                                                <img src={`http://localhost:2500/productimages/` + trendingItem.productImage} alt="Li's Product Image"/>
                                                                            </a>
                                                                            <span className="sticker">Hot</span>
                                                                        </div>
                                                                        <div className="product_desc">
                                                                            <div className="product_desc_info">
                                                                                <div className="product-review">
                                                                                    <h5 className="manufacturer">
                                                                                        <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                                <h4><a className="product_name" href="single-product.html">{trendingItem.productName}</a></h4>
                                                                                <div className="price-box">
                                                                                    <span className="new-price new-price-2">$71.80</span>
                                                                                    <span className="old-price">$77.22</span>
                                                                                    <span className="discount-percentage">-7%</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="add-actions">
                                                                                <ul className="add-actions-link">
                                                                                    <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                                    <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                                    <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                                                     
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        )
                                        
                                    }  

                                    </div>
                                </div>
                                <div id="home2" className="tab-pane fade">
                                    <div className="row">
                                        <div className="product-active owl-carousel">
                                            <div className="col-lg-12">
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
   
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="home3" className="tab-pane fade">
                                    <div className="row">
                                        <div className="product-active owl-carousel">
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
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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
                    </div>
                </div>
            </section>
            <section className="product-area li-laptop-product li-trendding-products best-sellers pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>Bestsellers</span>
                                </h2>
                            </div>
                            <div className="row">
                                <div className="product-active owl-carousel">
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                        
                                    </div>
                                    <div className="col-lg-12">
                                
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
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

export default Index
