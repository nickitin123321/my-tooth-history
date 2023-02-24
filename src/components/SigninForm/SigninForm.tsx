import './SigninForm.css';
import Input from '../Input';
import Button from '../Button';
import { useContext } from 'react';
import SignInContext from '../../AuthContext'
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';

type UserData = {
  username: string;
  password: string;
}

const usernameValidation = {
  required: 'Заполните поле',
};
const passwordValidation = {
  required: 'Заполните поле',
};

const SignInForm = () => {
  const { handleAuthenticated } = useContext(SignInContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserData>({
    mode: 'onBlur',
  });


  const onSubmit = async (data: UserData) => {
    const response = await fetch('http://localhost:2000/auth/login', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(data),
    });
    const result = await response.text();

    if (response.status === 200) {
      localStorage.setItem('token', `Bearer ${result}`);
      navigate('/')
      if (handleAuthenticated) {
        handleAuthenticated();
      }
    } else {
      setError('password', {
        type: 'server',
        message: `${result}`,
      });
    }
  };

  return (
    <form className="signinForm" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholderText={'Username'}
        type={'text'}
        id={'username'}
        errorMessage={errors.username?.message}
        register={register('username', usernameValidation)}
      />

      <Input placeholderText={'PASSWORD'}
        type={'password'}
        id={'password'}
        errorMessage={errors.password?.message}
        register={register('password', passwordValidation)}
      />

      <div className="control">
        <Button btnClass={''} text={'Cancel'} />
        <Button btnClass={'blue'} text={'OK'} />
      </div>
    </form>
  );
};
export default SignInForm;
