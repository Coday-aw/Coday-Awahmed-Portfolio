"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-50px",
  });
  const contactInView = useInView(contactRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        scrollTo={scrollTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      {/* Hero Section */}
      <Intro scrollTo={scrollTo} />

      {/* About Section */}
      <About aboutRef={aboutRef} aboutInView={aboutInView} />

      {/* Projects Section */}
      <Projects projectsRef={projectsRef} projectsInView={projectsInView} />

      <Skills />

      {/* Contact Section */}
      <Contact contactRef={contactRef} contactInView={contactInView} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
