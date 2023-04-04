import { FC, MouseEvent, useState, useEffect, useMemo } from 'react';

import Cross from 'components/cross/Cross';
import Zero from 'components/zero/Zero';

import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { toggleCrossMove } from 'store/slices/gameSlice';

import styles from './Cell.module.css';

const Cell: FC = () => {
  const { doesCrossMove, gameOver } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);

  const crossMove = useMemo<boolean>(() => doesCrossMove, [hasBeenClicked]);

  const step = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.children.length) return;

    dispatch(toggleCrossMove(!doesCrossMove));
    setHasBeenClicked(true);
  };

  useEffect(() => setHasBeenClicked(false), [gameOver]);

  return (
    <div className={styles.cell} onClick={step}>
      {hasBeenClicked && (!crossMove ? <Cross /> : <Zero />)}
    </div>
  );
};

export default Cell;
