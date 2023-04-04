import { FC, CSSProperties } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  icon: string;
  onClick: () => void;
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className="font-bold uppercase text-[#212d33]">{text}</span>
      <img src={icon} alt="Icon" />
    </button>
  );
};

export default Button;
