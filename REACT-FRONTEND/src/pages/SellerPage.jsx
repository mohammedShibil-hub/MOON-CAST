import './SellerPage.css'
import { useState } from 'react';
import { CompactHeader } from '../components/CompactHeader';
import { HamburgerIntract, WishlistIntract } from '../components/CmpIntractive';
import { Footer } from '../components/Footer';
import { SellerIntract } from '../components/SellerIntract';


export function SellerPage() {

    const [hamOpen, setHamOpen] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [sellerIntractOpen, setSellerIntractOpen] = useState(false);

    return (
        <div className="seller-page">
            <title>Become Seller</title>
            <CompactHeader setHamOpen={setHamOpen} setWishlistOpen={setWishlistOpen} />
            <HamburgerIntract hamOpen={hamOpen} setHamOpen={setHamOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />
            <SellerIntract sellerIntractOpen={sellerIntractOpen} setSellerIntractOpen={setSellerIntractOpen} />

            <div className="firstlook-poster">
                <img src="\images\banner\firstlookposter.png" alt="" />
                <div className="seller-quote">
                    <p className="quote-1">From creator's desk to collector's display.</p>
                    <p className="qoute-2">Turn your passion into products collectors love.</p>
                    <button className="seller-btn" onClick={() => setSellerIntractOpen(true)}>
                        Start Selling
                    </button>
                </div>

            </div>
            <div className="sell-highlights">
                <div className="highlights">
                    <img src="\images\banner\Pay Zero Referral Fee.png" alt="" />
                    <div className="hglgt-content">
                        <p>Zero Referral Fee <br /> (Under ₹1000) <br /></p>
                        <span className="sub-point" >
                            <p>&#8226; Start with 0 tension</p>
                        </span>
                    </div>

                </div>
                <div className="highlights">
                    <img src="\images\banner\Save ₹15 per orders.png" alt="" />
                    <div className="hglgt-content">
                        <p>Save₹15 per order <br /> (Under ₹300)</p>
                        <span className="sub-point">
                            <p>&#8226; Easy Ship under ₹300 Products</p>
                            <p>&#8226; ₹10 lower weight handling fee across all weight slabs.</p>
                            <p>&#8226; ₹5 lower closing fee.</p>
                        </span>
                    </div>

                </div>
                <div className="highlights">
                    <img src="\images\banner\Referral Fees.png" alt="" />
                    <div className="hglgt-content">
                        <p>4%-9.5% Lower Fees <br /> (Above ₹1,000)</p>
                        <span className="sub-point">
                            <p>&#8226; Referral fees reduced in the range of 4% to 9.5%.</p>
                            <p>&#8226; Applies to select high-demand categories, including Apparel, Shoes,</p>
                            <p>&#8226; Home, Personal care and more</p>
                        </span>
                    </div>

                </div>
                <div className="highlights">
                    <img src="\images\banner\Reduced Closing Fee.png" alt="" />
                    <div className="hglgt-content">
                        <p>Lower Closing Fees <br /> (₹20-₹26 per order)</p>
                        <span className="sub-point">
                            <p>&#8226; Sellers on Self Ship for products under ₹500 continue to benefit.</p>
                            <p>&#8226; ₹20 closing fee for products under ₹300 (₹45 → ₹20)</p>
                            <p>&#8226; ₹26 closing fee for products ₹300-₹500 (₹35 → ₹26)</p>
                        </span>
                    </div>

                </div>
            </div>
            <div className="tutorial-section">
                <h1 className="tutorial-title">How to sell on MoonCast ?</h1>
                <div className="tutorials">
                    <div className="tutorial">
                        <div className="tutorial-img">
                            <img src="\images\icons\document.png" alt="" />
                        </div>
                        <div className="tutorial-txt">
                            <h2>STEP 1: Register your account</h2>
                            <p>
                                Register on Amazon with GST/PAN details and an active bank
                                account
                            </p>
                        </div>
                    </div>
                    <div className="tutorial">
                        <div className="tutorial-img">
                            <img src="\images\icons\material-management.png" alt="" />
                        </div>
                        <div className="tutorial-txt">
                            <h2>STEP 2: Choose storage & shipping</h2>
                            <p>
                                Choose storage, packaging, and delivery options
                            </p>
                        </div>
                    </div>
                    <div className="tutorial">
                        <div className="tutorial-img">
                            <img src="\images\icons\procurement.png" alt="" />
                        </div>
                        <div className="tutorial-txt">
                            <h2>STEP 3: List your products</h2>
                            <p>
                                List your products by providing product and brand details
                            </p>
                        </div>
                    </div>
                    <div className="tutorial">
                        <div className="tutorial-img">
                            <img src="\images\icons\profit.png" alt="" />
                        </div>
                        <div className="tutorial-txt">
                            <h2>STEP 4: Complete orders & get paid</h2>
                            <p>
                                Deliver orders to customers on time and get paid within
                                7 days of delivery
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reminder">
                <div className="reminder-content">
                    <h1>Start selling <br />today</h1>

                    <p>
                        Put your creations in front of passionate collectors across India.
                    </p>

                    <button className="reminder-btn" onClick={() => setSellerIntractOpen(true)}>
                        Start Selling
                    </button>
                </div>

                <div className="reminder-image">
                    <img src="\images\banner\moonposter.png" alt="Illustration" />
                </div>
            </section>
            <Footer />
        </div>
    )
}