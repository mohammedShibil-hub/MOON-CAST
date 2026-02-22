import './Intro.css'

export function Intro() {
    return (
        <div className="intro" id="logo-intro">
            <div className="logo-container">
                <img className="image js-img" src="/images/icons/moon.png" />
                <img className="image js-img" src="/images/icons/van5.png" />
                <img className="image js-img" src="/images/icons/tire.png" />
                <img className="image js-img" src="/images/icons/die.png" />
                <img className="image js-img" src="/images/icons/cast.png" />
            </div>
            <div className="invisible-box"></div>
        </div>
    )
}