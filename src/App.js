import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const trafficLiteColors = {
    red: {
      backgroundColor: "red",
      duration: 3000,
      next: "yellow",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 2000,
      next: "green",
    },
    green: {
      backgroundColor: "green",
      duration: 2000,
      next: "red",
    },
  };

  function App({ backgroundColor }) {
    return (
      <div className="row">
        {" "}
        <div
          className="circle"
          style={{ position: "relative", backgroundColor }}
        />
      </div>
    );
  }
  const initialColor = "red";

  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => {
    const { duration, next } = trafficLiteColors[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="App">
      <div className={["outer-box"].filter((colors) => !!colors).join(" ")}>
        <div className="blackbox">
          {Object.keys(trafficLiteColors).map((color) => (
            <App
              key={color}
              backgroundColor={
                color === currentColor
                  ? trafficLiteColors[color].backgroundColor
                  : undefined
              }
            />
          ))}
        </div>
      </div>
      {/* <div className="row">
            <div className="circle" style={{ position: "relative" }}></div>
          </div>
          <div className="row">
            <div className="circle"></div>
          </div> */}
    </div>
  );
}

export default App;
