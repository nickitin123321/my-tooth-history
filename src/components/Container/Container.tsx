import './Container.css';
import Jaw from '../Jaw';

const Container = () => {
  return (
    <svg className="container" height={200} width={250} display={'block'}>
      <Jaw />
    </svg>
  );
};
export default Container;
