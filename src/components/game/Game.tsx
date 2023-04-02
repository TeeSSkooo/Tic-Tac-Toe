import { FC } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

import Header from 'components/header/Header';
import Field from 'components/field/Field';
import StatsBoard from 'components/stats-board/StatsBoard';

const Game: FC = () => {
  return (
    <div className="max-w-[530px] px-[15px] w-full">
      <Header />
      <Field />
      <div className="flex justify-between items-center">
        <StatsBoard playerName="Player 1" gameSide="X" backgroundColor="#31c4be" />
        <StatsBoard playerName="Player 2" gameSide="O" backgroundColor="#f2b237" />
      </div>
      <ConfettiExplosion
        className="absolute top-0 left-1/2 -translate-x-1/2"
        duration={5000}
        width={1600}
        particleCount={100}
      />
    </div>
  );
};

export default Game;
