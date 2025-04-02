
import "./Footer.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram , FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer" id="common">
            <p>© {new Date().getFullYear()} Shailesh-Padwal. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/sspadwal" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/padwal-shailesh/" target="_blank" >
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/shailesh.padwal012022" target="_blank">
                    <FaInstagram />
                </a>

                <a href="tel:+918459456812">
                    <FaWhatsapp />
                </a>

                
            </div>
        </footer>
    );
};

export default Footer;
