import './Input.css';

type InputProps = {
  placeholderText: string;
  type: 'text' | 'password' | 'id';
};
const Input = ({ placeholderText, type }: InputProps) => {
  return (
    <input className="input" type={type} placeholder={placeholderText}></input>
  );
};
export default Input;
