import React, { useState } from 'react';
import Container from './components/Container';
import Tooltip from './components/Tooltip';
import { MouseEventHandler, MouseEvent } from 'react';

type Coordinates = {
  top: string;
  left: string;
};
export type SetCoordinates = React.Dispatch<React.SetStateAction<Coordinates>>;

const INITIAL_STATE: Coordinates = {
  top: '-99999px',
  left: '-99999px',
};

function App() {
  const [{ top, left }, setCoordinates] = useState(INITIAL_STATE);

  const handleOnClick: MouseEventHandler<HTMLElement> = (e: MouseEvent<Element | SVGAElement>) => {
    const target = e.target as Element | SVGAElement;
    const { className: { baseVal }, className } = target;

    if (baseVal === 'tooth') {
      setCoordinates({
        top: `${e.clientY - 50}px`,
        left: `${e.clientX - 50}px`,
      });
    } else if (className === 'cross') {
      setCoordinates(INITIAL_STATE);
    }
  };

  return (
    <div onClick={handleOnClick}>
      <Tooltip top={top} left={left} />
      <Container />
    </div>
  );
}

export default App;
