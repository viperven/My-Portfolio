import React from "react";
import "./Typed.css";
import Typewriter from "typewriter-effect";

function Typed() {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "MERN Stack Developer",
            "I am passionate about crafting digital experiences",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
}

export default Typed;
