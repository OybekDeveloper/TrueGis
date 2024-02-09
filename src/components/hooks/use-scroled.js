import { useEffect, useState } from "react";

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutDiv = document.getElementById("about");

      if (aboutDiv) {
        const aboutDivTop = aboutDiv.getBoundingClientRect().top;
        const aboutDivHeight = aboutDiv.clientHeight;

        // Check if the about div is fully visible in the viewport
        if (
          aboutDivTop >= 0 &&
          aboutDivTop + aboutDivHeight <= window.innerHeight
        ) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        // Log the scrolled value to the console
        console.log("Scrolled:", scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return scrolled;
};
