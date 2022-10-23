import React, { useState } from 'react';
import { MouseEventHandler, MouseEvent } from 'react';
import Container from './components/Container';
import Tooltip from './components/Tooltip';
import Head from './components/Head';

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

  const handleOnClick: MouseEventHandler<HTMLElement> = (
    e: MouseEvent<Element | SVGAElement>
  ) => {
    const target = e.target as Element | SVGAElement;
    const { className: { baseVal }, className } = target;
    console.log(target)
    if (baseVal === 'tooth') {
      setCoordinates({
        top: `${120}px`,
        left: `${39}px`,
      });
    } else if (baseVal === 'cross' || className === 'cross' || baseVal === '') {
      //такой бэйсвол у элементов из react-icons
      setCoordinates(INITIAL_STATE);
    }
  };


  return (
    <div onClick={handleOnClick}>
      <Head />
      <Tooltip top={top} left={left} />
      <Container />
    </div>
  );
}

export default App;
