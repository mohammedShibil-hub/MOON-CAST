import './NavIntractive.css'
import { useState } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:6004';
axios.defaults.baseURL = API_URL;


export function SearchIntract({ searchOpen, setSearchOpen }) {
    return (
        searchOpen && (
            <div className="search-overlay">
                <div className="search-box">
                    <input className="search-bar" type="text" placeholder="Search Your Dreams..." name="search1" />
                    <button className="search-close" onClick={() => setSearchOpen(false)}>
                        <img src="/images/icons/icons8-multiply-96.png" alt="search-close" />
                    </button>
                </div>
            </div>
        )
    )
}

export function LoginIntract({ loginOpen, setLoginOpen }) {
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', loginData);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            alert('Login successful!');
            setLoginOpen(false);

        } catch (err) {
            const message =
                err.response?.data?.message ||
                err.message ||
                "Something went wrong";
            toast.error('Login failed: ' + message);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', signupData);

            toast.success('Signup successful!');
            setIsLogin(true);

        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Something went wrong";
            toast.error('Signup failed: ' + message);
        }
    };
    return (

        loginOpen && (
            <div className="login-overlay" id="login-overlay">
                <div className="login-page">
                    <button className="login-close" onClick={() => setLoginOpen(false)}>
                        <img src="/images/icons/icons8-multiply-96.png" alt="log-close" />
                    </button>
                    <div className="log-head">
                        <div className="log-logo">
                            <img src="/images/icons/moon-cast-brand-logo.png" alt="" />
                        </div>
                        <div className="login-signup">
                            <div className=
                                {`login ${isLogin ? "active" : ""}`} onClick={() => setIsLogin(true)} >
                                Log In</div>
                            <div className="vertical-line"></div>
                            <div className=
                                {`signup ${!isLogin ? "active" : ""}`} onClick={() => setIsLogin(false)} >
                                Sign Up</div>
                        </div>
                        {isLogin && (
                            <div className="log-content active">
                                <div className="log-details">
                                    <h2>Login</h2>
                                    <input type="email" placeholder="Email" name="email" onChange={handleLoginChange} />
                                    <input type="password" placeholder="Password" name="password" onChange={handleLoginChange} />
                                </div>
                                <a href="" className="forgot-pass">Forgot Your Password?</a>
                                <div className="log-button">
                                    <button onClick={handleLogin}>Sign In</button>
                                </div>
                            </div>
                        )}
                        {!isLogin && (
                            <div className="sign-content active">
                                <div className="sign-details">
                                    <h2>Sign up</h2>
                                    <input type="text" placeholder="User Name" name="name" onChange={handleSignupChange} />
                                    <input type="email" placeholder="Email" name="email" onChange={handleSignupChange} />
                                    <input type="password" placeholder="Password" name="password" onChange={handleSignupChange} />
                                </div>
                                <div className="sign-button">
                                    <button onClick={handleSignup}>Sign up</button>
                                </div>
                            </div>
                        )}
                        <div className="log-partition">
                            <hr /> or
                            <hr />
                        </div>
                        <div className="log-options">
                            <button className="log-google">
                                <img src="/images/icons/logo_google_icon.png" alt="google-img" />
                            </button>
                            <button className="log-facebook">
                                <img src="/images/icons/facebook logo_icon.png"
                                    alt="facebook-img" />
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        )
    )
}

export function WishlistIntract({ wishlistOpen, setWishlistOpen }) {
    return (
        wishlistOpen && (
            <div className="wishlist-overlay" id="whishlist-overlay">
                <div className="wishlist-popup">
                    <div className="wish-close" onClick={() => setWishlistOpen(false)}>
                        <img src="/images/icons/icons8-multiply-96.png" alt="wish-close" />
                    </div>
                    <div className="wishlist-head">
                        <h2>wishlist</h2>
                        <p>Where legends wait for your garage</p>
                        <hr />
                    </div>
                    <div className="wishlist-content">
                        <div className="wish-prodects">
                            <div className="wProduct-img">
                                <img className="wishProduct-img" src="/images/product/1-24-dodge-challenger.jpg"
                                    alt="wishProduct-img" />
                            </div>
                            <div className="wProduct-details">
                                <div className="p-name">
                                    Dodge Challenger SRT Hellcat 1:24 Diecast
                                </div>
                                <div className="p-price">
                                    <div className="w-offer">- 63</div>
                                    <div className="mrp">2999</div>
                                    <div className="offer-price">1103</div>
                                </div>
                                <div className="wish-buttons">
                                    <div className="p-remove">Remove</div>
                                    <button className="p-add-cart">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="wish-prodects">
                            <div className="wProduct-img">
                                <img className="wishProduct-img" src="/images/product/rollys-royce-cullinen.jpg"
                                    alt="wishProduct-img" />
                            </div>
                            <div className="wProduct-details">
                                <div className="p-name">
                                    1:32 Cullinan Diecast Metal Scale Model Car
                                </div>
                                <div className="p-price">
                                    <div className="w-offer">- 60</div>
                                    <div className="mrp">1999</div>
                                    <div className="offer-price">799</div>
                                </div>
                                <div className="wish-buttons">
                                    <div className="p-remove">Remove</div>
                                    <button className="p-add-cart">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="wish-prodects">
                            <div className="wProduct-img">
                                <img className="wishProduct-img" src="/images/product/Land-Cruiser-diecast.jpg"
                                    alt="wishProduct-img" />
                            </div>
                            <div className="wProduct-details">
                                <div className="p-name">
                                    Toyota Land Cruiser LC80 1:24 Diecast Metal Car
                                </div>
                                <div className="p-price">
                                    <div className="w-offer">- 67</div>
                                    <div className="mrp">3000</div>
                                    <div className="offer-price">999</div>
                                </div>
                                <div className="wish-buttons">
                                    <div className="p-remove">Remove</div>
                                    <button className="p-add-cart">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="wish-prodects">
                            <div className="wProduct-img">
                                <img className="wishProduct-img" src="/images/product/Royal-Enfield-Meteor-350.png"
                                    alt="wishProduct-img" />
                            </div>
                            <div className="wProduct-details">
                                <div className="p-name">
                                    Royal Enfield Classic 350 1:12 licensed
                                </div>
                                <div className="p-price">
                                    <div className="w-offer">- 42</div>
                                    <div className="mrp">1750</div>
                                    <div className="offer-price">999</div>
                                </div>
                                <div className="wish-buttons">
                                    <div className="p-remove">Remove</div>
                                    <button className="p-add-cart">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
