import './AboutUs.css'
import { Link } from 'react-router'

export function AboutUs() {
    return (
        <>
            <title>aboutus</title>
            <div className="about-section">
                <div className="about-container">
                    <h1 className="about-title">About Us</h1>
                    <Link className="about-close" to="/">
                        <img src="/images/icons/icons8-multiply-96.png" alt="about-close" />
                    </Link>
                    <p className="welcome-p">
                        Welcome to <strong>Moon Diecast</strong>
                        — where passion meets precision.
                    </p>
                    <p className="about-p">
                        Our journey began with one belief : every great car deserves to be admired,
                        even in miniature form. What started as a small collection of diecast models
                        soon evolved into a dedicated platform for enthusiasts, collectors, and car lovers across India.
                        At <strong>Moon Diecast</strong>, we work tirelessly to bring authentic scale models that capture
                        the soul,
                        craftsmanship, and engineering of real automobiles. Each piece is selected for its detail,
                        quality, and uniqueness — because a collector deserves nothing less than perfection.
                        We aim to build the most trusted and premium diecast destination in India.
                        A place where collectors can discover iconic models, rare pieces, and timeless classics
                        — all under one roof. Our vision is to create a community where passion for cars is celebrated,
                        shared, and preserved.
                    </p>
                    <h3>Our Collection</h3>
                    <p className="collection-p">
                        From JDM legends to European supercars, from American muscle to vintage classics,
                        our collection represents the best of automotive history. We partner with reputed brands and
                        manufacturers that maintain high precision in casting, painting, and detailing, ensuring every model
                        is a true collector’s item.
                        Whether you are expanding your display shelf or looking for a special collectible,
                        our models deliver an experience that goes beyond just owning a miniature car — they add character,
                        nostalgia, and pride to your collection.
                    </p>
                    <h3>More Than a Store — A Community</h3>
                    <p className="community-p">
                        Moon Diecast is built for collectors, by collectors.We understand the excitement of receiving
                        a new model, the thrill of finding a rare piece, and the pride of building a dream collection.
                        Through our platform, we aim to connect enthusiasts, share knowledge, and celebrate the beautiful
                        world of miniature machines.Whether you are a beginner, an experienced collector, or someone searching for a meaningful gift,
                        we welcome you to explore our world. With every model you add to your collection,
                        you carry a piece of automotive history — and we’re honored to be part of that experience.

                        Welcome to Moon Diecast —
                        Where every model tells a story.
                    </p>
                    <h3>Our Promise to You</h3>
                    <p className="promise-p">Customer satisfaction is at the core of what we do. We ensure:</p>
                    <div className="promise-content">
                        <div className="promise-img">
                            <img src="/images/icons/premium-quality-logo.png" alt="promise-" />
                                <div>Premium-quality diecasts</div>
                        </div>
                        <div className="promise-img">
                            <img src="/images/icons/shield-pack.png" alt="promise-" />
                                <div>Safe and secure packaging</div>
                        </div>
                        <div className="promise-img">
                            <img src="/images/icons/fast-delivery.png" alt="promise-" />
                                <div>Fast dispatch & reliable delivery</div>
                        </div>
                        <div className="promise-img">
                            <img src="/images/icons/customer-service.png" alt="promise-" />
                                <div>Clear communication and friendly support</div>
                        </div>
                        <div className="promise-img">
                            <img src="/images/icons/original_tag.png" alt="promise-" />
                                <div>Authentic, original licensed products</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}