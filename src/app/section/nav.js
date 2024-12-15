"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navLinksRef = useRef([]);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Desktop scroll animations
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: navLinks[index], className: "active" },
        onEnter: () => {
          gsap.to(navLinks[index], {
            scale: 1.2,
            duration: 0.2,
            ease: "elastic.out(1, 0.3)",
          });
        },
        onLeave: () => {
          gsap.to(navLinks[index], {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to(navLinks[index], {
            scale: 1.2,
            duration: 0.2,
            ease: "elastic.out(1, 0.3)",
          });
        },
        onLeaveBack: () => {
          gsap.to(navLinks[index], {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current && hamburgerRef.current) {
      const menuLinks = navLinksRef.current;
      
      if (isMobileMenuOpen) {
        // Hamburger to X animation
        gsap.to(hamburgerRef.current.querySelector('.line1'), {
          duration: 0.3
        });
        gsap.to(hamburgerRef.current.querySelector('.line2'), {
          opacity: 0,
          duration: 0.5
        });

        // Menu slide-in animation
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            ease: "power3.out",
            display: "flex"
          }
        );

        gsap.fromTo(
          menuLinks,
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.5, 
            stagger: 0.1,
            ease: "back.out(1.7)"
          }
        );
      } else {
        // X back to Hamburger animation
        gsap.to(hamburgerRef.current.querySelector('.line1'), {
          rotation: 0,
          y: 0,
          duration: 0.3
        });
        gsap.to(hamburgerRef.current.querySelector('.line2'), {
          opacity: 1,
          duration: 0.3
        });
        gsap.to(hamburgerRef.current.querySelector('.line3'), {
          rotation: 0,
          y: 0,
          duration: 0.3
        });

        // Menu slide-out animation
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(mobileMenuRef.current, { display: "none" });
          }
        });
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="main-tool-bar mx-auto max-w-[1640px] fixed top-0 left-0 right-0 w-full h-28 backdrop-blur-md text-black flex items-center justify-between md:px-[50px] px-[30px] z-50">
        {/* Brand Name */}
        <div className="text-3xl md:text-4xl lg:text-6xl font-bold">Reloc</div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-20 text-xl md:text-2xl">
          {mobileLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link font-thin hover:text-primary transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          ref={hamburgerRef}
          className="md:hidden hamburger-menu"
          onClick={toggleMobileMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line className="line1" x1="3" y1="12" x2="21" y2="12"></line>
            <line className="line2" x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className={`fixed w-[300px] h-[80svh] m-auto top-24 rounded-3xl inset-0 bg-white/40 backdrop-blur-xl  z-40 flex-col items-center justify-center space-y-8 text-3xl ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {mobileLinks.map((link, index) => (
          <a 
            key={link.href}
            ref={(el) => navLinksRef.current[index] = el}
            href={link.href} 
            className="mobile-nav-link opacity-0"
            onClick={toggleMobileMenu}
          >
            {link.label}
          </a>
        ))}
      </div>

{/*      
      <section id="home" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl">Home</h1>
      </section>
      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl">About Us</h1>
      </section>
      <section id="services" className="h-screen  flex items-center justify-center">
        <h1 className="text-4xl">Services</h1>
      </section>
      <section id="contact" className="h-screen  flex items-center justify-center">
        <h1 className="text-4xl">Contact</h1>
      </section> */}
    </> 
  );
};

export default Navbar;  