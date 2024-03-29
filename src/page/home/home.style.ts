import styled from 'styled-components'

export namespace HomeStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        padding: 50px;
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            display: grid;
            align-items: start;
            gap: 50px;

            ${theme.ratio.size({
                web: `
                    grid-template-columns: repeat(3, 1fr);
                `,
                tablet: `
                    grid-template-columns: repeat(2, 1fr);
                `,
                mobile: ``
            })}
        `}
    `
}
