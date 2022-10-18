import './Container.css';
import Jaw from '../Jaw';

const Container = ({setCoordinates}:{setCoordinates: React.Dispatch<React.SetStateAction<{
  top: string;
  left: string;
}>>
}) => {
  return <svg className='container' height={400} width={800} display={'block'}>
    <Jaw setCoordinates={setCoordinates}/>
    </svg>
}
export default Container