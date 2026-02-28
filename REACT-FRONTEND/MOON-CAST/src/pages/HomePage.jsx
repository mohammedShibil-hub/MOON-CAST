import './HomePage.css';
import { Link } from 'react-router'
import { Header } from '../components/header';
import { Footer } from '../components/Footer';
import { NavIntractive } from '../components/NavIntractive';
import { lProducts } from '../../../../FRONT-END/jsData/latest';
import { tProducts } from '../../../../FRONT-END/jsData/trenting';
import { dProducts } from '../../../../FRONT-END/jsData/diorama';
import { hProducts } from '../../../../FRONT-END/jsData/hotwheels';

export function HomePage() {
    return (
        <>
            <title>MOON CAST</title>

            <Header />
            <main>
                <NavIntractive />
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
                <div className="product-grid-latest">
                    {lProducts.map((lproduct) => { 
                        return (
                            <div key={lproduct.id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={lproduct.Image[0]} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{lproduct.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label for="wishlist1" className="wishlist-label"></label>
                                </div>
                                <div className="name">{lproduct.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{lproduct.mrp}</div>
                                    <div className="offer-price">₹{lproduct.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="latest-explore">explore more</a>
                </div>
                <hr className="product-partition" />
                <div className="trending">Trending Now</div>
                <div className="product-grid-trending">
                    {tProducts.map((tproduct) => {
                        return (
                            <div key={tproduct.id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={tproduct.Image[0]} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{tproduct.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label for="wishlist1" className="wishlist-label"></label>
                                </div>
                                <div className="name">{tproduct.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{tproduct.mrp}</div>
                                    <div className="offer-price">₹{tproduct.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="trending-explore">explore more</a>
                </div>
                <hr className="product-partition" />
                <div className="trending">Hot Wheels</div>
                <div className="product-grid-hot-wheels">
                    {hProducts.map((hproduct) => {
                        return (
                            <div key={hproduct.id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={hproduct.Image} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{hproduct.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label for="wishlist1" className="wishlist-label"></label>
                                </div>
                                <div className="name">{hproduct.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{hproduct.mrp}</div>
                                    <div className="offer-price">₹{hproduct.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="hotwheels-explore">explore more</a>
                </div>
                <hr className="product-partition" />
                <div className="trending">Diorama</div>
                <div className="product-grid-diorama">
                    {dProducts.map((dproduct) => {
                        return (
                            <div key={dproduct.id} className="product-container">
                                <div className="img-box">
                                    <img className="product-image" src={dproduct.Image[0]} />
                                    <div className="best-seller">Best Seller</div>
                                    <div className="offer">{dproduct.offer}</div>
                                    <input type="checkbox" id="wishlist1" className="wishlist-checkBox" />
                                    <label for="wishlist1" className="wishlist-label"></label>
                                </div>
                                <div className="name">{dproduct.name}</div>
                                <div className="price-div">
                                    <div className="mrp">₹{dproduct.mrp}</div>
                                    <div className="offer-price">₹{dproduct.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-div">
                    <a className="explore" id="hotwheels-explore">explore more</a>
                </div>
            </main>
            <Footer />
        </>
    )
}