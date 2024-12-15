"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Import images with optimal naming
import heroLarge from "../../../public/photos/hero.jpg";
import heroSmall from "../../../public/photos/herosmall.jpg";

// Import the FlipWords component
import { FlipWords } from "../components/flip-words";
import Button from "../components/Button";

const Hero = () => {
  // State to track screen size for responsive image
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Words to be animated with FlipWords component
  const words = [" Виза", " ВНЖ", " Аренда"];
  // Responsive screen size detection effect
  useEffect(() => {
    // Function to handle screen resize
    const handleResize = () => {
      // Adjust breakpoint as needed (900px in this case)
      setIsSmallScreen(window.innerWidth <= 900);
    };

    // Perform initial screen size check
    handleResize();

    // Add event listener for window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="relative top-[5.5rem] text-4xl font-regular">
      {/* Hero Image Container */}
      <div className="w-full h-[90svh] flex justify-center pt-6">
        <Image
          // Conditionally select image based on screen size
          src={isSmallScreen ? heroSmall : heroLarge}
          alt="Hero background image showcasing Portugal"
          // Ensure image covers the container
          objectFit="cover"
          // Consistent image dimensions
          width={1640}
          height={1640}
          // Responsive rounded corners
          className="md:rounded-[5rem] rounded-[3rem]"
          // Improve performance and accessibility
          priority
          placeholder="blur"
        />
      </div>

      {/* Overlay Content Container */}
      <div className="absolute -top-0 left-0 right-0 w-full h-full flex justify-center items-center max-w-[80%] mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Animated Flip Words */}
          <div className="text-white font-bold md:text-8xl text-6xl pb-10">
            <FlipWords words={words} />в Португалии <br /> без стресса и проблем
          </div>
          {/* Static Text */}
 
          <Button text="Свяжитесь с нами" />
        </div>
      </div>
    </div>
  );
};

export default Hero;