import { styled } from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const ModWrapper = styled.div`
    display: flex;
    column-gap: 1.25rem;
    margin-top: 3.125rem;
`;

export const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
    width: calc(30% - 1.25rem);
`;

export const TaskCard = styled.div`
    min-width: 300px;
    background: #f2f2f2;
    border-radius: 10px;
    padding: 10px;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
            font-size: 18px;
            justify-content: space-between;
        }
        div {
            border-radius: 35px;
            background: #fff1bb;
            padding: 10px;
            display: flex;
            column-gap: 10px;
            align-items: center;
            font-size: 14px;
            span {
                height: 10px;
                width: 10px;
                border-radius: 50%;
                background: ${colors.primaryColor};
            }
        }
    }
    .bottom {
        display: flex;
        column-gap: 20px;
        .divider {
            width: 2px;
            background: #cacaca;
        }
    }
`;

export const HistoryContainer = styled.div`
    width: 65%;
    margin-top: -1.25rem;
`;

export const Pagination = styled.div`
    align-self: flex-end;
    align-items: center;
    display: flex;
    column-gap: 1.25rem;
    margin-top: 1.25rem;

    div {
        column-gap: 1.25rem;
        display: flex;
        align-items: center;
    }

    p.active {
        background-color: ${colors.primaryColor};
        border-radius: 0.3125rem;
        padding: 0.3125rem 0.625rem;
    }
`;
