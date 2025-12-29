import "./Hero.css";
import {Link, useNavigate} from 'react-router-dom'



export default function Hero() {
    const navigate=useNavigate();
  return (
    <div className="hero">
      <div className="overlay" />

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">M-SHOW</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li><Link to="/home">Movies</Link></li>
          <li>Gallery</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
        <button className="btn-nav">Get Free Month</button>
      </nav>

      {/* CONTENT */}
      <div className="hero-content">
        <span className="tag">Action • Adventure</span>

        <h1>PACIFIC RIM</h1>

        <div className="meta">
          <span>PG-13</span>
          <span>2h 11min</span>
          <span>2013</span>
          <span>⭐ 6.9 IMDb</span>
        </div>

        <div className="buttons">
          <button className="btn-outline">Watch Trailer</button>
          <button className="btn-primary">▶ Play Movie</button>
        </div>

        <div className="credits">
          <p><strong>Director:</strong> Guillermo del Toro</p>
          <p><strong>Stars:</strong> Rinko Kikuchi, Idris Elba, Charlie Hunnam</p>
        </div>
      </div>
    </div>
  );
}
