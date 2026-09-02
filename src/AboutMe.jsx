import { Link } from 'react-router-dom'
import './App.css'

function AboutMe() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-section">
          <h2>Who I Am</h2>
          <p>
            Hello! I'm Shahid Anjum Shaikh, I am a computer science student at Brunel University of London.
            uhh i love food, badminton, muay thai, photography and tech.
            I am not as cool as any other tech worker or student - so i just made this website to hopefully showcase my projects - its on GitHub.
            Heading to 3rd year with a big project in which i want to showcase towards the end. 
            *HINT* it's related to health.
          </p>
        </div>
        
        <div className="about-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">HTML/CSS</div>
            <div className="skill-item">Java</div>
            <div className="skill-item">Python</div>
            <div classname="skill-item">MySQL</div>
            <div classname="skill-item">H2 Database</div>
          </div>
        </div>
        
        <div className="about-section">
          <h2>My Socials and GitHub</h2>
          <div className="socials-grid">
            <a href="https://www.linkedin.com/in/shahid-anjum-shaikh-54161025b/" target="_blank" rel="noopener noreferrer" className="social-item">
              <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
              <span className="social-name">LinkedIn</span>
            </a>
            <a href="https://github.com/shasflippedtea" target="_blank" rel="noopener noreferrer" className="social-item">
            <img src="github.png" alt="GitHub" className="Social-icon" height="30px"/>
            <span className="social-name">GitHub</span>
            </a>
          </div>
        </div>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </div>
  )
}

export default AboutMe
