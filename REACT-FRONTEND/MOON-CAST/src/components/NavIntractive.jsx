import './NavIntractive.css'

export function NavIntractive() {
    return (
        <div className="navbar-popup">
            <div className="login-overlay" id="login-overlay">
                <div className="login-page">
                    <button className="login-close" onclick="closeLogin()">
                        <img src="/images/icons/icons8-multiply-96.png" alt="log-close" />
                    </button>
                    <div className="log-head">
                        <div className="log-logo">
                            <img src="/images/icons/Picsart_25-08-19_15-17-59-2482.png" alt="" />
                        </div>
                        <div className="login-signup">
                            <div className="login" id="login-btn">Log In</div>
                            <div className="vertical-line"></div>
                            <div className="signup" id="signup-btn">Sign Up</div>
                        </div>
                        <div className="log-content" id="log-content">
                            <div className="log-details">
                                <h2>Login</h2>
                                <input type="email" placeholder="Email" name="log-email" />
                                <input type="password" placeholder="Password" name="log-password" />
                            </div>
                            <a href="" className="forgot-pass">Forgot Your Password?</a>
                            <div className="log-button">
                                <button>Sign In</button>
                            </div>
                        </div>
                        <div className="sign-content" id="sign-content">
                            <div className="sign-details">
                                <h2>Sign up</h2>
                                <input type="text" placeholder="User Name" name="User-name" />
                                <input type="email" placeholder="Email" name="sign-email" />
                                <input type="password" placeholder="Password" name="sign-password" />
                            </div>
                            <div className="sign-button">
                                <button>Sign up</button>
                            </div>
                        </div>
                        <div className="log-partition">
                            <hr /> or
                            <hr />
                        </div>
                        <div className="log-options">
                            <button className="log-google">
                                <img src="/images/icons/7123953_logo_google_g_icon.png" alt="google-img" />
                            </button>
                            <button className="log-facebook">
                                <img src="/images/icons/5296499_fb_facebook_facebook logo_icon.png"
                                    alt="facebook-img" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wishlist-overlay" id="whishlist-overlay">
                <div className="wishlist-popup">
                    <div className="wish-close" onclick="closeWishlist()">
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
                                <img className="wishProduct-img" src="/images/product/71gxGks7MvL._SL1500_.jpg"
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
                                <img className="wishProduct-img" src="/images/product/61HH0G5DoPL._SX569_.jpg"
                                    alt="wishProduct-img" />
                            </div>
                            <div className="wProduct-details">
                                <div className="p-name">
                                    Rolls Royce Phantom Die-cast Car 1:32 Scale Model
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
                                <img className="wishProduct-img" src="/images/product/ford.png"
                                    alt="wishProduct-img" />
                            </div>
                            <div className="wProduct-details">
                                <div className="p-name">
                                    Ford Raptor F150 Model Car 1:28 diecast
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
                                <img className="wishProduct-img" src="/images/product/royal enfild 350.png"
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

        </div>
    )
}