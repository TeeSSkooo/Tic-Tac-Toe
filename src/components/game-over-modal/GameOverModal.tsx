import { FC } from 'react';

import Modal from 'components/UI/modal/Modal';
import Button from 'components/UI/button/Button';

import useAppDispatch from 'hooks/useAppDispatch';
import { setGameOver } from 'store/slices/gameSlice';

import restart from 'assets/restart.svg';

interface GameOverModalProps {
  winner: string;
}

const GameOverModal: FC<GameOverModalProps> = ({ winner }) => {
  const dispatch = useAppDispatch();

  const handleCLick = () => dispatch(setGameOver(false));

  return (
    <Modal>
      <h3 className="mb-[30px] text-center text-[#a7bdc8] text-2xl">{winner} won!</h3>
      <Button text="Rematch" icon={restart} onClick={handleCLick} style={{ margin: '0 auto' }} />
    </Modal>
  );
};

export default GameOverModal;
