import './Footer.css'
import logo_footer from '../img/logo-footer.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="left">
                    <h3>About Us</h3>
                    <p>Welcome to our website, a wonderful place to explore and learn how  to cook like a pro.</p>
                    <div className="enter-email">
                        <input type="text" placeholder='Enter your email'/>
                        <button>Send</button>
                    </div>
                    <div className="policy">
                        <img src={logo_footer} alt="Logo footer" />
                        <h5>2023 Cherify Company</h5>
                        <h5>Terms of Servicel Privacy Policy</h5>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </>
    )
}

export default Footer