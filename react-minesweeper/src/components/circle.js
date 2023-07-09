import React from "react";

export default function Circle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div 
        style={{
          height: 15,
          width: 15,
          borderRadius: 20,
          background: "red",
        }}
      ></div>
    </div>
  );
}