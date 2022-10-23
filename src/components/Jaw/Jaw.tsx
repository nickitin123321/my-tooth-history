import React from 'react';
import Tooth from '../Tooth';
import './Jaw.css';

const TOOTH_LENGTH = {
  young: 20,
  adult: 32,
  nonWisdom: 28,
};

const fillTooths = (tooths: JSX.Element[], y0: number, y1: number, y2: number, x0: number,
  {height, width, fill, stroke}: {height: number, width: number, fill: string, stroke: string}) => {
  for (let i = 0; i < TOOTH_LENGTH.adult / 2; i++) {
    tooths.push(
      <Tooth
        x={x0 + i * 15}
        y={y0 + (i === 0 || i === TOOTH_LENGTH.adult / 2 - 1 ? y1 : y2)}
        height={height}
        width={width}
        fill={fill}
        stroke={stroke}
        key={i}
      />
    );
  }
}

const Jaw = () => {
  const tooths: JSX.Element[] = [];

  // Upper jaw.
  fillTooths(tooths, 370, 20, 10, 4, {height: 20, width: 10, fill: 'white', stroke: 'black' });

  // Lower jaw.
  fillTooths(tooths, 400, 40, 50, 4, {height: 20, width: 10, fill: 'white', stroke: 'black' });

  return <g className="jaw">{tooths}</g>;
};
export default Jaw;
