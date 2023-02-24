import Head from '../../components/Head';
import SignInForm from '../../components/SigninForm';
import './SingIn.css';

const SingIn = () => {
  return (
    <>
      <Head />
      <div className="singIn sing-box">
        <SignInForm />
      </div>
    </>
  );
};
export default SingIn;
