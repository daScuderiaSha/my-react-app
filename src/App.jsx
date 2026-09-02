import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AboutMe from './AboutMe'
import Projects from './Projects'
import './App.css'

function Home() {
  return (
    <>
      <img src="./profile.jpg" alt="Shahid Anjum Shaikh" className="profile-image" />
      <h1>Shahid Anjum Shaikh</h1>
      <div className="card">
        <Link to="/about" className="nav-link">
          <h2>About me</h2>
        </Link>
      </div>
      <div className="card">
        <a href="https://github.com/daScuderiaSha" target="_blank" rel="noopener noreferrer" className="nav-link">
          <h2>My Projects</h2>
        </a>
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
