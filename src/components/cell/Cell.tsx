import { FC, MouseEvent, useMemo, useState } from 'react';

import Cross from 'components/cross/Cross';
import Zero from 'components/zero/Zero';

import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { toggleCrossMove } from 'store/slices/gameSlice';

import styles from './Cell.module.css';

const Cell: FC = () => {
  const { doesCrossMove } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);

  const crossMove = useMemo<boolean>(() => doesCrossMove, [hasBeenClicked]);

  const step = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;

    if (target.children.length) return;

    dispatch(toggleCrossMove(!doesCrossMove));
    setHasBeenClicked(true);
  };

  return (
    <div className={styles.cell} onClick={step}>
      {hasBeenClicked && (!crossMove ? <Cross /> : <Zero />)}
    </div>
  );
};

export default Cell;
