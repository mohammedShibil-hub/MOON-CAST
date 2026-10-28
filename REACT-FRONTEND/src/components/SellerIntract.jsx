import './SellerIntract.css';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:6004';


export function SellerIntract({ sellerIntractOpen, setSellerIntractOpen }) {
    const navigate = useNavigate();

    const [authPage, setAuthPage] = useState('login');
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

    const handleContinue = async () => {
        if (!identifier.trim()) {
            toast.error("Please enter a valid email.");
            return;
        }

        try {

            const res = await axios.post(`${apiUrl}/api/auth/check-user`, {
                identifier: identifier.trim().toLowerCase()
            });

            if (res.data.exists) {
                setAuthPage("password");
            }

        } catch (err) {
            toast.error(err.response?.data?.message || "Account not found");
        }

    };

    const handleSellerLogin = async (e) => {
        e.preventDefault();

        if (!password.trim()) {
            toast.error("Please enter your password.");
            return;
        }

        try {
            const res = await axios.post(`${apiUrl}/api/auth/login`, {
                email: identifier.trim().toLowerCase(),
                password: password,
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            setSellerIntractOpen(false);

            if (
                res.data.sellerExists &&
                res.data.bankDetailsCompleted
            ) {
                navigate("/seller-dashboard");
            } else {
                navigate("/bank-details");
            }

            toast.success("Login successful!");

        } catch (err) {

            console.error("Seller login error:", err.response?.data || err);
            console.error("status:", err.response?.status);
            console.error("data:", err.response?.data);

            toast.error(err.response?.data?.message ||
                "invalid email or password. Please try again."
            );
        }
    };

    const handleSellerRegister = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("Please enter your name.");
            return;
        }

        if (!registerEmail.trim()) {
            toast.error("Please enter a valid email.");
            return;
        }

        if (!registerPassword.trim()) {
            toast.error("Please enter a password.");
            return;
        }

        if (registerPassword !== registerConfirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const res = await axios.post(`${apiUrl}/api/auth/register`, {
                name: name.trim(),
                email: registerEmail.trim().toLowerCase(),
                password: registerPassword,
            });

            // Automatically use the registered email
            setIdentifier(registerEmail.trim().toLowerCase());

            setName("");
            setRegisterEmail("");
            setRegisterPassword("");
            setRegisterConfirmPassword("");

            setAuthPage("login");

            toast.success(res.data.message || "Registration successfully!");

        } catch (err) {

            console.error("Seller registration error:", err.response?.data || err);

            toast.error(err.response?.data?.message ||
                "Registration failed. Please try again.");
        }
    }



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
                                <h2>Sign in</h2>
                                <div className="login-input">
                                    <input type="text"
                                        placeholder=""
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                    />
                                    <label htmlFor="">Enter email</label>
                                </div>
                                <button className="continue-btn" type="button" onClick={handleContinue} >Continue</button>
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
                                        <input
                                            type="text" placeholder="First and last Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="register-input">
                                        <input
                                            type="email"
                                            placeholder=""
                                            value={registerEmail}
                                            onChange={(e) => setRegisterEmail(e.target.value)}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="register-input">
                                        <input
                                            type="password"
                                            placeholder=""
                                            value={registerPassword}
                                            onChange={(e) => setRegisterPassword(e.target.value)}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="register-input">
                                        <input
                                            type="password"
                                            placeholder=""
                                            value={registerConfirmPassword}
                                            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                                        />
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                    </div>
                                    <button className="register-btn" type="button" onClick={handleSellerRegister} >
                                        Create your MoonCast account
                                    </button>
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
                        <div className="password-container">
                            <div className="password-box">
                                <h2>Enter Password</h2>
                                <div className="password-input">
                                    <input
                                        type="password"
                                        placeholder=""
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button className="sign-in-btn" onClick={handleSellerLogin} >Sign In</button>
                                <div className="forgot-password">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <p className="change-email">
                                Switch Account?
                                <span onClick={() => {
                                    setAuthPage("login");
                                    setPassword("");
                                }}>
                                    Change Email
                                </span>
                            </p>
                        </div>
                    )}
                </div>
                <ToastContainer />
            </div>
        )

    )
}
