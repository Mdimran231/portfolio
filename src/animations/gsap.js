// animations/gsap.js
import { gsap } from "gsap";

export const fadeUp = (el) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
};
