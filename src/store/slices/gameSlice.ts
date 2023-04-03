import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  firstPlayer: {
    name: 'Player 1',
    score: 0,
  },
  secondPlayer: {
    name: 'Player 2',
    score: 0,
  },
  field: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  doesCrossMove: true,
  gameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setFirstPlayerName(state, action: PayloadAction<string>) {
      state.firstPlayer.name = action.payload;
    },
    setSecondPlayerName(state, action: PayloadAction<string>) {
      state.secondPlayer.name = action.payload;
    },
    toggleCrossMove(state, action: PayloadAction<boolean>) {
      state.doesCrossMove = action.payload;
    },
    setStep(state, action: PayloadAction<{ x: number; y: number; item: string }>) {
      const { x, y, item } = action.payload;

      if (!state.field[x][y]) {
        state.field[x][y] = item;
      }
    },
    setGameOver(state) {
      state.gameOver = true;
    },
  },
});

export default gameSlice.reducer;

export const { setFirstPlayerName, setSecondPlayerName, toggleCrossMove, setStep, setGameOver } = gameSlice.actions;
