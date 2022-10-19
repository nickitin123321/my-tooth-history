import './Tooth.css';

export type ToothProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
};

const Tooth = (props: ToothProps) => {
  return <rect className="tooth" rx={3} ry={3} {...props}></rect>;
};
export default Tooth;
