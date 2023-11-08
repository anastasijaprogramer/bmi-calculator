import './App.css';
import { useState, useMemo } from "react";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 140;

function App()
{
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  const handleWeightChange = (e) =>
  {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) =>
  {
    setHeight(e.target.value);
  };

  const output = useMemo(() =>
  {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height])

  return (

    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>

        <p className="slider-output">Weight: {weight} kg</p>
        <input
          onChange={handleWeightChange}
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="220" />

        <p className="slider-output">Height: {height} cm</p>
        <input
          onChange={handleHeightChange}
          className="input-slider"
          type="range"
          step="1"
          min="140"
          max="250" />

        <div className="output-section">
          <p>Your BMI is</p>
          <p className="output">{output}</p>
        </div>
      </div>
    </main>

  );
}

export default App;
