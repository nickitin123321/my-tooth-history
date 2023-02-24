import './Input.css';
import {UseFormRegisterReturn} from 'react-hook-form'


type InputProps = {
  placeholderText: string;
  type: 'text' | 'password';
  id: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string,
};
const Input = ({ placeholderText, type, id, register, errorMessage }: InputProps) => {
  return (
    <>
      <input
        className="input"
        type={type}
        placeholder={placeholderText}
        {...register}
        id={id}
      ></input>
      <label htmlFor={id}>
          {errorMessage}
        </label>
    </>
  );
};
export default Input;
