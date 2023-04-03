import { FC } from 'react';

interface StatsBoardProps {
  playerName: string;
  playerScore: number;
  backgroundColor: string;
}

const StatsBoard: FC<StatsBoardProps> = ({ playerName, backgroundColor, playerScore }) => {
  return (
    <div className="p-[10px] rounded-[8px] max-w-[120px] w-full min-[400px]:max-w-[150px]" style={{ backgroundColor }}>
      <div className="mb-[5px] text-center text-sm min-[400px]:text-base">{playerName}</div>
      <div className="text-center font-bold text-lg">Score: {playerScore}</div>
    </div>
  );
};

export default StatsBoard;
