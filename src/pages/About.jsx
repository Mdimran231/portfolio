import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./About.css";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Isse ye ensure hoga ki animation ke baad opacity 1 (poori bright) hi rahegi
    gsap.fromTo(
      ".glass-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="about-bg-orb orb-left"></div>
      <div className="about-bg-orb orb-right"></div>

      <div className="about-container">
        
        <h1 className="about-title">
          About <span className="highlight">Me</span>
        </h1>

        {/* 1. BIO CARD */}
        <div className="glass-card">
          <p>
            Hello! I'm <strong>Md Imran Ahmad</strong>, a passionate 
            <strong> Full Stack Developer</strong> with a strong foundation 
            in Java, Spring Boot, React, and modern web technologies.
          </p>

          <p>
            I enjoy building scalable web applications, designing clean user 
            interfaces, and solving real-world problems through code. My goal 
            is to create efficient, maintainable, and high-performance solutions.
          </p>

          <p>
            I have hands-on experience in developing REST APIs, integrating 
            frontend with backend systems, and working with databases like MySQL and MongoDB.
          </p>
        </div>

        {/* 2. SKILLS CARD */}
        <div className="glass-card">
          <h2>Core Skills</h2>

          <div className="skills-wrapper">
            
            <div className="skill-box">
              <h4>⚡ Frontend</h4>
              <div className="skill-pills">
                <span>React</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="skill-box">
              <h4>⚡ Backend</h4>
              <div className="skill-pills">
                <span>Java</span>
                <span>Spring Boot</span>
              </div>
            </div>

            <div className="skill-box">
              <h4>⚡ Database</h4>
              <div className="skill-pills">
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div className="skill-box">
              <h4>⚡ Tools</h4>
              <div className="skill-pills">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Postman</span>
                <span>IntelliJ IDEA</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. JOURNEY CARD */}
        <div className="glass-card">
          <h2>My Journey</h2>
          <p>
            My journey in software development started with a curiosity about 
            how websites and applications work. Over time, I developed projects 
            ranging from portfolio websites to full-stack applications.
          </p>
        </div>

      </div>
    </section>
  );
}