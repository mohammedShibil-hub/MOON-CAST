import './Footer.css'

export function Footer() {
    return (
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
    )
}