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
  showEditModal: false,
  doesCrossMove: true,
  gameOver: false,
  winner: '',
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
    addFirstPlayerScore(state) {
      state.firstPlayer.score++;
    },
    addSecondPlayerScore(state) {
      state.secondPlayer.score++;
    },
    setShowEditModal(state, action: PayloadAction<boolean>) {
      state.showEditModal = action.payload;
    },
    changeFirstPlayerName(state, action: PayloadAction<string>) {
      state.firstPlayer.name = action.payload ? action.payload : state.firstPlayer.name;
    },
    changeSecondPlayerName(state, action: PayloadAction<string>) {
      state.secondPlayer.name = action.payload ? action.payload : state.secondPlayer.name;
    },
    resetScores(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.firstPlayer.score = state.secondPlayer.score = 0;
      }
    },
    setGameOver(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.gameOver = action.payload;
      } else {
        for (let row = 0; row < state.field.length; row++) {
          for (let col = 0; col < state.field[row].length; col++) {
            state.field[row][col] = '';
          }
        }

        state.winner = '';
        state.doesCrossMove = true;
        state.gameOver = action.payload;
      }
    },
    setWinner(state, action: PayloadAction<string>) {
      state.winner = action.payload;
    },
  },
});

export default gameSlice.reducer;

export const {
  setFirstPlayerName,
  setSecondPlayerName,
  toggleCrossMove,
  setStep,
  addFirstPlayerScore,
  addSecondPlayerScore,
  setGameOver,
  setWinner,
  setShowEditModal,
  changeFirstPlayerName,
  changeSecondPlayerName,
  resetScores,
} = gameSlice.actions;
