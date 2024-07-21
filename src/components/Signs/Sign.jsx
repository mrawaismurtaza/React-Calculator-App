import React from 'react';
import './Sign.css';

export default function Sign({ onButtonClick }) {
  return (
    <div className="signs">
      <div className="rows">
        <button onClick={() => onButtonClick('sin(')}>sin</button>
        <button onClick={() => onButtonClick('cos(')}>cos</button>
        <button onClick={() => onButtonClick('tan(')}>tan</button>
      </div>
      <div className="rows">
        <button onClick={() => onButtonClick('asin(')}>sin<sup>-1</sup></button>
        <button className='w-100' onClick={() => onButtonClick('acos(')}>cos<sup>-1</sup></button>
        <button onClick={() => onButtonClick('atan(')}>tan<sup>-1</sup></button>
      </div>
      <div className="rows">
        <button className='fs-2' onClick={() => onButtonClick('^')}>x<sup>y</sup></button>
        <button onClick={() => onButtonClick('^2')}>x<sup>2</sup></button>
        <button onClick={() => onButtonClick('^1')}>x<sup>1</sup></button>
      </div>
    </div>
  );
}
