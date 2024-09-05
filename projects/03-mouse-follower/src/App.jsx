import { useEffect, useState } from "react";
import "./App.css";

function FollowMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log('effect')
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    enabled && window.addEventListener("mousemove", handleMove);

    return () => {
      console.log("cleanup");
      window.removeEventListener("mousemove", handleMove);
    }
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09F",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.09s ease",
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

function App() {

  const [mounted, setMounted] = useState(true);

  return (
    <>
      {mounted && <FollowMouse />}
      <button onClick={()=>setMounted(!mounted)}>
        Toggle Mounted Component
      </button>
    </>
  );
}

export default App;
