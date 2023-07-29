import { styled } from "styled-components";
import theme from "./theme";
const { colors } = theme;

interface ITab {
    $isActive: boolean;
}

export const Wrapper = styled.div`
`;
export const TabContainer = styled.div`
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    border-radius: 15px;
    padding: 8px;
    height: 55px;
    border-radius: 15px;
    background: #E6E6E6; 
`;
export const Tab = styled.button<ITab>`
    width: 100%;
    border: none;
    outline: none;
    color: ${colors.darkGrey};
    border-radius: 10px;
    cursor: pointer;
    background: ${({$isActive}) => $isActive ? colors.cardBg : "transparent" };
`;
export const CourseWrapper = styled.div`
    display: flex;
    column-gap: 20px;
    margin-top: 30px;
    h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;
export const CourseLeft = styled.div`
    width: calc(100% - 430px);
    background: ${colors.cardBg};
    border-radius: 10px; 
    padding: 16px 20px;
    iframe {
        border: 0;
        width: 100%;
        height: 300px;
        border-radius: 10px;
        margin: 20px 0;
    }
    .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
            outline: none;
            border: none;
            background: ${colors.primaryColor};
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 7px 15px;
            width: 120px;
            cursor: pointer;
        }
    }
`;
export const CourseRight = styled.div`
    width: 400px;
    background: ${colors.cardBg};
    border-radius: 10px; 
    padding: 16px 20px;
    .dash {
        margin: 30px 0;
        border-bottom: 1px solid ${colors.midGrey};
    }
`
export const ProgressWrapper = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        p {
            font-weight: 500;
        }
    }
`;
