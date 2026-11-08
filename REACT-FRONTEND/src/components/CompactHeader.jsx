import './CompactHeader.css';
import { useState } from 'react';
import { SearchIntract } from './CmpIntractive';
import { Link } from 'react-router';
import { useScrollEffect } from '../utils/HeaderScroll';
import { useCart } from '../context/CartContext';
import { avatorColor } from '../utils/avatorColor';

export function CompactHeader({ setHamOpen, setAccountOpen, setLoginOpen }) {
    const [searchOpen, setSearchOpen] = useState(false);

    const { cart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    const user = JSON.parse(localStorage.getItem("user"));
    const firstLetter = user?.name?.charAt(0).toUpperCase() || '';

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
                    <Link to="/"><img className="cmp-logo" src="/images/icons/moon-cast-brand-logo.png" /></Link>
                </div>
            </div>
            <div className="right-section">
                <button className="cmp-search-icon" onClick={() => setSearchOpen(true)}>
                    <img src="/images/icons/icons8-search-10.png" />
                </button>
                <SearchIntract searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

                {

                    user ? (
                        <div className="cmp-user-avatar" style={{ backgroundColor: avatorColor(user?.name) }}
                        onClick={() => setAccountOpen(true)} >
                            {firstLetter}
                        </div>
                    ) : (
                        <button className="cmp-login-icon" onClick={() => setLoginOpen(true)}>
                            <img src="/images/icons/icons8-login-96.png" />
                        </button>
                    )
                }
                <Link to="/checkout" className="cmp-cart-icon">
                    <img src="/images/icons/icons8-cart-100.png" />
                    <div className="cmp-cound">{cartItemCount}</div>
                </Link>
            </div>
        </header>
    )
}