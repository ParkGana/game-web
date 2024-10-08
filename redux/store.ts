import { configureStore } from '@reduxjs/toolkit'
import minesweeperSlice from './minesweeper/minesweeper.slice'
import guessSlice from './guess/guess.slice'
import tetrisSlice from './tetris/tetris.slice'
import snakeSlice from './snake/snake.slice'
import threesSlice from './threes/threes.slice'
import omokSlice from './omok/omok.slice'
import puzzleSlice from './puzzle/puzzle.slice'

export const store = configureStore({
    reducer: {
        guess: guessSlice.reducer,
        minesweeper: minesweeperSlice.reducer,
        omok: omokSlice.reducer,
        puzzle: puzzleSlice.reducer,
        snake: snakeSlice.reducer,
        tetris: tetrisSlice.reducer,
        threes: threesSlice.reducer
    }
})
