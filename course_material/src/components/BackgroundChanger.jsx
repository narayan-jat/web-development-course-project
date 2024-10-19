import React, { useState } from 'react';

export default function BackgroundChanger() {
  // Using useState to manage the background color
  const [bgColor, setBgColor] = useState("yellow");

  // Available colors
  const colors = ["black", "white", "wheat", "yellow", "purple", "blue", "magenta"];

  const handleColorChanger = () => {
    setBgColor(colors[Math.floor(Math.random() * 7)]);  
  };

  const mystyle = {
    backgroundColor: bgColor,
  };

  return (
    <div style={mystyle}>
      <h1>BACKGROUND CHANGER</h1>
      <button style={{ padding: "20px", fontSize: "larger" }} onClick={handleColorChanger}>
        Click me to change background
      </button>
    </div>
  );
}
