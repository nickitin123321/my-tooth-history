import { MouseEventHandler, MouseEvent } from 'react';
import './Tooth.css';

export type ToothProps = {
  x: number,
  y: number,
  width: number,
  height: number,
  fill: string,
  stroke: string
 setCoordinates: React.Dispatch<React.SetStateAction<{
    top: string;
    left: string;
  }>>};


const Tooth= (props: ToothProps) => {
  const handleOnClick: MouseEventHandler<SVGRectElement> = (e: MouseEvent) => {
    props.setCoordinates({top: `${e.clientY}px`, left: `${e.clientX}px`});
  }

  return <rect className='tooth' onClick={handleOnClick} rx={3} ry={3} {...props}></rect>
}
export default Tooth