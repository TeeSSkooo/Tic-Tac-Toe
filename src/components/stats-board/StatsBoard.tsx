import { FC } from 'react';

interface StatsBoardProps {
  playerName: string;
  gameSide: string;
  backgroundColor: string;
}

const StatsBoard: FC<StatsBoardProps> = ({ playerName, gameSide, backgroundColor }) => {
  return (
    <div className="p-[10px] rounded-[8px] max-w-[120px] w-full min-[400px]:max-w-[150px]" style={{ backgroundColor }}>
      <div className="mb-[5px] text-center text-sm min-[400px]:text-base">
        {playerName} ({gameSide})
      </div>
      <div className="text-center font-bold">Score: 0</div>
    </div>
  );
};

export default StatsBoard;
