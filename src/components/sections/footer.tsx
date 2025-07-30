"use client";

import { motion } from "motion/react";
import * as React from "react";

export default function Footer() {
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const footerRef = React.useRef<HTMLElement>(null);
  const [fontWeight, setFontWeight] = React.useState(100);
  // const [gradientOpacity, setGradientOpacity] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current || !footerRef.current) return;

      const text = textRef.current;
      // const footer = footerRef.current;
      const textRect = text.getBoundingClientRect();
      // const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // calculating how much of the text is visible
      const textTop = textRect.top;
      const textHeight = textRect.height;
      const textVisibleHeight = Math.max(
        0,
        Math.min(textHeight, windowHeight - textTop)
      );
      const textVisibilityRatio = textVisibleHeight / textHeight;

      // calculating how much of the footer is visible
      // const footerTop = footerRect.top;
      // const footerHeight = footerRect.height;
      // const footerVisibleHeight = Math.max(
      //   0,
      //   Math.min(footerHeight, windowHeight - footerTop)
      // );
      // const footerVisibilityRatio = footerVisibleHeight / footerHeight;

      // mapping visibility ratio to font weight
      let newFontWeight = 100;
      if (textVisibilityRatio > 0) {
        if (textVisibilityRatio <= 0.2) {
          newFontWeight = 100 + (textVisibilityRatio / 0.2) * 300; // 100-400
        } else if (textVisibilityRatio <= 0.4) {
          newFontWeight = 400 + ((textVisibilityRatio - 0.2) / 0.2) * 100; // 400-500
        } else if (textVisibilityRatio <= 0.6) {
          newFontWeight = 500 + ((textVisibilityRatio - 0.4) / 0.2) * 200; // 500-700
        } else if (textVisibilityRatio <= 0.8) {
          newFontWeight = 700 + ((textVisibilityRatio - 0.6) / 0.2) * 150; // 700-850
        } else {
          newFontWeight = 850 + ((textVisibilityRatio - 0.8) / 0.2) * 50; // 850-900
        }
      }

      setFontWeight(parseFloat(newFontWeight.toFixed(2)));

      // calculating gradient opacity based on footer visibility
      // const newGradientOpacity = Math.max(
      //   0,
      //   Math.min(1, footerVisibilityRatio)
      // );
      // setGradientOpacity(parseFloat(newGradientOpacity.toFixed(2)));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className="h-80 w-full relative overflow-hidden">
      {/* background gradient layer */}
      {/* <motion.div
        style={{
          background:
            "radial-gradient(1920px 100% at 50% 100%, rgba(115, 115, 115, 1) 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
          maskImage:
            "radial-gradient(1920px 100% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)",
          opacity: gradientOpacity,
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 w-full h-96 -z-[10]"
      /> */}

      {/* noise overlay */}
      <div className="absolute bottom-0 left-0 w-full h-80 -z-[5] after:content-[''] after:fixed after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxuczoiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWNOYWx0b21zZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] after:opacity-40 after:mix-blend-overlay" />

      <motion.h1
        ref={textRef}
        style={{ fontWeight }}
        transition={{ duration: 0.1 }}
        className="absolute bottom-0 left-0 right-0 text-[210px] translate-y-[15%] tracking-tighter uppercase text-center text-8xl mx-auto text-neutral-800"
      >
        dthstlkr
      </motion.h1>
    </footer>
  );
}
