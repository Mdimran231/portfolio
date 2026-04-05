import fruitImg from "../assets/fruit.jpg";
import serviceImg from "../assets/service.png";
import campusImg from "../assets/campus.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import aiBuilderImg from "../assets/Ai-website.jpg";
import coolingImg from "../assets/ac.png";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern React portfolio with GSAP animations and dark mode.",
    tech: ["React", "GSAP", "CSS"],
    github: "https://github.com/Mdimran231/portfolio",
    live: "https://imran-portfolio-livid.vercel.app/",
    image: portfolioImg
  },

  {
    id: 2, // 👈 Isko top pe rakhte hain!
    title: "AI Web Builder",
    description: "An AI-powered tool that generates intuitive and responsive frontend sites instantly using Google Gemini API prompts.",
    tech: ["React", "Gemini API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Mdimran231/web_builder", // 👈 Link update kar lena
    live: "https://imran-builder.netlify.app/", // 👈 Link update kar lena
    image: aiBuilderImg
  },
{
    id: 5, // Unique ID de di humne
    title: "Cooling Refrigeration Patna",
    description: "A commercial full-stack service website for a refrigeration business with online booking and admin dashboard.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Mdimran231/ac-service-website", // Agar backend ya frontend ka repo private hai toh apna main github link dal sakte hain
    live: "https://coolingrefrigerationpatna.in",
    image: coolingImg
  }
  ,
  {
    
  id: 4,
  title: "Smartbook",
  description: "A full-stack service booking platform with RBAC, secure JWT authentication, and dedicated Admin & User dashboards for managing bookings in real time.",
  
  tech: ["React", "Spring Boot", "MongoDB", "JWT", "Axios"],
  
  github: "https://github.com/Mdimran231/Smartbook-Fullstack",
  live: "https://smart-book-2026.netlify.app/",
  image: serviceImg
}
  ,
  {
    id: 5,
    title: "Campus Connection",
    description: "A full stack campus connection platform with user authentication and messaging.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Mdimran231/Group_projects",
    live: "https://campusconnect-frontend-iui5.onrender.com/",
    image: campusImg
  }
  ,{
    id: 6,
    title: "Fruit Selling",
    description: "A responsive fruit selling website built with React and GSAP animations.",
    tech: ["HTML", "React", "GSAP", "CSS"],
    github: "https://github.com/Mdimran231/fruit_selling",
    live: "https://fruits-selling-tcj.netlify.app/",
    image: fruitImg
  }
];