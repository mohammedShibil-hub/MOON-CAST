import './Header.css'
import { Link } from 'react-router'
import { useState, } from 'react';
import { SearchIntract } from './NavIntractive';
import { useScrollEffect } from '../../utils/HeaderScroll';

export function Header({ setLoginOpen, setWishlistOpen }) {
    const [searchOpen, setSearchOpen] = useState(false);

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);

        window.location.reload()
    }

    const showNavbar = useScrollEffect();

    return (
        <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
            <div className="left-portion">
                <Link to="/" className="brand-logo">
                    <img src="/images/icons/moon-cast-brand-logo.png" />
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
                                <img src="/images/banner/hotwheels-logo.jpg" alt="hotwheels brand" />
                            </a>
                            <a href="">
                                <img src="/images/banner/greenlight-logo.jpg" alt="greenlight brand" />
                            </a>
                            <a href="">
                                <img src="/images/banner/majorette-logo.jpg" alt="majorette brand" />
                            </a>
                            <a href="">
                                <img src="/images/banner/matchbox-logo.jpg" alt="matchbox brand" />
                            </a>
                            <a href="">
                                <img src="/images/banner/jada-logo.avif" alt="jada brand" />
                            </a>
                            <a href="">
                                <img src="/images/banner/m2machine-logo.avif"
                                    alt="m2 machine brand" />
                            </a>
                            <a href="">
                                <img src="/images/banner/mini-gt-logo.webp" alt="minigt-brand" />
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
                    <img src="/images/icons/moon-cast-brand-logo.png" />
                </Link>
            </div>
            <div className="right-portion">
                <button className="search-icon" onClick={() => setSearchOpen(true)}>
                    <img src="/images/icons/icons8-search-10.png" />
                </button>
                <SearchIntract searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

                {
                    user ? (
                        <div className="user-info">
                            <span className="user-name">Hello, {user.name}</span>
                            <button className="logout-button" onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button className="login-icon" onClick={() => setLoginOpen(true)}>
                            <img src="/images/icons/icons8-login-96.png" />
                        </button>
                    )
                }

                <div className="wishlist-icon" onClick={() => setWishlistOpen(true)}>
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