import './CheckoutPage.css'
import { Link } from 'react-router'

export function CheckoutPage() {
    return (
        <div className="checkoutPage">
            <title>Checkout</title>
            <header>
                <div className="left-section">
                    <Link to="/"><img src="/images/icons/Picsart_25-08-19_15-17-59-2482.png" /></Link>
                </div>
                <div className="middle-section">
                    <div className="check">Checkout (<span className="count">5 items</span>)</div>
                </div>
            </header>
            <div className="review">
                Your garage is almost ready
            </div>
            <main>
                <div className="grid-checkout">
                    <div className="js-order-container">
                        <div className="order-box">
                            <div className="time">Delivery date: Tuesday, December 9</div>
                            <div className="grid">
                                <div className="pic">
                                    <img src="/images/product/toyota-tacoma-beige.jpg" />
                                </div>
                                <div className="center1">
                                    <div className="description">Toyota Tacoma sand 1:64 GCD diecast scale model</div>
                                    <div className="amound">₹ 3649</div>
                                    <div className="quantity">Quantity: 2</div>
                                    <div className="button"> Update</div>
                                    <div className="button"> Delete</div>
                                </div>
                                <div className="option">
                                    <div className="op">Choose a delivery option:</div>
                                    <div className="op1">
                                        <input type="radio" />
                                            <div className="details">
                                                <div className="day1"></div>
                                                <div className="cost"></div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-summery">
                        <div className="h1">Order Summary</div>
                        <div className="summery-row">
                            <div>Items (6):</div>
                            <div className="summery-money">$60.90</div>
                        </div>
                        <div className="summery-row">
                            <div>Shipping & handling:</div>
                            <div className="summery-money">$9.99</div>
                        </div>
                        <div className="summery-row">
                            <div className="tax">Total before tax:</div>
                            <div className="summery-money1">$70.89</div>
                        </div>
                        <div className="summery-row">
                            <div>Estimated tax (10%):</div>
                            <div className="summery-money">$7.09</div>
                        </div>
                        <div className="summery-row1">
                            <div>Order total:</div>
                            <div className="summery-money">$77.98</div>
                        </div>
                        <a className="button-order" href="/amazon/placedPage/placeorder.html">
                            <button>Place your order</button>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}