import Head from '../../components/Head';
import SigninForm from '../../components/SigninForm';
import './SingIn.css';

const SingIn = () => {
  return (
    <>
      <Head />
      <div className="singIn sing-box">
        <SigninForm />
      </div>
    </>
  );
};
export default SingIn;
