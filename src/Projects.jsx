import { Link } from 'react-router-dom'
import './App.css'

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-content">
        <h1>My Projects</h1>
        
        <div className="project-grid">
          <div className="project-card">
            <h3>Personal Website</h3>
            <p>This beautiful personal portfolio website built with React and modern CSS.</p>
            <div className="project-tech">React • CSS3 • Vite</div>
          </div>
          
          <div className="project-card">
            <h3>Java Application</h3>
            <p>A desktop application built with Java for data management and analysis.</p>
            <div className="project-tech">Java • Swing • MySQL</div>
          </div>
        </div>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </div>
  )
}

export default Projects
