import './ProductPage.css';
import { CompactHeader } from '../components/CompactHeader';
import { useEffect, useState } from 'react';
import { HamburgerIntract, WishlistIntract } from '../components/CmpIntractive';
import { Link, useLocation } from 'react-router';
import { Footer } from '../components/Footer';
const API_URL = import.meta.env.REACT_APP_BACKEND_API_URL || 'http://localhost:6004';



export function ProductPage() {
    const location = useLocation();

    const [hamOpen, setHamOpen] = useState(false)
    const [wishlistOpen, setWishlistOpen] = useState(false)
    const [products, setProducts] = useState([])

    const fetchProducts = async (query) => {
        const res = await fetch(
            `${API_URL}/api/products${query}`
        );

        return res.json();
    }

    useEffect(() => {
        fetchProducts(location.search)
            .then(data => setProducts(data));
    }, [location.search]);

    const query = new URLSearchParams(location.search);

    const latest = query.get("latest");
    const trending = query.get("trending");
    const brand = query.get("brand");
    const category = query.get("category");

    let heading = "Products";

    if (latest) heading = "Latest";
    else if (trending) heading = "Trending";
    else if (brand) heading = `${brand}`;
    else if (category) heading = `${category}`;

    return (
        <>
            <title>products</title>

            <CompactHeader setHamOpen={setHamOpen} setWishlistOpen={setWishlistOpen} />
            <HamburgerIntract hamOpen={hamOpen} setHamOpen={setHamOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />

            <div className="supporting-div"></div>
            <div className="product-head">
                <div className="product-category">{heading}</div>
                <div className="product-filter">
                    <img src="\images\icons\icons8-sorting-arrows-96.png" alt="" />
                    <img src="\images\icons\icons8-filtering-96.png" alt="" />
                    <img src="\images\icons\icons8-table-of-content-96.png" alt="" />
                </div>
            </div>
            <div className="productPage-container">
                {products.map(product => (
                    <Link key={product._id} className="box-div" to={`/product/${product._id}`} >
                        <div className="pics">
                            <img src={product.images[0]} />
                            <div className="P-offer">{product.offer}%</div>
                        </div>
                        <div className="discription">
                            {product.name}
                        </div>
                        <div className="amound">
                            <div className="product-mrp">₹{product.mrp}</div>
                            <div className="offer-price">₹{product.price}</div>
                        </div>
                        <div className="added">
                            <img src="/images/icons/checkmark.png" alt="add-checkmark" />
                            Added
                        </div>
                        <button className="js-addCart" data-product-id="${product.id}">Add to Cart</button>
                    </Link>
                ))}
            </div>
            <Footer />
        </>
    )
}