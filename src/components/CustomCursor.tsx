"use client";
import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      {/* Render your icon at the mouse position */}
      <FaLocationArrow
      className="-rotate-60 absolute z-50 text-blue-600"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none", // so it doesn’t block clicks
          fontSize: "24px",
          transition: "transform 0.05s ease",
        }}
      />
    </>
  );
}
