import styled from 'styled-components'

export namespace GuessStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        gap: 30px;
        padding: 20px;
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            border: 5px solid ${theme.color.gray};
        `}
    `
}
