import './Input.css';

type InputProps = {
  placeholderText: string;
  type: 'text' | 'password';
  id: string;
};
const Input = ({ placeholderText, type, id }: InputProps) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholderText}
      id={id}
    ></input>
  );
};
export default Input;
