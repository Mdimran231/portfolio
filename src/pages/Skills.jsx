import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Skills.css";

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Cards entry animation
    tl.fromTo(
      ".skill-cards",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );

    // Skill bars loading animation
    tl.fromTo(
      ".skill-progress",
      { width: "0%" },
      { width: (index, target) => target.dataset.level, duration: 1, stagger: 0.1, ease: "power2.out" },
      "-=0.5" // Pehle animation ke thoda pehle start hoga
    );
  }, []);

  const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "90%" },
      { name: "HTML / CSS", level: "95%" },
      { name: "JavaScript", level: "85%" },
      { name: "Tailwind CSS", level: "80%" } // 👈 Added
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", level: "85%" },
      { name: "Spring Boot", level: "80%" },
      { name: "MySQL", level: "75%" },
      { name: "MongoDB", level: "80%" }
    ]
  },
  {
    title: "Tools & DevOps", // 👈 Renamed
    skills: [
      { name: "Git & GitHub", level: "90%" },
      { name: "Postman", level: "80%" },
      { name: "AWS Basics", level: "70%" },
      { name: "IntelliJ IDEA", level: "85%" },
      { name: "Docker Basics", level: "65%" } // 👈 Added
    ]
  },
  {
    title: "Soft Skills", // 👈 New Section
    skills: [
      { name: "Problem Solving", level: "90%" },
      { name: "Communication", level: "85%" },
      { name: "Team Work", level: "88%" }
    ]
  }
];

  return (
    <section className="skills-sections" ref={sectionRef}>
      {/* Dynamic Background */}
      <div className="skills-bg-orb orb-top"></div>
      <div className="skills-bg-orb orb-bottom"></div>

      <h1 className="skills-title">
        My <span className="highlight">Skills</span> 💻
      </h1>
      <p className="skills-subtitle">Technologies I work with to build modern applications</p>

      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-cards" key={index}>
            <h2>{category.title}</h2>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    {/* data-level ensures GSAP reads the percentage properly */}
                    <div
                      className="skill-progress"
                      data-level={skill.level}
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}