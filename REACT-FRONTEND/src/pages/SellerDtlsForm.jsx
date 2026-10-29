import './SellerDtlsForm.css';
import { CompactHeader } from '../components/CompactHeader';
import { useState } from 'react';
import axios from 'axios';
import { HamburgerIntract, WishlistIntract } from '../components/CmpIntractive';
import { Footer } from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:6004';

export function SellerDtlsForm() {
    const [hamOpen, setHamOpen] = useState(false)
    const [sellerStep, setSellerStep] = useState(2)
    const [wishlistOpen, setWishlistOpen] = useState(false)
    const currentStep = sellerStep;
    const progress = ((currentStep - 1) / 3) * 100;
    const [bankData, setBankData] = useState({
        accountHolderName: '',
        accountNumber: '',
        confirmAccountNumber: '',
        ifscCode: '',
        bankName: '',
        branchName: '',
        pancardNumber: '',
        gstNumber: ''
    });


    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setBankData({
            ...bankData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (
            !bankData.accountHolderName ||
            !bankData.accountNumber ||
            !bankData.confirmAccountNumber ||
            !bankData.ifscCode ||
            !bankData.bankName
        ) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (bankData.accountNumber !== bankData.confirmAccountNumber) {
            toast.error('Account numbers do not match.');
            return;
        }

        try {
            setLoading(true);

            const token = localStorage.getItem('token');

            console.log("TOKEN:", token);

            const res = await axios.post(`${API_URL}/api/seller-details/register`, bankData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success(res.data.message || "Bank details submitted successfully.");
            setSellerStep(3);

        } catch (error) {
            console.error('Error submitting bank details:', error);
            toast.error(
                error.response?.data?.message ||
                "Failed to submit bank details."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bank-details-container">
            <title>Seller Bank Details</title>

            <CompactHeader setHamOpen={setHamOpen} setWishlistOpen={setWishlistOpen} />
            <HamburgerIntract hamOpen={hamOpen} setHamOpen={setHamOpen} />
            <WishlistIntract wishlistOpen={wishlistOpen} setWishlistOpen={setWishlistOpen} />

            <div className="bank-details-box">
                <div className="seller-progress">
                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="progress-steps">
                        <div className={`progress-levels
                            ${currentStep > 1 ? "completed" : ""}
                            ${currentStep === 1 ? "active" : ""}
                        `}>
                            <div className="level-marks">
                                {currentStep > 1 && <img src="/images/icons/icons8-checked-100.png" />}
                                {currentStep === 1 && <div className="active-dot"></div>}
                            </div>
                            <div className="level-label">Account Creation</div>
                        </div>
                        <div className={`progress-levels
                            ${currentStep > 2 ? "completed" : ""}
                            ${currentStep === 2 ? "active" : ""}
                        `}>
                            <div className="level-marks">
                                {currentStep > 2 && <img src="/images/icons/icons8-checked-100.png" />}
                                {currentStep === 2 && <div className="active-dot"></div>}
                            </div>
                            <div className="level-label">Bank Details</div>
                        </div>
                        <div className={`progress-levels
                            ${currentStep > 3 ? "completed" : ""}
                            ${currentStep === 3 ? "active" : ""}
                        `}>
                            <div className="level-marks">
                                {currentStep > 3 && <img src="/images/icons/icons8-checked-100.png" />}
                                {currentStep === 3 && <div className="active-dot"></div>}
                            </div>
                            <div className="level-label">Shipping & Pickup Info</div>
                        </div>
                        <div className={`progress-levels
                            ${currentStep > 4 ? "completed" : ""}
                            ${currentStep === 4 ? "active" : ""}
                        `}>
                            <div className="level-marks">
                                {currentStep > 4 && <img src="/images/icons/icons8-checked-100.png" />}
                                {currentStep === 4 && <div className="active-dot"></div>}
                            </div>
                            <div className="level-label">Store Details</div>
                        </div>
                    </div>
                </div>
                {sellerStep === 2 && (
                    <div className="bank-dtls-container">
                        <div className="bank-dtls">
                            <h2>Bank Details</h2>
                            <p>
                                Add your bank details to receive
                                payments from your sales.
                            </p>
                            <form className="bank-details-form" onSubmit={handleSubmit}>

                                <div className="bank-input">
                                    <input
                                        type="text"
                                        name="accountHolderName"
                                        value={bankData.accountHolderName}
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                    <label>
                                        Account Holder Name
                                    </label>
                                </div>

                                <div className="bank-input">
                                    <input
                                        type="text"
                                        name="accountNumber"
                                        value={bankData.accountNumber}
                                        onChange={handleChange}
                                        placeholder=" "
                                        inputMode="numeric"
                                    />
                                    <label>
                                        Account Number
                                    </label>
                                </div>

                                <div className="bank-input">
                                    <input
                                        type="text"
                                        name="confirmAccountNumber"
                                        value={bankData.confirmAccountNumber}
                                        onChange={handleChange}
                                        placeholder=" "
                                        inputMode="numeric"
                                    />
                                    <label>
                                        Confirm Account Number
                                    </label>
                                </div>

                                <div className="bank-input">
                                    <input
                                        type="text"
                                        name="ifscCode"
                                        value={bankData.ifscCode}
                                        onChange={handleChange}
                                        placeholder=" "
                                        maxLength="11"
                                    />
                                    <label>IFSC Code</label>
                                </div>

                                <div className="bank-input">
                                    <input
                                        type="text"
                                        name="bankName"
                                        value={bankData.bankName}
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                    <label>Bank Name</label>
                                </div>
                                <button className="bank-continue-btn" type="submit" disabled={loading}>
                                    {loading ? "Submitting..." : "Continue"}
                                </button>
                            </form>
                        </div>
                        <div className="legal-procedure-container">
                            <div className="legal-procedures">
                                <h2>legal-procedures</h2>
                                <p>Enter your PAN Card and GST details for verification</p>
                                <form action="" className="legal-input-form">
                                    <div className="legal-input">
                                        <input
                                            type="text"
                                            name="pancardNumber"
                                            value={bankData.pancardNumber}
                                            onChange={handleChange}
                                            placeholder=" "
                                        />
                                        <label>
                                            PAN Card Number
                                        </label>
                                    </div>
                                    <div className="legal-input">
                                        <input
                                            type="text"
                                            name="gstNumber"
                                            value={bankData.gstNumber}
                                            onChange={handleChange}
                                            placeholder=" "
                                        />
                                        <label>
                                            GST Number
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )};
                {sellerStep === 3 && (
                    <div className="shipping-pickup-container">
                        <h2>Shipping & Pickup Info</h2>
                    </div>
                )};
                {sellerStep === 4 && (
                    <div className="store-details-container">
                        <h2>Store Details</h2>
                    </div>
                )};
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}

