import { GuessCharacterCategoryEnum } from '@/redux/guess/guess.enum'
import { GuessStyle } from './guess.style'
import { Category } from '@/src/component/guess/category/category.view'
import { useGuess } from './guess.hook'
import { useSelector } from 'react-redux'
import { Image } from '@/src/component/common/image/image.view'
import { Answer } from '@/src/component/guess/answer/answer.view'

export function GuessCharacter() {
    const character = useSelector((state: any) => state.guess)

    const { datas, events } = useGuess(character.type)

    return (
        <GuessStyle.Container>
            <Category
                selected={datas.category}
                options={[GuessCharacterCategoryEnum.ALL]}
                selectCallback={events.onChangeCategory}
            />

            <GuessStyle.SafetyContainer>
                <Answer
                    answer={character.name}
                    isOpen={character.isOpen}
                    checkCallback={events.onCheckAnswer}
                    moveCallback={events.onMoveNext}
                />
                <Image src={`/images/guess-character/${character.category}/${character.name}.png`} alt="image" />
            </GuessStyle.SafetyContainer>
        </GuessStyle.Container>
    )
}
