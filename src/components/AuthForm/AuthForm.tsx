import './AuthForm.css';
import Input from '../Input';
import Button from '../Button';

const AuthForm = () => {
  return (
    <form className="authForm">
      <Input placeholderText={'Email'} type={'text'} />
      <Input placeholderText={'PASSWORD'} type={'password'} />
      <Button />
    </form>
  );
};
export default AuthForm;
