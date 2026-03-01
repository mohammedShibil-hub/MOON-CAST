import './Header.css'
import { Link } from 'react-router'

export function Header() {
    return (
        <header className="navbar" id="website-content">
            <div className="left-portion">
                <Link to="/" className="brand-logo">
                    <img src="/images/icons/Picsart_25-08-19_15-17-59-2482.png" />
                </Link>
                <div className="hamburger-menu" /*onclick="openNav()"*/>
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
                <Link className="about-us" to="/aboutus">
                    About-us
                </Link>
                <Link className="contact-us" to="/contactus">
                    Contact-us
                </Link>
                <Link to="/" className="phBrand-logo">
                    <img src="/images/icons/Picsart_25-08-19_15-17-59-2482.png" />
                </Link>
            </div>
            <div className="right-portion">
                <button className="search-icon" /*onclick="openSearch()"*/>
                    <img src="/images/icons/icons8-search-10.png" />
                </button>
                <div className="search-overlay" id="search-overlay">
                    <div className="search-box">
                        <input className="search-bar" type="text" placeholder="Search Your Dreams..." name="search1" />
                        <button className="search-close" /*onclick="closeSearch()"*/>
                            <img src="/images/icons/icons8-multiply-96.png" alt="search-close" />
                        </button>
                    </div>
                </div>
                <button className="login-icon" /*onclick="openLogin()"*/>
                    <img src="/images/icons/icons8-login-96.png" />
                </button>
                <div className="wishlist-icon" /*onclick="openWishlist()"*/>
                    <img src="/images/icons/icons8-favorite-60.png" />
                    <div className="cound">0</div>
                </div>
                <Link to="/checkout" className="cart-icon">
                    <img src="/images/icons/icons8-cart-96.png" />
                    <div className="cound">20</div>
                </Link>
            </div>
        </header>
    )
}