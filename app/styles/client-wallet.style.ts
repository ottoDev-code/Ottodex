import { styled } from "styled-components";
import theme from "./theme";
import { ClientBalanceCard } from "./client-dashboard.style";

const { colors } = theme;

export const BalanceContainer = styled.div`
    background-color: ${colors.cardBg};
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    padding: 1.875rem;
    row-gap: 1.25rem;
    @media screen and (max-width: 1000px) {
        background-color: transparent;
        padding: 0;
        row-gap: 10px;
    }
`;

export const BalanceCards = styled.div`
    column-gap: 1.25rem;
    display: flex;
    overflow-x: scroll;
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

    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const MobileBalanceCard = styled(ClientBalanceCard)`
    display: none;
    @media screen and (max-width: 1000px) {
        background-color: ${colors.lightPrimaryColor};
        display: flex;
        flex: auto;
        margin-top: 30px;
    }
`;

export const TotalCard = styled.div`
    align-items: center;
    background-color: ${colors.white};
    border-radius: 0.625rem;
    column-gap: 1.25rem;
    display: flex;
    padding: 1.5rem 0.75rem 1.5625rem 0.75rem;
    min-width: 18.75rem;

    div.content {
        align-items: center;
        display: flex;
        font-weight: 500;
    }

    div.price {
        font-size: 1.375rem;
        font-weight: 700;
        margin-top: 0.94rem;
    }

    div.stroke {
        background-color: ${colors.lightGrey};
        height: 6.25rem;
        width: 2px;
    }

    @media screen and (max-width: 1000px) {
        display: none;
    }
    @media screen and (max-width: 330px) {
        min-width: 280px;
    }
`;

export const WalletMobileTotalCard = styled(TotalCard)`
    display: none;
    @media screen and (max-width: 1000px) {
        background-color: ${colors.cardBg};
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        div.content {
            font-size: 14px;
        }

        div.price {
            font-size: 20px;
        }
    }
`;

export const MobileTotalCard = styled.div`
    display: none;
    @media screen and (max-width: 1000px) {
        background-color: ${colors.cardBg};
        border-radius: 10px;
        display: block;
        padding: 32px 20px 17px;
        margin-top: 10px;
        p {
            font-weight: 500;
        }

        p.bold {
            font-size: 30px;
            font-weight: 700;
            margin-top: 10px;
        }
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

    @media screen and (max-width: 390px) {
        flex-direction: column;
        row-gap: 1.25rem;
        button {
            justify-content: center;
        }
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

    button {
        display: none;
    }

    @media screen and (max-width: 768px) {
        div:first-of-type {
            align-items: center;
            column-gap: 1rem;
            display: flex;
            justify-content: space-between;
        }

        h3 {
            padding-left: 1.3rem;
        }

        button {
            align-items: center;
            border-radius: 10px;
            border: 1.5px solid ${colors.black};
            display: flex;
            justify-content: space-between;
            padding: 4px 5px 4px 10px;
        }
    }

    @media screen and (max-width: 420px) {
        h3 {
            font-size: 18px;
            padding: 0;
        }
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

    @media screen and (max-width: 768px) {
        border: none;
        margin: 0;

        h3 {
            padding-left: 1.3rem;
        }

        div {
            grid-template-columns: repeat(2, 2fr);
            row-gap: 10px;
        }

        div:first-of-type {
            display: none;
        }

        .hidden-mobile {
            display: none;
        }

        .title {
            grid-area: 1/1/2/2;
        }

        .date {
            grid-area: 2/1/3/2;
        }

        .bmt,
        .usd {
            grid-area: 1/2/2/3;
            justify-self: end;
        }

        .none {
            display: none;
        }

        .block {
            display: block;
        }

        @media screen and (max-width: 420px) {
            padding-left: 0;
        }
    }
`;
