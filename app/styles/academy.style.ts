import { styled } from "styled-components";
import theme from "./theme";
const { colors, breakpoints } = theme;

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
    ${breakpoints.lg} {
        background: transparent;
        overflow-y: scroll;
        gap: 5px;
    }
`;
export const Tab = styled.button<ITab>`
    width: 100%;
    border: none;
    outline: none;
    color: ${colors.darkGrey};
    border-radius: 10px;
    cursor: pointer;
    background: ${({$isActive}) => $isActive ? colors.cardBg : "transparent" };
    ${breakpoints.lg} {
        font-size: 14px;
        min-width: 120px;
    }
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
    ${breakpoints.lg} {
        flex-direction: column-reverse;
        row-gap: 10px;
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
        height: 50vh;
        min-height: 300px;
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
    ${breakpoints.lg} {
        width: 100%;
    }
    ${breakpoints.sm} {
        width: 100%;
        iframe {
            height: 35vh;
            min-height: 200px;
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
    .dash-r {
        margin: 30px 0;
        border-bottom: 1px solid ${colors.midGrey};
        display: none;
    }
    h2 {
        display: flex;
        justify-content: space-between;
        button {
            display: none;
        }
    }
    ${breakpoints.lg} {
        width: 100%;
        background: transparent;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        padding: 0;
        h2 {
            margin-bottom: 0;
            button {
                display: block;
            }
        }
        .dash {
            display: none;
        }
        .dash-r {
            display: block;
        }
    }
`
export const Wrapp = styled.div`
    ${breakpoints.lg} {
        background: ${colors.cardBg};
        border-radius: 10px; 
        padding: 16px 20px;
    }
`;
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
