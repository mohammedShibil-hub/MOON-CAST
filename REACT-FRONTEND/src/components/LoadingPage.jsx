import "./LoadingPage.css";

export function LoadingPage() {
    return (
        <div className="moon-loading-container">
            <div className="moon-loading-content">
                <div className="loading-box">
                    <div className="loading-track">
                        <img src="\images\icons\Minimalist Roadscape.png" alt="" />
                        <img src="\images\icons\Minimalist Roadscape.png" alt="" />
                    </div>
                    <div className="brand-van">
                        <img src="/images/icons/van-without-tire.png" alt="" />
                        <img src="/images/icons/tire.png" alt="" />
                    </div>
                    
                </div>
                <p>Preparing Your Garage...</p>
            </div>
        </div>
    );
}