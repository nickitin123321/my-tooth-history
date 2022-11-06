import './SingUp.css';
import Head from '../../components/Head';

import AuthForm from '../../components/AuthForm';

const SingUp = () => {
  return (
    <>
      <Head />
      <div className="singUp">
        <AuthForm />
      </div>
    </>
  );
};
export default SingUp;
