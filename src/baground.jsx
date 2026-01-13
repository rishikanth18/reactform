import React, { useState } from "react";

export default function UseStated() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Blue");

  return (
    <div style={{ backgroundColor: "lightblue", minHeight: "100vh", padding: "20px" }}>
      <button value={count} onClick={() => setCount(count + 1)}>
        Click me to add
      </button>

      <h1>{count}</h1>

      <button
        value={count}
        onClick={() => {
          setCount(count - 1);
          if (count <= 0) {
            setCount(0);
          }
        }}
      >
        Click me to sub the value
      </button>

      <h1>My fav color is {color}</h1>

      <button value={color} onClick={() => setColor("Red")}>
        Red
      </button>
    </div>
  );
}
