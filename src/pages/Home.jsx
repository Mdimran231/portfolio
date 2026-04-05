import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom"; 
import profileImg from "../assets/imran.png";
import resume from "../assets/imran.pdf";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero-wrapper">
      {/* Background Animated Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="hero-glass-container">
        
        <div className="hero-text">
          <span className="welcome-badge">Welcome to my universe ✨</span>
          
          <h1>
            Hi, I'm <span className="highlight">Md Imran Ahmad</span>
          </h1>

          <h2 className="typing">
            <TypeAnimation
              sequence={[
                "Full Stack Developer 🚀",
                2000,
                "Java & Spring Boot Developer ⚡",
                2000,
                "React Frontend Specialist 💻",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="hero-desc">
            I build scalable and high-performance web applications
            using React, Java, Spring Boot & MySQL.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              🚀 View Projects
            </Link>

            <a href={resume} download className="btn-outline">
              📄 Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="glass-frame">
            <div className="glow-circle"></div>
            <img src={profileImg} alt="Md Imran Ahmad" />
          </div>
        </div>

      </div>
    </section>
  );
}