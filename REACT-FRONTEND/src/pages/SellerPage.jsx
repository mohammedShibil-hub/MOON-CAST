import './SellerPage.css'
import { useState } from 'react';
import { CompactHeader } from '../components/CompactHeader';
import { HamburgerIntract, WishlistIntract } from '../components/CmpIntractive';


export function SellerPage() {

    const [hamOpen, setHamOpen] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);

    return (
        <div className="seller-page">
            <title>Become Seller</title>
            <CompactHeader setHamOpen={setHamOpen} setWishlistOpen={setWishlistOpen} />
            <HamburgerIntract hamOpen={hamOpen} setHamOpen={setHamOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />

            <div className="firstlook-poster">
                <img src="" alt="" />
                <div className="seller-quote">From creator's desk to collector's display.</div>
                <p>Turn your passion into products collectors love.</p>
            </div>
        </div>
    )
}