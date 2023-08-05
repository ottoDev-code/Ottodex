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
