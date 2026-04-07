import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// Icons import kar rahe hain
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaGitAlt, FaAws, FaDocker 
} from "react-icons/fa";
import { 
  SiSpringboot, SiMongodb, SiPostman, SiTailwindcss, SiIntellijidea 
} from "react-icons/si";
import { MdOutlinePsychology, MdGroups, MdAccessTime } from "react-icons/md";
import "./Skills.css";

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".skill-cards", 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    tl.fromTo(".skill-progress", 
      { width: "0%" }, 
      { width: (index, target) => target.dataset.level, duration: 1, stagger: 0.1, ease: "power2.out" }, 
      "-=0.5"
    );
  }, []);

  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "90%", icon: <FaReact color="#61DBFB" /> },
        { name: "HTML / CSS", level: "95%", icon: <FaHtml5 color="#E34F26" /> },
        { name: "JavaScript", level: "85%", icon: <FaJs color="#F7DF1E" /> },
        { name: "Tailwind CSS", level: "80%", icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: "85%", icon: <FaJava color="#007396" /> },
        { name: "Spring Boot", level: "80%", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "MySQL", level: "75%", icon: <FaDatabase color="#4479A1" /> },
        { name: "MongoDB", level: "80%", icon: <SiMongodb color="#47A248" /> }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", level: "90%", icon: <FaGitAlt color="#F05032" /> },
        { name: "Postman", level: "80%", icon: <SiPostman color="#FF6C37" /> },
        { name: "AWS Basics", level: "70%", icon: <FaAws color="#FF9900" /> },
        { name: "IntelliJ IDEA", level: "85%", icon: <SiIntellijidea color="#FE315D" /> },
        { name: "Docker", level: "65%", icon: <FaDocker color="#2496ED" /> }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: "90%", icon: <MdOutlinePsychology color="#A855F7" /> },
        { name: "Communication", level: "85%", icon: <MdGroups color="#6366F1" /> },
        { name: "Time Management", level: "88%", icon: <MdAccessTime color="#EC4899" /> }
      ]
    }
  ];

  return (
    <section className="skills-sections" ref={sectionRef}>
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
                    <span className="skill-name-wrapper">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level={skill.level}></div>
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