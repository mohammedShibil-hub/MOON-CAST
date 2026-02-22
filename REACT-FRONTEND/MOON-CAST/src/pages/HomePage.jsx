import './HomePage.css';
import './NavBar.css';
import './Footer.css';
import './Intro.css';
import './NavIntractive.css';

export function HomePage() {
    return(
        <>
            <div className="intro" id="logo-intro">
        <div className="logo-container">
            <img className="image js-img" src="/images/icons/moon.png" />
            <img className="image js-img" src="/images/icons/van5.png" />
            <img className="image js-img" src="/images/icons/tire.png" />
            <img className="image js-img" src="/images/icons/die.png" />
            <img className="image js-img" src="/images/icons/cast.png" />
        </div>
        <div className="invisible-box"></div>
    </div>
    <header className="navbar" id="website-content">
        <div className="left-portion">
            <a href="DIECASTONLINE.HTML" className="brand-logo">
                <img src="/images/icons/Picsart_25-08-19_15-17-59-2482.png" />
            </a>
            <div className="hamburger-menu" onclick="openNav()">
                <img src="/images/icons/icons8-hamburger-menu-100.png" alt="" />
            </div>
        </div>
        <div className="middle-portion">
            <div className="category">
                Category
                <div className="nav-popup">
                    <div className="category-popup">
                        <a href="">New Arrivals</a>
                        <a href="">Trendings</a>
                        <a href="">Diecast Cars</a>
                        <a href="">Diecast Bikes</a>
                        <a href="">Diecast Suvs</a>
                        <a href="">Diorama</a>
                        <a href="">Accessories</a>
                        <a href="">Classical Models</a>
                        <a href="">DieCast</a>
                        <a href="">Rare Models</a>
                        <a href="">RC Cars</a>
                        <a href="">Hobby Grade RC</a>
                        <a href="">Others</a>
                    </div>
                </div>
            </div>
            <div className="kids"> 
                Kids
                <div className="nav-popup">
                    <div className="kids-popup">
                        <a href="">1 to 3 year</a>
                        <a href="">3 to 6 year</a>
                        <a href="">6 to 9 year</a>
                        <a href="">9 to 13 year</a>
                        <a href="">Electrical Cars</a>
                        <a href="">Electrical Bikes</a>
                        <a href="">Ride ons</a>
                        <a href="">Plasma Cars</a>
                    </div>
                </div>
            </div>
            <div className="brand">
                Brand
                <div className="nav-popup">
                    <div className="brand-popup">
                        <a href="">
                            <img src="/images/banner/03.jpg" alt="hotwheels brand" />
                        </a>
                        <a href="">
                            <img src="/images/banner/04.jpg" alt="greenlight brand" />
                        </a>
                        <a href="">
                            <img src="/images/banner/05.jpg" alt="majorette brand" />
                        </a>
                        <a href="">
                            <img src="/images/banner/10.jpg" alt="matchbox brand" />
                        </a>
                        <a href="">
                            <img src="/images/banner/brand-logo-intro__jada_320x160.avif" alt="jada brand" />
                        </a>
                        <a href="">
                            <img src="/images/banner/brand-logo-intro__m2machines_320x192.avif"
                                alt="m2 machine brand" />
                        </a>
                        <a href="">
                            <img src="/images/banner/Untitled_300_x_300_px_2.webp" alt="minigt-brand" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="sell-prodect">
                Start Selling
                <div className="nav-popup">
                    <div className="sell-popup">

                    </div>
                </div>
            </div>
            <a className="about-us" href="/aboutPage/aboutPage.html">
                About-us
            </a>
            <a className="contact-us" href="/contactUs/contact-us.html">
                Contact-us
            </a>
            <a href="DIECASTONLINE.HTML" className="phBrand-logo">
                <img src="/images/icons/Picsart_25-08-19_15-17-59-2482.png" />
            </a>
        </div>
        <div className="right-portion">
            <button className="search-icon" onclick="openSearch()">
                <img src="/images/icons/icons8-search-10.png" />
            </button>
            <div className="search-overlay" id="search-overlay">
                <div className="search-box">
                    <input className="search-bar" type="text" placeholder="Search Your Dreams..." name="search1" />
                    <button className="search-close" onclick="closeSearch()">
                        <img src="/images/icons/icons8-multiply-96.png" alt="search-close" />
                    </button>
                </div>
            </div>
            <button className="login-icon" onclick="openLogin()">
                <img src="/images/icons/icons8-login-96.png" />
            </button>
            <div className="wishlist-icon" onclick="openWishlist()">
                <img src="/images/icons/icons8-favorite-60.png" />
                <div className="cound">0</div>
            </div>
            <a href="/cartPage/cart.html" className="cart-icon">
                <img src="/images/icons/icons8-cart-96.png" /> 
                <div className="cound">20</div>
            </a>
        </div>
    </header>
    <main>
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
        <div className="supporting-div"></div>
        <div className="slider">
            <div className="slides">
                <div className="slide"><img src="/images/banner/rolls3.jpg" alt="Image 1" /></div>
                <div className="slide"><img src="/images/banner/defender3.jpg" alt="Image 2" /></div>
                <div className="slide"><img src="/images/banner/popRace.png" alt="Image 3" /></div>
                <div className="slide"><img src="/images/banner/mini gt.png" alt="Image 4" /></div>
                <div className="slide"><img src="/images/banner/kaidoHouse.jpg" alt="Image 5" /></div>
                <div className="slide"><img src="/images/banner/minigtsport.jpg" alt="Image 6" /></div>
            </div>
            <button className="arrow left">&#10094;</button>
            <button className="arrow right">&#10095;</button>
        </div>
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
            <div className="product-grid-latest"></div>
            <div className="more-div">
                <a className="explore" id="latest-explore">explore more</a>
            </div>
            <hr className="product-partition" />
            <div className="trending">Trending Now</div>
            <div className="product-grid-trending"></div>
            <div className="more-div">
                <a className="explore" id="trending-explore">explore more</a>
            </div>
            <hr className="product-partition" />
            <div className="trending">Hot Wheels</div>
            <div className="product-grid-hot-wheels"></div>
            <div className="more-div">
                <a className="explore" id="hotwheels-explore">explore more</a>
            </div>
            <hr className="product-partition" />
            <div className="trending">Diorama</div>
            <div className="product-grid-diorama"></div>
            <div className="more-div">
                <a className="explore" id="hotwheels-explore">explore more</a>
            </div>
    </main>
    <footer className="footer-div">
        <div className="services-div">
            <div className="service-box">
                <img src="/images/icons/icons8-secure.png" alt="" />
                <div className="services-dscr">100% SECURE CHECKOUT</div>
            </div>
            <div className="service-box">
                <img src="/images/icons/icons8-shipping-100.png" alt="" />
                <div className="services-dscr">SHIPPING ACROSS INDIA</div>
            </div>
            <div className="service-box">
                <img src="/images/icons/icons8-customer-service-100.png" alt="" />
                <div className="services-dscr">24×7 SUPPORT</div>
            </div>
        </div>
        <div className="page-discription">
            <img src="/images/icons/Picsart_25-08-19_15-17-59-2482.png" alt="" />
            <p>
                At Moon Cast, we are more than just a store – we’re a community built for diecast enthusiasts.
                From rare diecast cars and detailed dioramas to unique collectibles, we bring together everything a true
                collector or hobbyist could dream of.
                make collecting an exciting, affordable, and trusted experience. With rare models, exclusive
                collections, and unbeatable prices.
                we ensure that every collector – from casual hobbyists to diecast crazies – finds something special to
                add to their shelf.
                <strong>What makes us different?</strong> Along with offering the best in diecast collectibles, we
                proudly support startup creators and custom makers.
                showcasing 3D-printed diecast models and innovative collectibles designed by passionate talents in the
                community.
            </p>
        </div>
        <div className="connect-us-div">
            <div className="consumer-policy">
                <h5>CONSUMER POLICY</h5>
                <a href="" className="policy">Refunds</a>
                <a href="" className="policy">Privacy Policy</a>
                <a href="" className="policy">Terms & Conditions</a>
                <a href="" className="policy">Return & Cancellation</a>
                <a href="" className="policy">Shipping Policy & Charges</a>
            </div>
            <div className="address-div">
                <h5>REGISTERED OFFICE ADDRESS</h5>
                <p>
                    Moon cast,<br />3rd floor, LULU mall, <br />
                    Govindapuram, Kozhikode(Calicut), Kerala 676521 <br />
                </p>
                <h6>TELEPHONE: </h6> <a href="">+91 9876543210</a> / <a href="">0495-234678</a>
            </div>
            <div className="newsletter">
                <h5>NEWSLETTER</h5>
                <p>Sign up for exclusive updates, new arrivals, events and more</p>
                <div className="newsletter-inp">
                    <input type="search" placeholder="Email address" />
                    <button className="letter-submitt">SUBMIT</button>
                </div>
            </div>
            <div className="social-connection">
                <div className="social-media">
                    <h5>FOLLOW MOON CAST HERE</h5>
                    <div className="social-img-div">
                        <img className="social-img" src="/images/icons/icons8-facebook-logo-100 (1).png" alt="" />
                        <img className="social-img" src="/images/icons/icons8-instagram-logo-100 (1).png" alt="" />
                        <img className="social-img" src="/images/icons/icons8-x-logo-90 (1).png" alt="" />
                        <img className="social-img" src="/images/icons/icons8-youtube-logo-100.png" alt="" />
                        <img className="social-img" src="/images/icons/icons8-whatsapp-100.png" alt="" />
                    </div>
                </div>
                <div className="mobile-version">
                    <h5>EXPERIENCE MOONCAST ON MOBILE</h5>
                    <div className="app-div">
                        <img className="andriod-img" src="/images/icons/playstoreapp.png" alt="" />
                        <img className="ios-img" src="/images/icons/5a902db97f96951c82922874.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
        <div className="footer-box">
            <div className="copywrite-div">
                <img src="/images/icons/icons8-circled-c-96.png" alt="" />
                <p>2025 www.mooncast.com All rights reserved</p>
            </div>
            <div className="pay-div">
                <div className="payment-platform">
                    <img src="/images/icons/visa.png" alt="" />
                </div>
                <div className="payment-platform">
                    <img src="/images/icons/bhim-upi-icon.png" alt="" />
                </div>
                <div className="payment-platform">
                    <img src="/images/icons/money.png" alt="" />
                </div>
                <div className="payment-platform">
                    <img src="/images/icons/google-pay.png" alt="" />
                </div>
                <div className="payment-platform">
                    <img src="/images/icons/sam-pay.png" alt="" />
                </div>
                <div className="payment-platform">
                    <img src="/images/icons/paypal.png" alt="" />
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}