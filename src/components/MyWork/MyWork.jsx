import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

function MyWork() {
    return (
        <div id="work" className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="theme" />
            </div>
            <div className="mywork-timeline">
                <div className="timeline-line"></div>
                {mywork_data.map((work, index) => (
                    <div key={index} className={`mywork-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="card-wrapper">
                            <div className="card-image">
                                <img src={work.w_img} alt={work.w_name} />
                                <div className="image-overlay">
                                    <a href={work.w_url} target="_blank" rel="noopener noreferrer" className="visit-link">
                                        Visit Project
                                    </a>
                                </div>
                            </div>
                            <div className="card-details">
                                <h3>{work.w_name}</h3>
                                <p>{work.w_desc}</p>
                                <div className="tech-stack">
                                    {work.w_tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">#{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card-connector"></div>
                    </div>
                ))}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
    );
}

export default MyWork;