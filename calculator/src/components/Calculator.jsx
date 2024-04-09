import React, { useState } from 'react';
import '../styles/Calculator.css';

function Calculator() {
  const [result, setResult] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleOperatorClick = (op) => {
    if (currentNumber !== '') {
      setOperator(op);
      setResult(currentNumber);
      setCurrentNumber('');
    }
  };

  const handleClearClick = () => {
    setResult('');
    setCurrentNumber('');
    setOperator('');
  };

  const handleEqualClick = () => {
    if (operator && currentNumber !== '') {
      switch (operator) {
        case '+':
          setResult(parseFloat(result) + parseFloat(currentNumber));
          break;
        case '-':
          setResult(parseFloat(result) - parseFloat(currentNumber));
          break;
        case '*':
          setResult(parseFloat(result) * parseFloat(currentNumber));
          break;
        case '/':
          setResult(parseFloat(result) / parseFloat(currentNumber));
          break;
        default:
          break;
      }
      setCurrentNumber('');
      setOperator('');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{currentNumber !== '' ? currentNumber : result}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
    </div>
  );
}

export default Calculator;
