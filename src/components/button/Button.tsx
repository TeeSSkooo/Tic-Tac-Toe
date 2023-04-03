import { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  icon: string;
}

const Button: FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      <span className="font-bold uppercase text-[#212d33]">{text}</span>
      <img src={icon} alt="Icon" />
    </button>
  );
};

export default Button;
