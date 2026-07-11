import './ProductReview.css'

export function ProductReview() {
    return (
        <div className="product-review-container">
            <h3>Customer Reviews</h3>
            <div className="star-rating-container">
                <div className="top-rating-section">
                    <div className="star-rating-section">
                        <div className="star-rating">
                            <h1>4.6</h1>
                            <div className="star-imgs">
                                <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                                <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                                <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                                <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                                <img src="\images\icons\icons8-star-half-empty-100.png" alt="" />
                            </div>
                            <div className="total-count" >3 review</div>
                        </div>
                        <div className="rating-counts">
                            <div className="rating-5">
                                5
                                <img src="\images\icons\icons8-star-filled-100 (4).png" alt="" />
                                <div></div>
                                2
                            </div>
                            <div className="rating-4">
                                4
                                <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                                <div></div>
                                1
                            </div>
                            <div className="rating-3">
                                3
                                <img src="\images\icons\icons8-star-filled-100 (1).png" alt="" />
                                <div></div>
                                0
                            </div>
                            <div className="rating-2">
                                2
                                <img src="\images\icons\icons8-star-filled-100 (2).png" alt="" />
                                <div></div>
                                0
                            </div>
                            <div className="rating-1">
                                1
                                <img src="\images\icons\icons8-star-filled-100 (3).png" alt="" />
                                <div></div>
                                0
                            </div>
                        </div>
                    </div>
                    <div className="customer-images-section">
                        <div>Customer Photos</div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div className="write-review">
                        <input type="text" placeholder="How does this model stand in your collection?" />
                        <button>Write a review</button>
                    </div>
                </div>

            </div>
            <div className="review-header">
                Reviews
                <div className="review-hdr-right">
                    <button>All</button>
                    <button>Latest</button>
                </div>
            </div>
            <div className="product-reviews">
                <div className="customer-review">
                    <div className="customer-account-panel">
                        <div className="customer-dp">
                            R
                        </div>
                        <div className="commenter-name">
                            Rameesh chandra
                            <div className="review-posted-time">2 days ago</div>
                        </div>
                    </div>
                    <div className="customer-star-review">
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                    </div>
                    <div className="review-container">
                        <h4 className="review-head">Good quality 👍</h4>
                        <p className="review-content">
                            I like this car because of the colour and opening doors and
                            dicki and my favourite thing is that this car has a working light l like this car very much 😁😁
                        </p>
                    </div>
                    <div className="helpful-box">
                        Is this helpful ?
                        <img src="\images\icons\icons8-like-100.png" alt="" />
                        <div className="like-count">0</div>
                        <img src="\images\icons\icons8-dislike-100.png" alt="" />
                        <div className="dislike-count">0</div>
                    </div>
                </div>
                <div className="customer-review">
                    <div className="customer-account-panel">
                        <div className="customer-dp">
                            S
                        </div>
                        <div className="commenter-name">
                            Shibil mohammed
                            <div className="review-posted-time">1 month ago</div>
                        </div>
                    </div>
                    <div className="customer-star-review">
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                    </div>
                    <div className="review-container">
                        <h4 className="review-head">Perfect for car dash</h4>
                        <p className="review-content">
                            It fits perfectly in my car dashboard.i thought it will come without
                            battery but surprisingly the battery was also inside it.loved it
                        </p>
                    </div>
                    <div className="helpful-box">
                        Is this helpful ?
                        <img src="\images\icons\icons8-like-100.png" alt="" />
                        <div className="like-count">2</div>
                        <img src="\images\icons\icons8-dislike-100.png" alt="" />
                        <div className="dislike-count">0</div>
                    </div>
                </div>
                <div className="customer-review">
                    <div className="customer-account-panel">
                        <div className="customer-dp">
                            N
                        </div>
                        <div className="commenter-name">
                            Nishva sana
                            <div className="review-posted-time">1 year ago</div>
                        </div>
                    </div>
                    <div className="customer-star-review">
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100.png" alt="" />
                        <img src="\images\icons\icons8-star-filled-100 (3).png" alt="" />
                    </div>
                    <div className="review-container">
                        <h4 className="review-head">Very good quality product 😀</h4>
                        <p className="review-content">
                            I'm not sure that car come or not ,or the quality was good or not , but the paint and metal quality is good that's why I gave 4 stars.
                            Product delivers very late that's why I cut 1 star . Overall your service and product is good , I'm absolutely satisfied. 👍
                        </p>
                    </div>
                    <div className="helpful-box">
                        Is this helpful ?
                        <img src="\images\icons\icons8-like-100.png" alt="" />
                        <div className="like-count">0</div>
                        <img src="\images\icons\icons8-dislike-100.png" alt="" />
                        <div className="dislike-count">1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}