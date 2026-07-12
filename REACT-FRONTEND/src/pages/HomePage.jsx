import './HomePage.css';
import { Link } from 'react-router'
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { LoginIntract, WishlistIntract, UserAccountIntract } from '../components/NavIntractive';
import { Footer } from '../components/Footer';
import { SlidingBanner } from '../components/SlidingBanner';
const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:6004';

import axios from 'axios';


export function HomePage() {
    //const [loading, setLoading] = useState(true)
    const [loginOpen, setLoginOpen] = useState(false)
    const [accountOpen, setAccountOpen] = useState(false)
    const [wishlistOpen, setWishlistOpen] = useState(false)
    const [latestProducts, setLatestProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [hotwheelProducts, setHotwheelProducts] = useState([]);
    const [dioramaProducts, setDioramaProducts] = useState([]);
    const [loadingLatest, setLoadingLatest] = useState(true);
    const [loadingTrending, setLoadingTrending ] = useState(true);
    const [loadingHotwheels, setLoadingHotwheels ] = useState(true);
    const [loadingDiorama, setLoadingDiorama ] = useState(true);
    useEffect(() => {

        /*axios.get('http://localhost:6004/api/products')
        .then((response) => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
        */

        axios.get(`${API_URL}/api/products?latest=true`)
            .then(res => {
                setLatestProducts(res.data);
                setLoadingLatest(false);
            })
            .catch(err => {
                if (err.response) {
                    // Server responded with a status other than 2xx
                    console.error("Error Status:", err.response.status);
                    console.error("Error Data:", err.response.data);
                } else if (err.request) {
                    // Request was made but no response
                    console.error("No response from server:", err.request);
                } else {
                    // Something else happened
                    console.error("Error:", err.message);
                }
            });

        axios.get(`${API_URL}/api/products?trending=true`)
            .then(res => {
                setTrendingProducts(res.data);
                setLoadingTrending(false);
            });

        axios.get(`${API_URL}/api/products?category=Hotwheels`)
            .then(res => {
                setHotwheelProducts(res.data);
                setLoadingHotwheels(false);
            });

        axios.get(`${API_URL}/api/products?category=Diorama`)
            .then(res => {
                setDioramaProducts(res.data);
                setLoadingDiorama(false);
            });

    }, []);

    const renderSkeletons = (count = 12) =>
    Array.from({ length: count }).map((_, index) => (
        <div className="product-container" key={index}>
            <div className="img-box skeleton"></div>
            <div className="name skeleton"></div>
            <div className="price-div skeleton"></div>
        </div>
    ));


    return (
        <>
            <title>MOON CAST</title>
            <Header setLoginOpen={setLoginOpen} setWishlistOpen={setWishlistOpen} setAccountOpen={setAccountOpen} />
            <LoginIntract loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />
            <UserAccountIntract accountOpen={accountOpen} setAccountOpen={setAccountOpen} />
            <main>
                <div className="supporting-div"></div>
                <SlidingBanner />
                <div className="scale-div">
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/mercedes-roadster.jpg" alt="" />
                            <img className="hover-over" src="/images/icons/benz-scalesize.png" alt="" />
                        </div>
                        <div className="scale-discription">1:64</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/ferrari-spots.png" alt="" />
                            <img className="hover-over" src="/images/icons/ferrari-spots-scalesize.png" alt="" />
                        </div>
                        <div className="scale-discription">1:43</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/bentley-flying-spur-plum.jpg" alt="" />
                            <img className="hover-over" src="/images/icons/bentley_scalesize.png" alt="" />
                        </div>
                        <div className="scale-discription">1:32</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/ferrari-f40-red.jpg" alt="" />
                            <img className="hover-over" src="/images/icons/ferarri-red-scalesize.png" alt="" />
                        </div>
                        <div className="scale-discription">1:24</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/volvo rally.png" alt="" />
                            <img className="hover-over" src="/images/icons/volvo-rally-scalesize.png" alt="" />
                        </div>
                        <div className="scale-discription">1:18</div>
                    </div>
                    <div className="scale-container">
                        <div className="scale-size">
                            <img className="scale-icon" src="/images/icons/bmw_bike.png" alt="" />
                            <img className="hover-over" src="/images/icons/bmw_bike_scalesize.png" alt="" />
                        </div>
                        <div className="scale-discription">1:12</div>
                    </div>
                </div>
                <div className="latest">Latest Collection</div>
                <div className="product-grid-latest">
                    {loadingLatest 
                    ? renderSkeletons(12)
                    : latestProducts.map((product) => {
                        return (
                            <Link key={product._id} className="product-container" to={`/product/${product._id}`}>
                                <div className="img-box">
                                    <img className="product-image" src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} />
                                    <div className="offer">{product.offer}%</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label className="wishlist-label"></label>
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{product.mrp}</div>
                                    <div className="offer-price">₹{product.price}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="more-div">
                    <Link className="explore" to="/products?latest=true">explore more</Link>
                </div>
                <hr className="product-partition" />
                <div className="trending">Trending Now</div>
                <div className="product-grid-trending">
                    {loadingTrending 
                    ? renderSkeletons(12)
                    :trendingProducts.map((product) => {
                        return (
                            <Link key={product._id} className="product-container" to={`/product/${product._id}`}>
                                <div className="img-box">
                                    <img className="product-image" src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} />
                                    <div className="offer">{product.offer}%</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label className="wishlist-label"></label>
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{product.mrp}</div>
                                    <div className="offer-price">₹{product.price}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="more-div">
                    <Link className="explore" to="/products?trending=true">explore more</Link>
                </div>
                <hr className="product-partition" />
                <div className="trending">Hot Wheels</div>
                <div className="product-grid-hot-wheels">
                    {loadingHotwheels 
                    ? renderSkeletons(12)
                    : hotwheelProducts.map((product) => {
                        return (
                            <Link key={product._id} className="product-container" to={`/product/${product._id}`}>
                                <div className="img-box">
                                    <img className="product-image" src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} />
                                    <div className="offer">{product.offer}%</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label className="wishlist-label"></label>
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{product.mrp}</div>
                                    <div className="offer-price">₹{product.price}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="more-div">
                    <Link className="explore" to="/products?category=Hotwheels">explore more</Link>
                </div>
                <hr className="product-partition" />
                <div className="trending">Diorama</div>
                <div className="product-grid-diorama">
                    {
                    loadingDiorama 
                    ? renderSkeletons(12)
                    : dioramaProducts.map((product) => {
                        return (
                            <Link key={product._id} className="product-container" to={`/product/${product._id}`}>
                                <div className="sold-out">
                                    <div className="img-box">
                                        <img className="product-image" src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} />

                                        <div className="offer">{product.offer}%</div>
                                        <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                        <label className="wishlist-label"></label>
                                    </div>
                                    <div className="name">{product.name}</div>
                                    <div className="price-div">
                                        <div className="mrp">₹{product.mrp}</div>
                                        <div className="offer-price">₹{product.price}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="more-div">
                    <Link className="explore" to="/products?category=Diorama">explore more</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}