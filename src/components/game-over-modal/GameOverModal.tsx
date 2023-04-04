import { FC } from 'react';

import Button from 'components/button/Button';

import useAppDispatch from 'hooks/useAppDispatch';
import { setGameOver, toggleCrossMove } from 'store/slices/gameSlice';

import restart from 'assets/restart.svg';

import styles from './GameOverModal.module.css';

interface GameOverModalProps {
  winner: string;
}

const GameOverModal: FC<GameOverModalProps> = ({ winner }) => {
  const dispatch = useAppDispatch();

  const handleCLick = () => {
    dispatch(toggleCrossMove(true));
    dispatch(setGameOver(false));
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#00000064]">
      <div className={styles.modal}>
        <h3 className="mb-[30px] text-center text-[#a7bdc8] text-2xl">{winner} won!</h3>
        <Button text="Rematch" icon={restart} onClick={handleCLick} style={{ margin: '0 auto' }} />
      </div>
    </div>
  );
};

export default GameOverModal;
