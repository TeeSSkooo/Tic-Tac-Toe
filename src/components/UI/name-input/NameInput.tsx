import { FC, CSSProperties, ChangeEvent, useState } from 'react';

import styles from './NameInput.module.css';

interface NameInputProps {
  Label: FC;
  placeholder: string;
  onChange: (name: string) => void;
  style?: CSSProperties;
}

const NameInput: FC<NameInputProps> = ({ Label, placeholder, onChange, style }) => {
  const [name, setName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.currentTarget.value;

    setName(targetValue);
    onChange(targetValue);
  };

  return (
    <div className="flex items-center gap-[10px]" style={style}>
      <div className="w-[30px] h-[30px]">
        <Label />
      </div>
      <input
        className={styles.input}
        type="text"
        maxLength={15}
        placeholder={placeholder}
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default NameInput;
