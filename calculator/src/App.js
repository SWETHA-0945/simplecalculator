import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'AC') {
      setDisplay('');
    } else if (value === 'DEL') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="display">
          <input type="text" value={display} readOnly />
        </div>
        <div className="button-container">
          <button onClick={() => handleButtonClick('AC')} className="operator">AC</button>
          <button onClick={() => handleButtonClick('DEL')} className="operator">DEL</button>
          <button onClick={() => handleButtonClick('%')} className="operator">%</button>
          <button onClick={() => handleButtonClick('/')} className="operator">/</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')} className="operator">*</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')} className="operator">-</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')} className="operator">+</button>
          <button onClick={() => handleButtonClick('00')}>00</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')} className="equaloperator">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
