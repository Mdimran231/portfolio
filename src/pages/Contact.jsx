import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {

  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    gsap.from(".contact-card", {
      opacity: 0,
      y: 50,
      duration: 1
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ypfjpk3",
      "template_j9zeu5a",
      formRef.current,
      "HFu-8-tmLDOVYenff"
    ).then(
      () => {
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 3000);
      },
      (error) => {
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section className="contact-section">

      <h1>Get In Touch</h1>
      <p>Let’s build something amazing together 🚀</p>

      <div className="contact-cards">

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-extra">

          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin /></a>
          </div>

          <a
            className="whatsapp-btn"
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

        </div>

      </div>

      {success && <div className="success-popup">Message Sent Successfully 🚀</div>}

    </section>
  );
}
