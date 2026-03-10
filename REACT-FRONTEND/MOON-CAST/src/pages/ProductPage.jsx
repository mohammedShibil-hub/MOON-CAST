import './ProductPage.css';
import { CompactHeader } from '../components/CompactHeader';
import { useState } from 'react';
import { HamburgerIntract, WishlistIntract } from '../components/CmpIntractive';



export function ProductPage() {
    const [hamOpen, setHamOpen] = useState(false)
    const [wishlistOpen, setWishlistOpen] = useState(false)

    return (
        <>
            <title>products</title>
            
            <CompactHeader setHamOpen={setHamOpen} setWishlistOpen={setWishlistOpen}/>
            <HamburgerIntract hamOpen={hamOpen} setHamOpen={setHamOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />

            <div className="supporting-div"></div>
            <div className="productPage-container">
                <div className="box-div">
                    <div className="pics">
                        <img src="/images/product/1-24-dodge-challenger.jpg" />
                            <div className="P-offer">- 63%</div>
                    </div>
                    <div className="discription">
                        Dodge Challenger SRT Hellcat 1:24 Diecast
                    </div>
                    <div className="amound">
                        <div className="product-mrp">2999</div>
                        <div className="offer-price">₹ 1103</div>
                    </div>
                    <div className="added">
                        <img src="/images/icons/checkmark.png" alt="add-checkmark" />
                            Added
                    </div>
                    <button className="js-addCart" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </>
    )
}