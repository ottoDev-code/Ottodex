import { styled } from "styled-components";
import theme from "./theme";
const { colors, breakpoints } = theme;

export const Wrapper = styled.div`
    display: flex;
    column-gap: 20px;
    ${breakpoints.lg} {
        flex-direction: column;
        row-gap: 20px;
    }
`;
export const Left = styled.div`
    width: calc(50% - 10px);
    max-width: calc(50% - 10px);
    min-width: calc(50% - 10px);
    background: ${colors.cardBg};
    border-radius: 10px; 
    padding: 16px 20px;
    ${breakpoints.lg} {
        width: 100%;
        max-width: 100%;
    }
`;
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        font-size: 18px;
    }
    select {
        padding: 7px 10px;
        border: 1px solid #000; 
        border-radius: 10px;
        background: transparent;
    }
`;
export const Table = styled.div`
    margin-top: 20px;
    border: 1px solid ${colors.midGrey};
    border-radius: 10px;
    overflow: hidden;
    ${breakpoints.lg} {
        display: none;
    }
`;
export const MTable = styled.div`
    display: none;
    padding: 10px 0;
    ${breakpoints.lg} {
        display: block;
    }
`;
export const MRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid ${colors.midGrey};
    div {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    p {
        font-weight: 500;
    }
`;
export const THead = styled.div`
    background: #E6E6E6;
    display: flex;
    padding: 12px 10px;
    p {
        width: 25%;
        font-weight: 500;
    } 
    p:first-of-type {
        width: 50%;
        min-width: 50%;
    }
`;
export const TRow = styled.div`
    display: flex;
    padding: 10px;
    font-size: 14px;
    align-items: center;
    border-bottom: 1px solid ${colors.midGrey};
    &:last-of-type {
        border-bottom: none;
    } 
    p {
        width: 25%;
        font-weight: 500;
    } 
    p:first-of-type {
        width: 50%;
        min-width: 50%;
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
`;
export const Right = styled.div`
    width: calc(50% - 10px);
    max-width: calc(50% - 10px);
    min-width: calc(50% - 10px);
    background: ${colors.cardBg};
    border-radius: 10px; 
    padding: 16px 20px;
    p {
        
    }
    h2 {
        font-size: 18px;
        margin: 10px 0 20px 0;
    }
    ul {
        margin-top: 20px;
        padding-left: 15px;
    }
    ${breakpoints.lg} {
        width: 100%;
        max-width: 100%;
    }
`;
export const UserImage = styled.div`
    position: relative;
    height: 36px;
    width: 36px;
    overflow: hidden;
    border-radius: 50%;
`;
export const TBody = styled.div`
`;
