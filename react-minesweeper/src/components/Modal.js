//import { Alert } from "bootstrap";
import React, { useState, useEffect } from "react";

// IF YOU LOSE POPUP

export default function Modal({ reset }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);
  return (
    <div
      style={{
        opacity: render ? 1 : 0,
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      <div id="gameOverImage"></div>
      <div onClick={() => alert('GAME OVER', reset()) } className="tryAgain">
        Play Again?
      </div>
    </div>
  );
}