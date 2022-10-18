import './Tooth.css';

export type ToothProps = {
  x: number,
  y: number,
  width: number,
  height: number,
  fill: string,
  stroke: string };

const Tooth= (props: ToothProps) => {
  return <rect className='tooth' {...props}></rect>
}
export default Tooth