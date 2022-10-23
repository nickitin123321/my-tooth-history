import './Tooltip.css';
import TooltipControls from './TooltipControls';
import { useState, MouseEventHandler, MouseEvent } from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BsXCircle } from 'react-icons/bs';

const Tooltip = ({ top, left }: { top: string; left: string }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const items = [
    <li className="content-item">HuiHui</li>,
    <li className="content-item">HuiHui</li>,
  ];

  const handleOnClick: MouseEventHandler = (e: MouseEvent) => {
    setIsInputVisible((prev) => !prev);
  };

  return (
    <div className="tooltip" style={{ top: top, left: left }}>
      <div className="cross">
        <BsXCircle className="cross" />
      </div>
      
      <ul className="content">
        {items}
        {isInputVisible && <TooltipControls />}
      </ul>
      <button className="plus" onClick={handleOnClick}>
        +
      </button>
    </div>
  );
};
export default Tooltip;
