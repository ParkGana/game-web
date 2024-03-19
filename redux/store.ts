import { configureStore } from '@reduxjs/toolkit'
import minesweeperSlice from './minesweeper/minesweeper.slice'
import guessSlice from './guess/guess.slice'
import tetrisSlice from './tetris/tetris.slice'
import snakeSlice from './snake/snake.slice'
import puzzleNumberSlice from './puzzle/puzzle-number.slice'
import omokSlice from './omok/omok.slice'

export const store = configureStore({
    reducer: {
        guess: guessSlice.reducer,
        minesweeper: minesweeperSlice.reducer,
        omok: omokSlice.reducer,
        puzzleNumber: puzzleNumberSlice.reducer,
        snake: snakeSlice.reducer,
        tetris: tetrisSlice.reducer
    }
})
