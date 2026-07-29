import './SellerIntract.css';
import { useState } from 'react';
export function SellerIntract({ sellerIntractOpen, setSellerIntractOpen }) {

    const [authPage, setAuthPage] = useState('login');

    return (
        sellerIntractOpen && (
            <div className="seller-overlay">
                <div className="seller-popup">
                    <div className="seller-close" onClick={() => setSellerIntractOpen(false)}>
                        <img src="/images/icons/icons8-multiply-96.png" alt="seller-close" />
                    </div>
                    <div className="brand-logo-auth">
                        <img src="/images/icons/moon-cast-brand-logo.png" alt="" />
                    </div>
                    {authPage === "login" && (
                        <>
                            <div className="login-box">
                                <h1>Sign in</h1>
                                <input type="text" placeholder="Enter mobile number or email" />
                                <button className="continue-btn">Continue</button>
                                <p className="login-terms">
                                    By continuing, you agree to MoonCast's
                                    <a href="#"> Conditions of Use</a> and
                                    <a href="#"> Privacy Notice</a>.
                                </p>
                                <div className="help">
                                    <a href="#">Need help?</a>
                                </div>
                            </div>

                            <div className="divider">
                                <span>New to MoonCast?</span>
                            </div>
                            <button className="create-btn" onClick={() => setAuthPage("register")}>
                                Create your MoonCast account
                            </button>
                        </>
                    )}

                    {authPage === "register" && (
                        <>
                            <div className="register-container">
                                <div className="register-box">
                                    <h2>Create account</h2>
                                    <input type="text" placeholder="First and last name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Password again" />

                                    <button className="register-btn" >Create your MoonCast account</button>
                                    <p className="regi-terms">
                                        By continuing, you agree to MoonCast's
                                        <a href="#"> Conditions of Use</a> and
                                        <a href="#"> Privacy Policy</a>.
                                    </p>
                                </div>
                                <p className="regi-signin">
                                    Already have an account?
                                    <span onClick={() => setAuthPage("login")} > Sign in</span>
                                </p>
                            </div>
                        </>
                    )}

                    {authPage === "password" && (
                        <>

                        </>
                    )}
                </div>
            </div>
        )

    )
}
