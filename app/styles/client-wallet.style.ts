import { styled } from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const BalanceContainer = styled.div`
    background-color: ${colors.cardBg};
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    padding: 1.875rem;
    row-gap: 1.25rem;
`;

export const BalanceCards = styled.div`
    column-gap: 1.25rem;
    display: flex;
`;

export const BalanceCard = styled.div`
    background-color: ${colors.lightPrimaryColor};
    border-radius: 0.625rem;
    padding: 0.6875rem 0.75rem 0.5625rem 0.75rem;
    font-weight: 500;
    min-width: 18.75rem;
    div {
        margin-top: 2.05rem;
    }

    div.button {
        margin-top: 0;
        position: relative;
    }

    button {
        align-items: center;
        background: #ffdea3;
        border: transparent;
        border-radius: 0.4375rem;
        column-gap: 0.625rem;
        display: flex;
        font-weight: 500;
        padding: 0.625rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }
`;

export const Amount = styled.p`
    margin-top: 0.6rem;
    font-size: 2.5rem;
    font-weight: 700;
`;

export const Buttons = styled.div`
    display: flex;
    column-gap: 1.25rem;
    button {
        align-items: center;
        background-color: ${colors.primaryColor};
        border: transparent;
        border-radius: 0.625rem;
        column-gap: 0.625rem;
        display: flex;
        font: inherit;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.75rem 2rem;
    }
`;

export const History = styled.div`
    background-color: ${colors.cardBg};
    border-radius: 0.625rem;
    margin-top: 1.25rem;
    padding: 1rem;

    h3 {
        font-size: 1.25rem;
        font-weight: 600;
    }
`;

export const HistoryDetails = styled.div`
    border-radius: 0.625rem;
    border: 1px solid #818181;
    padding: 0.625rem;
    padding-left: 1.3rem;
    margin: 0.94rem;
    font-weight: 500;

    div:first-of-type {
        font-weight: 600;
        padding-top: 0.625rem;
        text-transform: uppercase;
    }

    div {
        border-bottom: 1px solid #c4c4c4;
        column-gap: 1rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        padding: 1.3rem 0 0.625rem;
        width: 100%;
    }

    div:last-of-type {
        border-bottom: none;
    }
`;
