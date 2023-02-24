import './AuthForm.css';
import Input from '../Input';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MouseEvent } from 'react';

export type Profile = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};


const AuthForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Profile>({
    mode: 'onBlur',
  });

  const usernameValidation = {
    required: 'Заполните поле',
  };

  const emailValidation = {
    required: 'Заполните поле',
    pattern: {
     value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'Неверный формат почты',
    },
  };

  const passwordValidation = {
    required: 'Заполните поле',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: 'Неверный пароль: минимум 8 символов(1 буква и 1 цифра)',
    },
  };

  const confirmPasswordValidation = {
    required: 'Заполните поле',
    validate: (value: string) =>
      value === watch('password') || 'Пароли не совпадают',
  };

  async function onSubmit(data: Profile) {
    try {
      const response = await fetch('http://localhost:2000/auth/registration', {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });
      await response.json()
      navigate('/signin')
    } catch (error){
      setError('email', {type: 'server', message: `${error}`})
    }
  }

  const handleOnClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    navigate('/signin')
  }

  return (
    <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholderText={'Username'} type={'text'} id={'username'} register={register('username', usernameValidation)} errorMessage={errors.username?.message}/>
      <Input placeholderText={'Email'} type={'text'} id={'email'} register={register('email', emailValidation)} errorMessage={errors.email?.message}/>
      <Input placeholderText={'PASSWORD'} type={'password'} id={'password'}  register={register('password', passwordValidation)} errorMessage={errors.password?.message}/>
      <Input placeholderText={'REPEAT PASSWORD'} type={'password'} id={'confirmPassword'} register={register('confirmPassword', confirmPasswordValidation)} errorMessage={errors.confirmPassword?.message}/>
      <div className="control">
        <Button btnClass={''} text={'Sign In'} onClick={handleOnClick} />
        <Button btnClass={'blue'} text={'OK'} />
      </div>
    </form>
  );
};
export default AuthForm;
