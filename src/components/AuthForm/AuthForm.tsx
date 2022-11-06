import './AuthForm.css';
import Input from '../Input';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export type Profile = {
  email: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

async function onSubmit(data: Profile) {
  const response = await fetch('http://localhost:3001/auth/register', {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

const AuthForm = () => {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Profile>({
    mode: 'onBlur',
  });


  const emailValidation = {
    required: 'Заполните поле',
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'Неверная почта',
    },
  };

  const passwordValidation = {
    required: 'Заполните поле',
    pattern: {
      value: /(?=[^A-Z]*[A-Z])(?=[^!@#$%]*[!@#$%]){6,20}/,
      message: 'Неверный пароль',
    },
  };

  const confirmPasswordValidation = {
    required: 'Заполните поле',
    validate: (value: string) =>
      value === watch('password') || 'Пароли не совпадают',
  };

  return (
    <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholderText={'Email'} type={'text'} />
      <Input placeholderText={'PASSWORD'} type={'password'} />
      <Button />
    </form>
  );
};
export default AuthForm;
