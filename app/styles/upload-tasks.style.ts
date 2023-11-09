import { styled } from "styled-components";
import theme from "./theme";
const { colors } = theme;

export const Wrapper = styled.div`
    align-items: center;
    background-color: #3535358f;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    padding: 1.25rem 0;
    position: fixed;
    right: 0;
    top: 0;
    min-width: 100vw;
    z-index: 999999;
    scrollbar-color: ${colors.primaryColor} ${colors.primaryColor}11;
    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
    &::-webkit-scrollbar {
        background-color: transparent;
        width: 3px;
    }

    > div {
        margin-bottom: 1.25rem;
    }

    @media screen and (max-width: 1000px) {
        z-index: 11111111111111111;
    }

    @media screen and (max-width: 565px) {
        z-index: 111;
    }
`;

export const UploadContainer = styled.div`
    background-color: ${colors.cardBg};
    max-height: 80vh;
    overflow-y: scroll;
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.1875rem 1.5rem 1.3125rem;
    max-width: 500px;
    width: 90%;
    overflow-y: scroll;
    margin: 0 auto;
    h3 {
        font-size: 1.25rem;
        font-weight: 600;
    }

    form {
        margin-top: 2.25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 1.25rem;
    }

    form > div {
        align-items: center;
        column-gap: 0.625rem;
        display: flex;
        row-gap: 15px;
    }

    .actions {
        align-self: flex-start;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
    }

    label {
        display: flex;
        flex-direction: column;
        width: calc(50% - 0.625rem);
    }

    .actions > div {
        display: flex;
        flex-wrap: wrap;
        max-width: 30rem;
    }

    .actions label {
        align-items: center;
        column-gap: 0.625rem;
        flex-direction: row;
        font-weight: 500;
        padding: 0.625rem;
        width: calc(50% - 0.625rem);
    }

    .actions input {
        margin: 0;
    }

    label.full-width {
        width: calc(100% - 0.625rem);

    }

    label div,
    textarea,
    input,
    div.input {
        border-radius: 0.625rem;
        border: 1.5px solid #cacaca;
        padding: 0.7rem 0.625rem;
        margin-top: 0.3125rem;
    }

    label div.select {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 0.625rem;
    }

    h4 {
        font-size: 1rem;
        font-weight: 600;
    }

    select,
    input {
        background-color: transparent;
        color: ${colors.black};
        font-size: 1rem;
        font-weight: 500;
        height: 40px;
        outline: none;
    }
    select::placeholder, input::placeholder {
         color: ${colors.lightGrey};
    }

    div.input input,
    select {
        border: none;
        width: 100%;
    }

    div.input input:focus,
    select:focus {
        outline: none;
    }

    option {
        color: ${colors.black};
    }

    textarea {
        background-color: transparent;
        min-height: 10rem;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }

    div.input {
        display: flex;
        justify-content: space-between;
    }

    div.input input {
        padding: 0 1.25rem;
    }

    div.input button {
        color: ${colors.primaryColor};
        font-family: inherit;
        font-size: 1rem;
        font-weight: 500;
    }

    @media screen and (max-width: 1000px) {
        background-color: ${colors.bgGrey};
    }

    @media screen and (max-width: 565px) {
        margin-top: 60px;
        form > div {
            flex-direction: column;
        }

        label {
            width: 100%;
        }
    }
`;

export const LastItem = styled.div`
    margin: 1.88rem 0;

    div {
        display: flex;
        justify-content: space-between;
        padding: 0.625rem;
        font-size: 1rem;
        font-weight: 500;
    }

    .right {
        font-weight: 600;
    }
`;

export const Buttons = styled.div`
    align-self: flex-end;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
`;
