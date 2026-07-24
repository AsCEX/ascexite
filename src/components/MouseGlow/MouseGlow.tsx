import React, { useEffect, useRef } from 'react'

function MouseGlow() {
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX1 = mouseX;
    let currentY1 = mouseY;
    let currentX2 = mouseX;
    let currentY2 = mouseY;

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animateGlows = () => {
      currentX1 += (mouseX - currentX1) * 0.05;
      currentY1 += (mouseY - currentY1) * 0.05;

      currentX2 += (mouseX - currentX2) * 0.03;
      currentY2 += (mouseY - currentY2) * 0.03;

      if (glow1Ref.current) {
        glow1Ref.current.style.transform =
          `translate3d(${currentX1}px, ${currentY1}px, 0) translate(-50%, -50%)`;
      }

      if (glow2Ref.current) {
        glow2Ref.current.style.transform =
          `translate3d(${currentX2}px, ${currentY2}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animateGlows);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animateGlows);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
        {/* <!-- Background Glow Effects --> */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
            ref={glow1Ref}
            className="absolute left-0 top-0 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl animate-glow-pulse"
        ></div>
        <div
            ref={glow2Ref}
            className="absolute left-0 top-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-glow-pulse"
            style={{animationDelay: '2s'}}
        ></div>
        </div>
    </>
  )
}

export default MouseGlow
