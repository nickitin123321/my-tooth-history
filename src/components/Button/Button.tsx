import './Button.css';

type ButtonProps = {
  btnClass?: string;
  text: string;
};
const Button = ({ btnClass, text }: ButtonProps) => {
  return <button className={`button ${btnClass}`}>{text}</button>;
};
export default Button;
