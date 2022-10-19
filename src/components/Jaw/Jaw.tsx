import React from 'react';
import Tooth from '../Tooth';
import './Jaw.css';

const TOOTH_LENGTH = {
  young: 20,
  adult: 32,
  nonWisdom: 28,
};

const Jaw = () => {
  const tooths: JSX.Element[] = [];

  //TODO(dev) refactoring: add function

  // Upper jaw.
  for (let i = 0; i < TOOTH_LENGTH.adult / 2; i++) {
    tooths.push(
      <Tooth
        x={0 + i * 15}
        y={100 + (i === 0 || i === TOOTH_LENGTH.adult / 2 - 1 ? 20 : 10)}
        height={20}
        width={10}
        fill={'white'}
        stroke={'black'}
        key={i}
      />
    );
  }

  // Lower jaw.
  for (let i = 0; i < TOOTH_LENGTH.adult / 2; i++) {
    tooths.push(
      <Tooth
        x={0 + i * 15}
        y={120 + (i === 0 || i === TOOTH_LENGTH.adult / 2 - 1 ? 40 : 50)}
        height={20}
        width={10}
        fill={'white'}
        stroke={'black'}
        key={i + 100}
      />
    );
  }

  return <g className="jaw">{tooths}</g>;
};
export default Jaw;
