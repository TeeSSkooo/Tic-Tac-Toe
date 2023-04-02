import { FC } from 'react';

import Cross from 'components/cross/Cross';
import Zero from 'components/zero/Zero';

import styles from './Field.module.css';

const Field: FC = () => {
  return (
    <div className="py-[30px] grid grid-cols-3 grid-rows-3 gap-[20px]">
      <div className={styles.cell}>
        <Cross />
      </div>
      <div className={styles.cell}></div>
      <div className={styles.cell}></div>
      <div className={styles.cell}></div>
      <div className={styles.cell}></div>
      <div className={styles.cell}></div>
      <div className={styles.cell}></div>
      <div className={styles.cell}></div>
      <div className={styles.cell}>
        <Zero />
      </div>
    </div>
  );
};

export default Field;
