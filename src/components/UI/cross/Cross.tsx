import { FC } from 'react';

import styles from './Cross.module.css';

interface CrossProps {
  width?: number;
  height?: number;
}

const Cross: FC<CrossProps> = ({ width, height }) => {
  return (
    <div className={styles.cross} style={{ width: width ? width : '100%', height: height ? height : '100%' }}></div>
  );
};

export default Cross;
