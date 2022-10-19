import React, { useState } from 'react';
import Container from './components/Container';
import Tooltip from './components/Tooltip';
import { MouseEventHandler, MouseEvent } from 'react';

type Coordinates = {
  top: string;
  left: string;
};
export type SetCoordinates = React.Dispatch<React.SetStateAction<Coordinates>>;

function App() {
  const initialState: Coordinates = {
    top: '-9999px',
    left: '-99999px',
  };

  const [{ top, left }, setCoordinates] = useState(initialState);

  const handleOnClick: MouseEventHandler<HTMLElement> = (e: MouseEvent) => {
    const target = e.target as Element | SVGAElement;
    const { className } = target;
    const base = className.baseVal;

    console.log(className);

    if (base === 'tooth') {
      setCoordinates({
        top: `${e.clientY - 50}px`,
        left: `${e.clientX - 50}px`,
      });
    } else if (className === 'cross') {
      setCoordinates(initialState);
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
