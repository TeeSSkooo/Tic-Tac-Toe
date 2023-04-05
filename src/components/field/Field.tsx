import { FC, MouseEvent, useEffect } from 'react';

import Cell from 'components/UI/cell/Cell';

import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { setStep, addFirstPlayerScore, addSecondPlayerScore, setGameOver, setWinner } from 'store/slices/gameSlice';
import checkWinner from 'utils/checkWinner';

const Field: FC = () => {
  const { firstPlayer, secondPlayer, field, doesCrossMove } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const step = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;

    if (target && target.dataset.position) {
      dispatch(
        setStep({
          x: +target.dataset.position.split(' ')[0],
          y: +target.dataset.position.split(' ')[1],
          item: doesCrossMove ? 'x' : 'o',
        })
      );
    }
  };

  useEffect(() => {
    switch (checkWinner(field)) {
      case 'x':
        dispatch(addFirstPlayerScore());
        dispatch(setGameOver(true));
        dispatch(setWinner(firstPlayer.name));
        break;
      case 'o':
        dispatch(addSecondPlayerScore());
        dispatch(setGameOver(true));
        dispatch(setWinner(secondPlayer.name));
        break;
    }
  }, [field]);

  return (
    <div className="py-[20px] grid grid-cols-3 grid-rows-3 gap-[20px]">
      <div data-position="0 0" onClick={step}>
        <Cell />
      </div>
      <div data-position="0 1" onClick={step}>
        <Cell />
      </div>
      <div data-position="0 2" onClick={step}>
        <Cell />
      </div>
      <div data-position="1 0" onClick={step}>
        <Cell />
      </div>
      <div data-position="1 1" onClick={step}>
        <Cell />
      </div>
      <div data-position="1 2" onClick={step}>
        <Cell />
      </div>
      <div data-position="2 0" onClick={step}>
        <Cell />
      </div>
      <div data-position="2 1" onClick={step}>
        <Cell />
      </div>
      <div data-position="2 2" onClick={step}>
        <Cell />
      </div>
    </div>
  );
};

export default Field;
