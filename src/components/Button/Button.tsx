import './Button.css';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  btnClass?: string;
  onClick?: MouseEventHandler<HTMLElement> ;
  text: string;
};
const Button = ({ btnClass, text, onClick }: ButtonProps) => {
  return <button className={`button ${btnClass}`} onClick={onClick}>{text}</button>;
};
export default Button;
