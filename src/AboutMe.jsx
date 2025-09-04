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
            My journey only started in 2024 where i discovered my passion for cybersecurity and technology during my 2nd year of College(West London College). 
            As my hobby is to train in mixed martial arts, I have developed to be more patient and disciplined. 
            This helped me to be more focused towards my goals and taking faith in god with me. 
            The first thing i have enjoyed about tech was my group project where i got to work in my project by programming a robot in Java.
            From there on ive been going to tech events and hackathons to gain experience and increase my network where i can learn from them.
          </p>
        </div>
        
        <div className="about-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">HTML/CSS</div>
            <div className="skill-item">Java</div>
            <div className="skill-item">Python</div>
          </div>
        </div>
        
        <div className="about-section">
          <h2>My Socials</h2>
          <div className="socials-grid">
            <a href="https://www.linkedin.com/in/shahid-anjum-shaikh-54161025b/" target="_blank" rel="noopener noreferrer" className="social-item">
              <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
              <span className="social-name">LinkedIn</span>
            </a>
          </div>
        </div>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </div>
  )
}

export default AboutMe
