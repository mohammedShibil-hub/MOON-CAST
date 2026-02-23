import './ContactUs.css'
import { Link } from 'react-router'

export function ContactUs() {
    return (
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <h1 className="title">Contact Us</h1>
                    <Link className="contact-close" to="/">
                        <img src="/images/icons/icons8-multiply-96.png" alt="contact-close" />
                    </Link>
                    <p className="subtitle">
                        We love hearing from fellow diecast car enthusiasts! Our team will reply within
                        <strong>24hours</strong>.
                    </p>
                    <div className="contact-form">
                        <form>
                            <label>Your Name</label>
                            <input type="text" placeholder="Enter your name" required />

                            <label>Your Email</label>
                            <input type="email" placeholder="Enter your email" required />

                            <label>Phone Number</label>
                            <input type="text" placeholder="Enter your number" />

                            <label>Message</label>
                            <textarea placeholder="Write your message..." required></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="store-info">
                        <h2>Store Information</h2>
                        <p>
                            <strong>Moon Cast</strong><br />
                            3rd floor, LULU mall, Govindapuram, Kozhikode(Calicut), Kerala
                            676521
                        </p>

                        <p><strong>Customer Support:</strong><span className="num-span" > +91 90088 55421</span><br />
                            <strong>Email:</strong> <span className="email-span" >support@mooncast.com</span></p>

                        <p>
                            <strong>Business Hours:</strong><br />
                            Mon – Sat : 10 AM – 10 PM<br />
                            <span className="sun-span" >Sunday : Closed</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}