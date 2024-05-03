"use client"
import anime from "animejs";
import React, { useEffect } from "react";

const HexagonAnimation = () => {
  useEffect(() => {
    const anim = anime.timeline({
      loop: true,
      direction: "alternate",
    });

    anim
      .add({
        targets: "#hexagon path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuart",
        duration: 2000,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: "#hexagon #R",
        duration: 1000,
        opacity: 1,
        easing: "easeInOutQuart",
      });
  }, []);

  const textStyle = {
    opacity: 0,
    fontFamily: "system-ui, Calibre-Medium, Calibre, sans-serif",
    fontSize: 50,
    fontWeight: 400,
    letterSpacing: "4.16666603px",
  };

  const containerStyle = {
    width: "max-content",
    maxWidth: "100px",
  };

  const svgStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    margin: "0 auto",
    fill: "none",
  };

  return (
    <main className="w-screen h-screen bg-[#0a192f] flex justify-center items-center">
      <div style={containerStyle}>
        <svg
          style={svgStyle}
          id="hexagon"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g
              id="R"
              transform="translate(36, 33)"
              fill="#64FFDA"
              style={textStyle}
            >
              <text>
                <tspan x="0.141666985" y="33">
                  R
                </tspan>
              </text>
            </g>
            <path
              stroke="#64FFDA"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
            />
          </g>
        </svg>
      </div>
    </main>
  );
};

export default HexagonAnimation;
