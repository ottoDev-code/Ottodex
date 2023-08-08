import styled from "styled-components";

import theme from "./theme";
import { BalanceCard, TaskCard } from "./dashboard.style";

const { colors } = theme;

export const ClientGridContainer = styled.div`
    display: flex;
    column-gap: 1.3rem;
`;

export const ClientCardWrapper = styled.div`
    display: flex;
    column-gap: 1.25rem;
    margin-top: 3rem;
    row-gap: 1.25rem;

    > div {
        width: 50%;
    }

    @media screen and (max-width: 670px) {
        flex-direction: column;

        > div {
            width: 100%;
        }
    }
`;

export const ClientTaskCard = styled(TaskCard)`
    @media screen and (max-width: 670px) {
        flex: auto;
    }
`;

export const ClientBalanceCard = styled(BalanceCard)`
    @media screen and (max-width: 670px) {
        flex: auto;
    }
`;

export const LeftContainer = styled.div`
    width: calc(60% - 1.25rem);
    @media screen and (max-width: 1380px) {
        width: 100%;
    }
`;

export const ActivitiesCard = styled.div`
    border-radius: 10px;
    background: #f2f2f2;
    padding: 14px;
    max-width: 35rem;
    margin: 3rem 0;
    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

export const ActivitiesCardLeft = styled(ActivitiesCard)`
    max-width: none;
`;

export const ActivitiesCardRight = styled(ActivitiesCard)`
    height: 100%;
    width: 35%;
    @media screen and (max-width: 1380px) {
        display: none;
    }
`;

export const ActivityCard = styled.div`
    column-gap: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #cacaca;
    margin-bottom: 15px;
    .left {
        display: flex;
        column-gap: 15px;
        align-items: center;
        .icon {
            height: 45px;
            width: 45px;
            border-radius: 50%;
            background: ${colors.primaryColor};
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h3 {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.625rem;
        }
        p {
            font-size: 0.75rem;
            font-weight: 500;
        }
    }

    .right {
        p:first-of-type {
            font-size: 1rem;
            font-weight: 600;
        }

        p:last-of-type {
            font-size: 0.75rem;
        }
    }
`;

export const History = styled.div`
    border-radius: 0.625rem;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
    padding: 1.45rem;

    div.first {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    button {
        background-color: ${colors.primaryColor};
        border: transparent;
        border-radius: 0.625rem;
        font: inherit;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.75rem 2rem;
    }

    @media screen and (max-width: 654px) {
        h2 {
            margin-bottom: 0;
            padding-left: 0.875rem;
        }

        button.dashboard {
            background-color: transparent;
            padding: 0;
            position: relative;
        }

        button.dashboard::after {
            background-color: ${colors.black};
            content: "";
            display: block;
            height: 1.5px;
            position: absolute;
            width: 100%;
        }
    }
`;

export const HistoryCard = styled.div`
    border-radius: 0.625rem;
    border: 1px solid #c4c4c4;
    column-gap: 1rem;
    font-weight: 500;
    margin-top: 1rem;

    div:first-of-type {
        background: #e6e6e6;
        border-bottom: none;
        font-weight: 600;
    }
    @media screen and (max-width: 654px) {
        border: none;
        div:first-of-type {
            display: none;
        }

        span {
            display: none;
        }
    }
`;

export const HistoryCardItem = styled.div`
    border-bottom: 1px solid #c4c4c4;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 0.5fr;
    padding: 0.875rem;

    @media screen and (max-width: 654px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        row-gap: 10px;
        p.title {
            font-weight: 500;
            grid-area: 1/1/2/2;
        }

        p.date {
            grid-area: 2/1/3/2;
        }

        p.status {
            grid-area: 2/2/3/3;
        }

        p.date,
        p.status {
            font-size: 12px;
            font-weight: 500;
        }

        p.price {
            font-weight: 600;
            grid-area: 1/2/2/3;
        }

        p.price,
        p.status {
            justify-self: end;
        }
    }
`;
