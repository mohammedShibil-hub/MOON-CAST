import './ProductDetailPage.css';
import { CompactHeader } from '../components/CompactHeader'
import { useState, useEffect } from 'react';
import { HamburgerIntract, WishlistIntract } from '../components/CmpIntractive';
import { Link } from 'react-router';
import { ProductReview } from '../components/ProductReview';
import { useParams } from 'react-router';
import { Footer } from '../components/Footer';


export function ProductDetailPage() {

    const [hamOpen, setHamOpen] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:6004/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])

    const mainImage = selectedImage || product?.images?.[0];

    if (!product) return <p>Loading...</p>

    return (
        <>
            <CompactHeader setHamOpen={setHamOpen} setWishlistOpen={setWishlistOpen} />
            <HamburgerIntract hamOpen={hamOpen} setHamOpen={setHamOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />

            <div className="card-detail-container">
                <div className="path">Home
                    <img src="\images\icons\icons8-right-arrow-90.png" alt="" />
                    {product.name}
                </div>
                <div className="product-dtl-page">
                    <div className="dtl-left-section">
                        <img src={mainImage} alt="" className="main-image" />
                        <div className="thumbnail-row">
                            {product?.images?.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="preview"
                                    onClick={() => setSelectedImage(img)}
                                    className={mainImage === img ? "active" : ""}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="dtl-right-section">
                        <div className="product-title">
                            <h1>{product.name}</h1>
                            <div className="product-brand">Brand : <Link className='brand-name'>{product.brand}</Link></div>
                        </div>
                        <div className="price-section">
                            <div className="dtl-offer">{product.offer}% OFF</div>
                            <span className="price">₹{product.price}</span>
                            <span className="dtl-mrp">₹{product.mrp}</span>
                        </div>
                        <div className="stock-quantity">
                            <div className={`stock-detail ${product.stock === 0
                                    ? "out"
                                    : product.stock <= 5
                                        ? "low"
                                        : "in"
                                }`}>
                                {product.stock === 0
                                    ? "Sold Out"
                                    : product.stock <= 5
                                        ? `Only ${product.stock} left`
                                        : "In Stock"
                                }
                            </div>
                            <div className="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="purchace-btn">
                            <button className="add-cart">Add to Cart</button>
                            <button className="buy-now">Buy It Now</button>
                        </div>
                        <div className="dtl-service-div">
                            <div className="free-delivery">
                                <img src="\images\icons\icons8-free-delivery-100.png" alt="" />
                                Free Delivery
                            </div>
                            <div className="return-div">
                                <img src="\images\icons\icons8-return-parcel-100.png" alt="" />
                                5 Day Return
                            </div>
                            <div className="cashon-delivery">
                                <img src="\images\icons\icons8-rupee-100.png" alt="" />
                                cash on Delivery
                            </div>
                            <div className="secure-delivery">
                                <img src="\images\icons\icons8-secure-delivery-100.png" alt="" />
                                Secure Package
                            </div>
                        </div>
                        <div className="emi-box">
                            <div className="emi-head">
                                <strong>EMI</strong> starts at ₹1. No cost EMI available
                            </div>
                            <div className="finance-box">
                                <div className="fdrl-bank">
                                    <img src="\images\icons\Federal_Bank_Logo.png" alt="" />
                                    <div className="bank-detail">
                                        Federal Bank Credit Card EMI <br />
                                        <span>Processing Fee of ₹99 by Bank</span>
                                    </div>
                                </div>
                                <div className="hdfc-bank">
                                    <img src="\images\icons\HDFC-BANK.png" alt="" />
                                    <div className="bank-detail">
                                        HDFC Bank Credit Card EMI <br />
                                        <span>Processing Fee of ₹99 by Bank</span>
                                    </div>
                                </div>
                                <div className="icic-bank">
                                    <img src="\images\icons\ICIC-bank.png" alt="" />
                                    <div className="bank-detail">
                                        ICIC Bank Credit Card EMI <br />
                                        <span>Processing Fee of ₹99 by Bank</span>
                                    </div>
                                </div>
                                <div className="bajaj-finance">
                                    <img src="\images\icons\bajaj-finance.png" alt="" />
                                    <div className="bank-detail">
                                        BAJAJ Finance EMI <br />
                                        <span>Processing Fee of ₹99 by Bank</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-specification-review">
                    <div className="product-description">
                        <h3>Discription</h3>
                        <ul>
                            <li>{`${product.name} ${product.description}`}</li>
                            <li>Manufactured by {product.brand}</li>
                            <li>{`${product.scale} ${product.category}`}</li>
                        </ul>
                    </div>
                    <ProductReview />
                </div>
                <div className="similar-products-card">
                    <h2>More to Collect</h2>
                    
                </div>
                <Footer />
            </div>

        </>
    )
}