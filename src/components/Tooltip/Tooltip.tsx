import './Tooltip.css';
import TooltipControls from './TooltipControls';
import { useState,  MouseEventHandler, MouseEvent } from 'react';

const Tooltip = ({ top, left }: { top: string; left: string }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const items = [<li className='content-item'>HuiHui</li>, <li className='content-item'>HuiHui</li>];

  const handleOnClick: MouseEventHandler = (e: MouseEvent) =>{
    setIsInputVisible((prev)=> !prev);
  }

  return (
    <div className="tooltip" style={{ top: top, left: left }}>
      <button className="cross">&#10006;</button>
      <ul className="content">
       {items}
       {isInputVisible && <TooltipControls/>}
      </ul>
      <button className='plus' onClick={handleOnClick}>⊕</button>
    </div>
  );
};
export default Tooltip;
