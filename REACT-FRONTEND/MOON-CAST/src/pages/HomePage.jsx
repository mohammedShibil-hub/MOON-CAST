import './HomePage.css';
import { Link } from 'react-router'
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { LoginIntract, WishlistIntract } from '../components/NavIntractive';
import { Footer } from '../components/Footer';
import { SlidingBanner } from '../components/SlidingBanner';

import axios from 'axios';


export function HomePage() {
    //const [loading, setLoading] = useState(true)
    const [loginOpen, setLoginOpen] = useState(false)
    const [wishlistOpen, setWishlistOpen] = useState(false)
    const [latestProducts, setLatestProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [hotwheelProducts, setHotwheelProducts] = useState([]);
    const [dioramaProducts, setDioramaProducts] = useState([]);
    useEffect(() => {

        /*axios.get('http://localhost:6004/api/products')
        .then((response) => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
        */
        
        axios.get('http://localhost:6004/api/products?latest=true')
            .then(res => setLatestProducts(res.data));
        
        axios.get('http://localhost:6004/api/products?trending=true')
            .then(res => setTrendingProducts(res.data));
        
        axios.get('http://localhost:6004/api/products?category=hotwheels')
            .then(res => setHotwheelProducts(res.data));

        axios.get('http://localhost:6004/api/products?category=diorama')
            .then(res => setDioramaProducts(res.data));

    },[]);
    //if (loading) {
    //    return (<div>Loading.....</div>)
    //}


    return (
        <>
            <title>MOON CAST</title>
            <Header setLoginOpen={setLoginOpen} setWishlistOpen={setWishlistOpen} />
            <LoginIntract loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />
            <main>
                <div className="supporting-div"></div>
                <SlidingBanner />
                <div className="scale-div">
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/mercedes-benz-300sl-roadster-blue.jpg" alt="" />
                            <img className="hover-over" src="/images/icons/benz-classic1.png" alt="" />
                        </div>
                        <div className="scale-discription">1:64</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/ferrari.png" alt="" />
                            <img className="hover-over" src="/images/icons/ferrari22.png" alt="" />
                        </div>
                        <div className="scale-discription">1:43</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/bentley-flying-spur-plum.jpg" alt="" />
                            <img className="hover-over" src="/images/icons/bentley22.png" alt="" />
                        </div>
                        <div className="scale-discription">1:32</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/ferrari-f40-red.jpg" alt="" />
                            <img className="hover-over" src="/images/icons/ferarri-red1.png" alt="" />
                        </div>
                        <div className="scale-discription">1:24</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/volvo rally.png" alt="" />
                            <img className="hover-over" src="/images/icons/volvo-rally1.png" alt="" />
                        </div>
                        <div className="scale-discription">1:18</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/bmw.png" alt="" />
                            <img className="hover-over" src="/images/icons/bmw2.png" alt="" />
                        </div>
                        <div className="scale-discription">1:12</div>
                    </div>
                </div>
                <div className="latest">Latest Collection</div>
                <div className="product-grid-latest">
                    {latestProducts.map((product) => {
                        return (
                            <div key={product._id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={product.images?.[0]|| "/images/placeholder.png"} alt={product.name} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{product.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label className="wishlist-label"></label>
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{product.mrp}</div>
                                    <div className="offer-price">₹{product.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="latest-explore">explore more</a>
                </div>
                <hr className="product-partition" />
                <div className="trending">Trending Now</div>
                <div className="product-grid-trending">
                    {trendingProducts.map((product) => {
                        return (
                            <div key={product._id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{product.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label className="wishlist-label"></label>
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{product.mrp}</div>
                                    <div className="offer-price">₹{product.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="trending-explore">explore more</a>
                </div>
                <hr className="product-partition" />
                <div className="trending">Hot Wheels</div>
                <div className="product-grid-hot-wheels">
                    {hotwheelProducts.map((product) => {
                        return (
                            <div key={product._id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{product.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label className="wishlist-label"></label>
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{product.mrp}</div>
                                    <div className="offer-price">₹{product.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="hotwheels-explore">explore more</a>
                </div>
                <hr className="product-partition" />
                <div className="trending">Diorama</div>
                <div className="product-grid-diorama">
                    {dioramaProducts.map((product) => {
                        return (
                            <div key={product._id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{product.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label className="wishlist-label"></label>
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{product.mrp}</div>
                                    <div className="offer-price">₹{product.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="hotwheels-explore">explore more</a>
                </div>
            </main>
            <Footer />
        </>
    )
}