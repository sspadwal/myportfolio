import './Hero.css'
// import profile from '../../assets/profile_img.svg'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
    return (
        <div id="home" className='hero'>

            <img src={profile_img} alt="heroimage" />
            <h1> <span> I&apos;m Shailesh Padwal, </span> Frontend Developer</h1>
            <p>Passionate about crafting smooth and interactive web experiences, turning ideas into reality with modern technologies.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">
                    <a href="/public/shailesh-padwal-resume.pdf" download="Shailesh_Padwal_Resume.pdf">
                        My Resume
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Hero
