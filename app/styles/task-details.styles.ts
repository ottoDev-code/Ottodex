import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Wrapper = styled.div`
    display: flex;
    column-gap: 1.25rem;
    padding-top: 20px;
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
`;
export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 100px;
    row-gap: 1.25rem;
`;

export const RightColumn = styled.div`
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
`;

export const TaskSub = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
`;

export const Details = styled.div`
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1.35rem;
    > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.8rem;
    }
`;

export const BoldP = styled.p`
    font-size: 1.125rem;
    font-weight: 600;
`;

export const Instructions = styled.div`
    > h4 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.85rem;
    }

    > p {
        margin-bottom: 0.15rem;
    }
`;

export const TemplateHeading = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    margin: 1.25rem 0 0.625rem;
`;

export const TemplateBox = styled.div`
    border: 1px solid #000;
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.85rem;
    padding: 0.75rem;

    p {
        font-size: 0.875rem;
    }
`;

export const Copy = styled.div`
    align-self: flex-end;
    display: flex;
    margin: 1rem;
    p {
        color: ${colors.primaryColor};
        font-style: italic;
        font-weight: 500;
    }
`;

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        font-size: 1rem;
        font-weight: 600;
        margin: 1.25rem 0 0.85rem;
    }
`;

export const UploadBox = styled.div`
    align-items: center;
    border-radius: 0.625rem;
    border: 2px dashed #c4c4c4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
    row-gap: 1.85rem;
`;

export const FileInput = styled.div`
    text-align: center;
    label {
        color: ${colors.primaryColor};
        font-weight: 500;
    }
`;

export const TextInput = styled.div`
    border: 1.5px solid #cacaca;
    border-radius: 0.625rem;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;
    form,
    input {
        width: 100%;
    }

    input {
        background: transparent;
        color: #cacaca;
        display: block;
        border: transparent;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 500;
        outline: none;
    }

    input:focus {
        color: #222;
    }

    button {
        color: ${colors.primaryColor};
        font-size: 15px;
        font-weight: 500;
        border: transparent;
        background: transparent;
        outline: none;
        cursor: pointer;
    }

    button:focus,
    input:focus {
        outline: none;
    }
`;

export const Buttons = styled.div`
    align-self: flex-end;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    margin: 5rem 0 1.5rem;
`;

export const button = styled.button`
    border: transparent;
    border-radius: 0.625rem;
    font-size: inherit;
    font-family: inherit;
    padding: 0.65rem 3rem;

    :focus {
        outline: none;
    }
`;

export const ColoredButton = styled(button)`
    background-color: #fc0;
    width: 100%;
`;

export const BorderedButton = styled(button)`
    border-radius: 0.625rem;
    border: 1px solid #818181;
    padding: 0.5rem 3rem;
`;

export const StartButton = styled(button)`
    align-self: flex-end;
    background-color: #fc0;
    margin-top: 2.2rem;
`;

export const UploadedDocContainer = styled.div`
    h4 {
        font-size: 1rem;
        font-weight: 600;
        margin: 1.25rem 0 0.85rem;
    }
`;

export const ScreenshotContainer = styled.div`
    border: 2px solid #c4c4c4;
    border-radius: 0.625rem;
    column-gap: 0.625rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1.06rem;
    row-gap: 0.625rem;

    div {
        align-items: center;
        border: 1px solid #818181;
        border-radius: 1.5625rem;
        display: flex;
        justify-content: center;
        padding: 0.62rem;
        /* max-width: 13rem; */
    }

    div > p {
        margin: 0 0.8rem;
        font-weight: 500;
    }
`;

export const Username = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.625rem;
    p {
        font-size: 1rem;
        font-weight: 500;
    }

    button {
        color: ${colors.primaryColor};
        border: transparent;
        font: inherit;
        font-weight: 600;
    }
`;

//Task Details New

export const TaskNav = styled.div`
    align-self: center;
    align-items: center;
    background: #fff1bb;
    border-radius: 0.625rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0.1875rem;
    text-align: center;
    width: 80%;
`;

export const TaskNavItem = styled.div<{ active: boolean }>`
    background-color: ${(props) =>
        props.active ? colors.primaryColor : "transparent"};
    border-radius: 0.625rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.875rem 2rem;
`;

export const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    row-gap: 0.625rem;
`;

export const Task = styled.div`
    border-radius: 0.625rem;
    border: 1px solid ${colors.lightGrey};
    display: flex;
    font-weight: 400;
    justify-content: space-between;
    padding: 0.625rem;

    h3 {
        font-size: 1.25rem;
        font-weight: 500;
    }

    p.task-text {
        font-size: 0.875rem;
        margin: 0.3125rem 0;
        max-width: 25rem;
    }

    div.reward span {
        font-weight: 500;
        margin-right: 2rem;
    }

    button {
        background-color: ${colors.primaryColor};
        border-radius: 0.625rem;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.75rem 2rem;
        margin-bottom: 0.625rem;
    }
`;
