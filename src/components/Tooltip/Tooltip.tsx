import './Tooltip.css';

const Tooltip = ({ top, left }: { top: string; left: string }) => {
  return (
    <div className="tooltip" style={{ top: top, left: left }}>
      <div className="cross">&#10006;</div>
      <div className="content">Hui</div>
    </div>
  );
};
export default Tooltip;
