import './NavIntractive.css'
import { useState } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { avatorColor } from '../utils/avatorColor';
const apiUrl = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:6004';


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
            const res = await axios.post(`${apiUrl}/api/auth/login`, loginData);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            alert('Login successful!');
            setLoginOpen(false);
            window.location.reload();

            /* 
            chandra@gmail.com
            asdf34
            */
           

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
            await axios.post(`${apiUrl}/api/auth/register`, signupData);

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

export function UserAccountIntract({ accountOpen, setAccountOpen, }) {

    
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setAccountOpen(false)
    }

    return (
        accountOpen && (
            <div className="account-overlay" id="account-overlay">
                <div className="account-popup">
                    <div className="account-close" onClick={() => setAccountOpen(false)}>
                        <img src="/images/icons/icons8-multiply-96.png" alt="account-close" />
                    </div>
                    <div className="account-head">
                        <div className="useracct-ava" style={{ backgroundColor: avatorColor(user?.name) }}>
                            {user?.name ? user.name.charAt(0).toUpperCase() : 'G'}
                        </div>
                        <div className="account-name">
                            <h1>{user?.name}</h1>
                            <p>{user?.email}</p>
                        </div>
                        
                    </div>
                    <button className="logout-btn" onClick={logout}>Logout</button>
                    <div className="account-content">
                        <p></p>
                    </div>
                </div>
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
