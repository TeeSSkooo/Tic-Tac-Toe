import { FC } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import ReactHowler from 'react-howler';

import Header from 'components/header/Header';
import Field from 'components/field/Field';
import StatsBoard from 'components/UI/stats-board/StatsBoard';
import Button from 'components/UI/button/Button';
import GameOverModal from 'components/game-over-modal/GameOverModal';
import EditModal from 'components/edit-modal/EditModal';

import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { setShowEditModal } from 'store/slices/gameSlice';

import edit from 'assets/edit.svg';
import win from 'sounds/win.mp3';

const Game: FC = () => {
  const { firstPlayer, secondPlayer, gameOver, winner, showEditModal } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const openEditModal = () => dispatch(setShowEditModal(true));

  return (
    <div className="max-w-[530px] p-[15px] w-full">
      <Header />
      <Field />
      <div className="flex flex-col items-center gap-[15px] min-[470px]:flex-row min-[470px]:justify-between">
        <StatsBoard playerName={firstPlayer.name} playerScore={firstPlayer.score} backgroundColor="#31c4be" />
        <Button text="Edit" icon={edit} onClick={openEditModal} />
        <StatsBoard playerName={secondPlayer.name} playerScore={secondPlayer.score} backgroundColor="#f2b237" />
      </div>
      {showEditModal && <EditModal />}
      {gameOver && (
        <>
          <ConfettiExplosion
            className="absolute top-0 left-1/2 -translate-x-1/2"
            duration={5000}
            width={1600}
            particleCount={100}
          />
          <ReactHowler src={win} playing={true} />
          <GameOverModal winner={winner} />
        </>
      )}
    </div>
  );
};

export default Game;
