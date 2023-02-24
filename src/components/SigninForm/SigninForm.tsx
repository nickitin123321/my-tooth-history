import './SigninForm.css';
import Input from '../Input';
import Button from '../Button';

const SigninForm = () => {
  return (
    <form className="signinForm">
      <Input placeholderText={'Username'} type={'text'} id={'username'} />
      <Input placeholderText={'PASSWORD'} type={'password'} id={'password'} />
      <div className="control">
        <Button btnClass={''} text={'Cancel'} />
        <Button btnClass={'blue'} text={'OK'} />
      </div>
    </form>
  );
};
export default SigninForm;
