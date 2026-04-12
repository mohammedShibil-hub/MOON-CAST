import './CompactHeader.css';
import { useState } from 'react';
import { SearchIntract } from './CmpIntractive';
import { Link } from 'react-router';
import { useScrollEffect } from '../../utils/HeaderScroll';

export function CompactHeader({setHamOpen, setWishlistOpen}) {
    const [searchOpen, setSearchOpen] = useState(false);

    const showNavbar = useScrollEffect();

    return (
        <header className={`compact-header ${showNavbar ? "show" : "hide"}`}>
            <div className="left-section">
                <div className="cmp-hamburger-menu" onClick={() => setHamOpen(true)}>
                    <img src="/images/icons/icons8-hamburger-menu-100.png" alt="" />
                </div>
            </div>
            <div className="middle-section">
                <div className="cmp-brand-logo">
                    <Link to="/"><img src="/images/icons/moon-cast-brand-logo.png" /></Link>
                </div>
            </div>
            <div className="right-section">
                <button className="cmp-search-icon" onClick={() => setSearchOpen(true)}>
                    <img src="/images/icons/icons8-search-10.png" />
                </button>
                <SearchIntract searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>

                <div className="cmp-wishlist-icon" onClick={() => setWishlistOpen(true)}>
                    <img src="/images/icons/icons8-favorite-60.png" />
                    <div className="cmp-cound">0</div>
                </div>
                <Link to="/checkout" className="cmp-cart-icon">
                    <img src="/images/icons/icons8-cart-96.png" />
                        <div className="cmp-cound">20</div>
                </Link>
            </div>
        </header>
    )
}