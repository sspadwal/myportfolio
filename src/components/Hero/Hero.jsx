import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ParticleBackground from '../ParticleCanvas/ParticleBackground';

function Hero() {
    return (
        <div id="home" className="hero common">
            <ParticleBackground />
            <img src={profile_img} alt="Shailesh Padwal's profile" />
            <h1>
                <span>I'm Shailesh Padwal,</span> Full Stack Developer
            </h1>
            <p>
                I’m passionate about building end-to-end digital solutions, weaving seamless front-end experiences with robust back-end systems using modern technologies.
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        Connect With Me
                    </AnchorLink>
                </div>
                <div className="hero-resume">
                    <a
                        href="/shailesh-padwal-resume.pdf"
                        download="Shailesh_Padwal_Resume.pdf"
                        aria-label="Download Shailesh Padwal's resume"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;