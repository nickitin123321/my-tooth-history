import './Tooltip.css';
import TooltipControls from './TooltipControls';
import { useState, MouseEventHandler, MouseEvent } from 'react';

const Tooltip = ({ top, left }: { top: string; left: string }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const items = [
    <li className="content-item">HuiHui</li>,
    <li className="content-item">HuiHui</li>,
  ];

  const handleOnClick: MouseEventHandler = (e: MouseEvent) => {
    setIsInputVisible((prev) => !prev);
  };

  //need to make switching bitween tooltip and 'select tooth'
  return (
    <div className="tooltip" style={{ top: top, left: left }}>
      <div className="cross btn-cross">
        <svg className="close">
          <line
            className="close"
            x1="12"
            y1="12"
            x2="34"
            y2="34"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            className="close"
            x1="34"
            y1="12"
            x2="12"
            y2="34"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <ul className="content">
        {items}
        {isInputVisible && <TooltipControls />}
      </ul>
      <svg className="plus btn-cross" onClick={handleOnClick}>
        <line
          x1="8"
          y1="23"
          x2="38"
          y2="23"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="23"
          y1="8"
          x2="23"
          y2="38"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};
export default Tooltip;
