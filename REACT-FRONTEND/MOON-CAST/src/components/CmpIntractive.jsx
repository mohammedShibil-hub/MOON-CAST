import { Link } from 'react-router'
import './CmpIntractive.css'

export function SearchIntract({ searchOpen, setSearchOpen}) {
    return (
        searchOpen && (
            <div className="cmp-search-overlay">
                <div className="cmp-search-box">
                    <input className="cmp-search-bar" type="text" placeholder="Search Your Dreams..." name="search1" />
                    <button className="cmp-search-close" onClick={() => setSearchOpen(false)}>
                        <img src="/images/icons/icons8-multiply-96.png" />
                    </button>
                </div>
            </div>
        )    
    )   
}
export function HamburgerIntract({ hamOpen, setHamOpen }) {
    return (
        hamOpen && (
            <div className="sideNav-overlay">
                <div className="side-nav">
                    <button className="hamClose" onClick={() => setHamOpen(false)}>
                        <img src="/images/icons/icons8-multiply-100.png" />
                    </button>
                    <div className="hamburger-options">
                        <div className="cmp-category">
                            Category
                            <div className="cmp-nav-popup">
                                <div className="cmp-category-popup">
                                    <a href="">New Arrivals</a>
                                    <a href="">Trendings</a>
                                    <a href="">Diecast Cars</a>
                                    <a href="">Diecast Bikes</a>
                                    <a href="">Diecast Suvs</a>
                                    <a href="">Diorama</a>
                                    <a href="">Accessories</a>
                                    <a href="">classical Models</a>
                                    <a href="">DieCast</a>
                                    <a href="">Rare Models</a>
                                    <a href="">RC Cars</a>
                                    <a href="">Hobby Grade RC</a>
                                    <a href="">Others</a>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-kids">
                            Kids
                            <div className="cmp-nav-popup">
                                <div className="cmp-kids-popup">
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
                        <div className="cmp-brand">
                            Brand
                            <div className="cmp-nav-popup">
                                <div className="cmp-brand-popup">
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
                        <div className="cmp-sell-product">
                            Start Selling
                            <div className="cmp-nav-popup">
                                <div className="cmp-sell-popup">

                                </div>
                            </div>
                        </div>
                        <Link className="cmp-about-us" to="/aboutus">
                            About-us
                        </Link>
                        <Link className="cmp-contact-us" to="/contactus">
                            Contact-us
                        </Link>
                    </div>
                </div>
            </div>
        )
    )
}

export function WishlistIntract({wishlistOpen, setWishlistOpen}) {
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