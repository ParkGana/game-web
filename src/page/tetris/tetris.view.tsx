import { Board } from '@/src/component/tetris/board/board.view'
import { TetrisStyle } from './tetris.style'
import { useSelector } from 'react-redux'
import { Preview } from '@/src/component/tetris/preview/preview.view'
import { Button } from '@/src/component/tetris/button/button.view'
import { useTetris } from './tetris.hook'

export function Tetris() {
    const tetris = useSelector((state: any) => state.tetris)

    const { events } = useTetris(tetris.condition)

    return (
        <TetrisStyle.Container>
            <Board block={tetris.block} store={tetris.store} />
            <TetrisStyle.SafetyContainer>
                <Preview next={tetris.next} />
                <Button name={'RESET'} clickCallback={events.onClickButton} />
            </TetrisStyle.SafetyContainer>
        </TetrisStyle.Container>
    )
}
