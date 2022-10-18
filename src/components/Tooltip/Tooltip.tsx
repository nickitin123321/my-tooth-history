import './Tooltip.css'

const Tooltip = ({top, left}: {top: string, left: string}) => {
  return <div className='tooltip' style={{top: top, left: left}}>Hui</div>
}
export default Tooltip