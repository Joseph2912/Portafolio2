import "../Styles/Carrousel.css";
import React, { useRef, useEffect } from "react";

const Carrousel = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    let animationFrameId;

    const step = () => {
      scroller.scrollLeft += 1;
      if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
        scroller.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    const startAnimation = () => {
      animationFrameId = requestAnimationFrame(step);
    };

    const stopAnimation = () => {
      cancelAnimationFrame(animationFrameId);
    };

    scroller.addEventListener("mouseenter", stopAnimation);
    scroller.addEventListener("mouseleave", startAnimation);

    startAnimation();

    return () => {
      stopAnimation();
      scroller.removeEventListener("mouseenter", stopAnimation);
      scroller.removeEventListener("mouseleave", startAnimation);
    };
  }, []);

  const items = [
    { src: "https://github.com/Joseph2912/Portafolio2/blob/main/src/assets/figma.png?raw=true", alt: "Figma", label: "Figma" },
    { src: "https://github.com/Joseph2912/Portafolio2/blob/main/src/assets/spline.png?raw=true", alt: "Spline", label: "Spline" },
    {
      src: "https://github.com/Joseph2912/Portafolio2/blob/main/src/assets/illustrator.png?raw=true",
      alt: "Illustrator",
      label: "Illustrator",
    },
    { src: "https://github.com/Joseph2912/Portafolio2/blob/main/src/assets/photoshop.png?raw=true", alt: "Photoshop", label: "Photoshop" },
    {
      src: "https://github.com/Joseph2912/Portafolio2/blob/main/src/assets/after-effects.png?raw=true",
      alt: "After Effects",
      label: "After Effects",
    },
    {
      src: "https://github.com/Joseph2912/Portafolio2/blob/main/src/assets/premiere-pro.png?raw=true",
      alt: "Premiere Pro",
      label: "Premiere Pro",
    },
    { src: "https://github.com/Joseph2912/Portafolio2/blob/main/src/assets/blender.png?raw=true", alt: "Blender", label: "Blender" },
  ];

  return (
    <div className="m-scroll">
      <div className="m-scroll__title" ref={scrollerRef}>
        <ul className="scroller-inner">
          {items.map((item, index) => (
            <li id="cajon" key={`item-${index}`}>
              <img loading="lazy" src={item.src} alt={item.alt} />
              <p>{item.label}</p>
            </li>
          ))}
          {items.map((item, index) => (
            <li id="cajon" key={`item-duplicate-${index}`}>
              <img loading="lazy" src={item.src} alt={item.alt} />
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carrousel;
