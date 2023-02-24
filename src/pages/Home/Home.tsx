import React, { useState, useContext } from 'react';
import { MouseEventHandler, MouseEvent } from 'react';
import Container from '../../components/Container';
import Tooltip from '../../components/Tooltip';
import Head from '../../components/Head';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import SignInContext from '../../AuthContext'

type Coordinates = {
  top: string;
  left: string;
};
export type SetCoordinates = React.Dispatch<React.SetStateAction<Coordinates>>;

const INITIAL_STATE: Coordinates = {
  top: '120px',
  left: '-120%',
};

function App() {
  const [{ top, left }, setCoordinates] = useState(INITIAL_STATE);
  const navigate = useNavigate()
  const { handleAuthenticated } = useContext(SignInContext);

  const handleOnClick: MouseEventHandler<HTMLElement> = (
    e: MouseEvent<Element | SVGAElement>
  ) => {
    const target = e.target as Element | SVGAElement;
    const {className: { baseVal }, className} = target;
    console.log(target);
    if (baseVal === 'tooth') {
      setCoordinates({
        top: `${120}px`,
        left: `${10}%`,
      });
    } else if (baseVal === 'close') {
      setCoordinates(INITIAL_STATE);
    }
  };

  const handleLogOut: MouseEventHandler = (e: MouseEvent) => {
    if(handleAuthenticated){
     handleAuthenticated()
    }
    navigate('/signin')
  };

  return (
    <div onClick={handleOnClick}>
      <Head />
      {<div className={left === '-120%' ? 'visible' : 'hidden'}>Write</div>}
      <Tooltip top={top} left={left} />
      <Button text={'Logout'} onClick={handleLogOut}/>
      <Container />
    </div>
  );
}

export default App;
