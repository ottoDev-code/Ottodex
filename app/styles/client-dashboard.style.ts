import styled from "styled-components";

import theme from "./theme";

const { colors } = theme;

export const ClientGridContainer = styled.div`
    display: flex;
    column-gap: 1.3rem;
`;

export const ClientCardWrapper = styled.div`
    display: flex;
    column-gap: 1.25rem;
    margin-top: 3rem;

    > div {
        width: 50%;
    }
`;

export const LeftContainer = styled.div`
    width: calc(60% - 1.25rem);
`;

export const ActivitiesCard = styled.div`
    border-radius: 10px;
    background: #f2f2f2;
    height: 100%;
    padding: 14px;
    max-width: 35rem;
    margin-top: 3rem;
    width: 35%;
    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
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
`;

export const HistoryCardItem = styled.div`
    border-bottom: 1px solid #c4c4c4;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 0.5fr;
    padding: 0.875rem;
    width: 100%;
`;
