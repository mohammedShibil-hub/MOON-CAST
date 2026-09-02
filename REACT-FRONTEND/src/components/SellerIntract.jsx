import './SellerIntract.css';
import { useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:6004';


export function SellerIntract({ sellerIntractOpen, setSellerIntractOpen }) {

    const [authPage, setAuthPage] = useState('login');

    const [identifier, setIdentifier] = useState("");

    const handleContinue = async() => {
        if (!identifier.trim()) {
            alert("Please enter a valid email or mobile number.");
            return;
        }

        try {

            const res = await axios.post(`${apiUrl}/api/auth/check-user`, {
                identifier,
            });

            if (res.data.exists) {
                setAuthPage("password");
            }

        } catch (err) {
            alert(err.response?.data?.message || "Account not found");
        }

    };



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
                                <div className="login-input">
                                    <input type="text"
                                        placeholder=""
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                    />
                                    <label htmlFor="">Enter mobile number or email</label>
                                </div>
                                <button className="continue-btn" onClick={handleContinue} >Continue</button>
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
                                    <div className="register-input">
                                        <input type="text" placeholder="First and last Name" />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="register-input">
                                        <input type="email" placeholder="" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="register-input">
                                        <input type="password" placeholder="" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="register-input">
                                        <input type="password" placeholder="" />
                                        <label htmlFor="password">Password again</label>
                                    </div>
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
                            <h1>Enter Password</h1>

                            <p>{email}</p>

                            <input
                                type="password"
                                placeholder="Password"
                            />

                            <button>Sign In</button>

                            <button
                                onClick={() => setAuthPage("login")}
                            >
                                Change Email
                            </button>
                        </>
                    )}
                </div>
            </div>
        )

    )
}
