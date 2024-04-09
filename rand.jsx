import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = Math.ceil(minValue);
    const max = Math.floor(maxValue);
    const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(generatedNumber);
  };

  return (

    <div>
      <h2>Random Number Generator</h2>

      <div>
        <label>Minimum Value : </label>
        <input type="number" value={minValue} onChange={(e) => setMinValue(parseInt(e.target.value))}/>
      </div>

      <div>
        <label>Maximum Value : </label>
        <input type="number" value={maxValue} onChange={(e) => setMaxValue(parseInt(e.target.value))}  />
      </div>

      <br/>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default RandomNumberGenerator;
