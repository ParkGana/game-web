import { PuzzleNumberConditionEnum } from '@/redux/puzzle/puzzle-number.enum'
import { moveToDown, moveToLeft, moveToRight, moveToUp, resetGame } from '@/redux/puzzle/puzzle-number.slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function usePuzzleNumber() {
    const dispatch = useDispatch()

    const puzzle = useSelector((state: any) => state.puzzleNumber)

    useEffect(() => {
        dispatch(resetGame({}))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (puzzle.condition === PuzzleNumberConditionEnum.RUNNING) {
            document.addEventListener('keydown', (e) => {
                // 위쪽 방향키 눌렀을 경우
                if (e.key == 'ArrowUp') {
                    dispatch(moveToUp({}))
                }
                // 아래쪽 방향키 눌렀을 경우
                else if (e.key == 'ArrowDown') {
                    dispatch(moveToDown({}))
                }
                // 왼쪽 방향키 눌렀을 경우
                else if (e.key == 'ArrowLeft') {
                    dispatch(moveToLeft({}))
                }
                // 오른쪽 방향키 눌렀을 경우
                else if (e.key == 'ArrowRight') {
                    dispatch(moveToRight({}))
                }
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [puzzle.condition])

    const onClickButton = () => {
        dispatch(resetGame({}))
    }

    return {
        events: {
            onClickButton
        }
    }
}
