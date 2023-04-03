import { FC } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

import Header from 'components/header/Header';
import Field from 'components/field/Field';
import StatsBoard from 'components/stats-board/StatsBoard';
import Button from 'components/button/Button';

import useAppSelector from 'hooks/useAppSelector';

import edit from 'assets/edit.svg';

const Game: FC = () => {
  const { firstPlayer, secondPlayer, gameOver } = useAppSelector((state) => state);

  return (
    <div className="max-w-[530px] p-[15px] w-full">
      <Header />
      <Field />
      <div className="flex justify-between items-center">
        <StatsBoard playerName={firstPlayer.name} playerScore={firstPlayer.score} backgroundColor="#31c4be" />
        <Button text="Edit" icon={edit} />
        <StatsBoard playerName={secondPlayer.name} playerScore={secondPlayer.score} backgroundColor="#f2b237" />
      </div>
      {gameOver && (
        <ConfettiExplosion
          className="absolute top-0 left-1/2 -translate-x-1/2"
          duration={5000}
          width={1600}
          particleCount={100}
        />
      )}
    </div>
  );
};

export default Game;
