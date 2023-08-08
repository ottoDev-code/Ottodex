import { styled } from "styled-components";
import theme from "./theme";
interface IBoxProps {
    $isCompleted: boolean;
}
const { colors, breakpoints } = theme;

export const Container = styled.div`
    padding: 80px 0 30px 0;
    position: relative;
    max-width: calc(100vw - 290px);
    ${breakpoints.lg} {
        max-width: 100%;
    }
`;
export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 30px;
`;
export const BalanceCard = styled.div`
    min-width: 300px;
    min-height: 160px;
    flex: 1 300px;
    background: ${colors.primaryColor};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-weight: 500;
    }
    .top {
        display: flex;
        justify-content: space-between;
        p {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        h1 {
            font-size: 34px;
            font-weight: 700;
        }
        button {
            height: 44px;
            width: 90px;
            padding: 10px;
            border: none;
            border-radius: 7px;
            background: #ffde5c;
            font-size: 16px;
            display: flex;
            column-gap: 10px;
            align-items: center;
            font-weight: 500;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 340px) {
        min-width: 280px;
    }
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
    flex: 1 300px;
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

    @media screen and (max-width: 340px) {
        min-width: 280px;
    }
`;
export const StatsCard = styled.div`
    width: 50%;
    div {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 15px;
        svg {
            color: ${colors.primaryColor};
        }
    }
    h2 {
        font-size: 20px;
        font-weight: 700;
    }
`;
export const StreakCard = styled.div`
    flex: 1 400px;
    background: #f2f2f2;
    border-radius: 10px;
    padding: 10px;
    min-height: 160px;
    display: flex;
    column-gap: 10px;
    .left {
        width: calc(50% - 5px);
        max-width: calc(50% - 5px);
    }
    .right {
        width: calc(50% - 5px);
        max-width: calc(50% - 5px);
        div {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
    }
    .field {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin: 10px 0;
    }
    h2 {
        font-size: 18px;
    }
    ${breakpoints.lg} {
        flex: 1 300px;
    }
`;
export const StreakBox = styled.div<IBoxProps>`
    background: ${({ $isCompleted }) =>
        $isCompleted ? colors.primaryColor : colors.lightPrimaryColor};
    height: 20px;
    width: 20px;
    border-radius: 5px;
`;
export const BottomWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    column-gap: 20px;
    width: 100%;
    ${breakpoints.lg} {
        flex-direction: column;
        row-gap: 20px;
    }
`;
export const ActivityWrapper = styled.div``;
export const ActivityCard = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #cacaca;
    margin-bottom: 15px;
    .left {
        display: flex;
        column-gap: 15px;
        align-items: center;
        width: calc(55% - 10px);
        max-width: calc(55% - 10px);
        .icon {
            height: 45px;
            width: 45px;
            min-width: 45px;
            min-height: 45px;
            border-radius: 50%;
            background: ${colors.primaryColor};
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h3 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 5px;
        }
        p {
            font-weight: 500;
            font-size: 12px;
        }
    }
    .right {
        display: flex;
        justify-content: space-between;
        width: calc(45% - 10px);
        max-width: calc(45% - 10px);
        align-items: center;
        p:first-of-type {
            font-size: 12px;
            font-weight: 500;
        }
        p {
            font-weight: 600;
        }
    }
`;
export const Card = styled.div`
    border-radius: 10px;
    background: #f2f2f2;
    width: calc(50% - 10px);
    max-width: calc(50% - 10px);
    padding: 14px;
    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    ${breakpoints.lg} {
        width: 100%;
        max-width: 100%;
    }
`;
export const CardLeft = styled.div`
    width: calc(100% - 10px);
    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;
export const CardRight = styled.div`
    border-radius: 10px;
    background: #f2f2f2;
    width: 390px;
    max-width: 390px;
    min-width: 390px;
    padding: 14px;
    min-height: calc(100vh - 130px);
    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;
export const CopyContainer = styled.div`
    .label {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    div {
        padding: 10px 20px;
        border-radius: 10px;
        border: 1.5px solid #cacaca;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        p {
            color: #cacaca;
            font-size: 16px;

            ${breakpoints.lg} {
                font-size: 12px;
            }
        }
        button {
            outline: none;
            background: transparent;
            border: none;
            font-size: 16px;
            cursor: pointer;
            color: ${colors.primaryColor};
            display: inline-flex;
            align-items: center;
            column-gap: 5px;
        }
    }
`;
export const StatsContainer = styled.div`
    margin-top: 20px;
    div {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        p {
            font-weight: 600;
        }
        p:first-of-type {
            font-weight: 500;
        }
    }
`;
