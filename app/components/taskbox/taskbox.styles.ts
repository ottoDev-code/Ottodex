import styled from "styled-components";
import theme from "../../styles/theme";

const { colors } = theme;

export const Wrapper = styled.div`
    background-color: #f2f2f2;
    border-radius: 0.625rem;
    display: flex;
    padding: 2rem;
    width: 19.25rem;
`;

export const ImageHolder = styled.div`
    background-color: ${colors.primaryColor};
    border-radius: 3rem;
    height: 3rem;
    padding: 0.5rem;
    width: 3rem;
`;

export const TaskContent = styled.div`
    margin-left: 1rem;
`;

export const Heading = styled.h3`
    font-size: 1.125rem;
    font-weight: 500;
`;

export const TasksText = styled.p`
    font-size: 1.375rem;
    font-weight: 700;
`;
