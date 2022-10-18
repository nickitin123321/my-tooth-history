import React, {useState} from 'react';
import Container from './components/Container';
import Tooltip from './components/Tooltip';

function App() {
  const [{top, left}, setCoordinates] = useState({top: '-9999px', left: '-99999px'});


  return (
    <>
    <Tooltip top={top} left={left} />
    <Container setCoordinates={setCoordinates}/>
    </>
  );
}

export default App;
