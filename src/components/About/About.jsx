import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';


function About() {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="about-img" />
            </div>

            <div className="about-sections">
                {/* Left Section - Paragraph */}
                <div className="about-left">
                    <div className="about-para">
                        <p>As a dedicated Full Stack Developer, I specialize in building dynamic and scalable web applications using React, JavaScript, and Python.</p>
                        <p>With a strong focus on performance and user experience, I craft seamless, efficient, and responsive interfaces that enhance usability and engagement.</p>
                        <p>Passionate about continuous learning, I stay ahead of industry trends and emerging technologies to deliver cutting-edge solutions that drive innovation.</p>
                       

                    </div>
                </div>

                {/* Right Section - Skills Progress Bar */}
                <div className="about-right">
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <div className="progress-bar"><span style={{ width: "90%" }}></span></div>
                        </div>

                        <div className="about-skill">
                            <p>JAVASCRIPT</p>
                            <div className="progress-bar"><span style={{ width: "80%" }}></span></div>
                        </div>

                        <div className="about-skill">
                            <p>REACT</p>
                            <div className="progress-bar"><span style={{ width: "85%" }}></span></div>
                        </div>

                        <div className="about-skill">
                            <p>NODEJS</p>
                            <div className="progress-bar"><span style={{ width: "75%" }}></span></div>
                        </div>

                        <div className="about-skill">
                            <p>EXPRESSJS</p>
                            <div className="progress-bar"><span style={{ width: "75%" }}></span></div>
                        </div>

                        <div className="about-skill">
                            <p>PYTHON</p>
                            <div className="progress-bar"><span style={{ width: "50%" }}></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
