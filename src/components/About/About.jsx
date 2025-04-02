import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';

function About() {
    const skills = [
        { name: 'HTML & CSS', level: '90%' },
        { name: 'JavaScript', level: '80%' },
        { name: 'React', level: '85%' },
        { name: 'Node.js', level: '75%' },
        { name: 'Express.js', level: '75%' },
        { name: 'Python', level: '50%' },
    ];

    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Pattern decoration" />
            </div>

            <div className="about-sections">
                {/* Left Section - Paragraph */}
                <div className="about-left">
                    <div className="about-para">
                        <p>
                            As a dedicated Full Stack Developer, I specialize in building dynamic and scalable web applications using React, JavaScript, and Python.
                        </p>
                        <p>
                            With a strong focus on performance and user experience, I craft seamless, efficient, and responsive interfaces that enhance usability and engagement.
                        </p>
                        <p>
                            Passionate about continuous learning, I stay ahead of industry trends and emerging technologies to deliver cutting-edge solutions that drive innovation.
                        </p>
                    </div>
                </div>

                {/* Right Section - Skills */}
                <div className="about-right">
                    <div className="about-skills">
                        {skills.map((skill, index) => (
                            <div className="about-skill" key={index}>
                                <p>{skill.name}</p>
                                <div className="progress-bar">
                                    <span style={{ width: skill.level }}></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;