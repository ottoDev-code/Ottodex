import { styled } from "styled-components";
import theme from "./theme";
const { colors } = theme;

export const Container = styled.div`
    padding: 50px 0;
    background: #FBFBFB; 
    min-height: 100vh;
`;
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 550px;
    width: 95%;
    padding: 20px 60px;
    align-items: center;
    border-radius: 15px;
    border: 1px solid ${colors.primaryColor};
    background: ${colors.bgGrey}; 
    h1 {
        font-size: 26px;
        font-weight: 600; 
    }
    p {
        font-size: 16px;
        font-weight: 500; 
    }
`;
export const InputWrapper = styled.div`
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    label {
        font-size: 14px;
        font-weight: 500;
    }
`;
export const GoogleBtn = styled.button`
    outline: none;
    background: transparent;
    display: flex;
    width: 100%;
    padding: 0 10px;
    height: 45px;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    font-size: 16px;
    font-weight: 600; 
    border-radius: 10px;
    border: 2px solid ${colors.lightGrey}; 
    font-size: 14px;
    margin-top: 30px;
    cursor: pointer;
`;
export const InputContainer = styled.div`
    width: 100%; 
    border-radius: 10px;
    border: 1.5px solid #CACACA; 
    display: flex;
    align-items: center;
    padding-right: 15px;
    input {
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
        padding: 10px 20px;
        font-size: 15px;
        font-weight: 500; 
        &::placeholder {
            color: ${colors.lightGrey};
        }
    }
    select {
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
        padding: 10px 20px;
        font-size: 15px;
        font-weight: 500; 
        &::placeholder {
            color: ${colors.lightGrey};
        }
    }
    button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .level {
        min-width: 80px;
        padding: 5px 10px;
        background: ${colors.primaryColor}16;
        font-size: 14px;
        color: ${colors.primaryColor};
    }
`;
export const LogoWrapper = styled.button`
    margin-bottom: 15px;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
`;
export const SubmitButton = styled.button`
    outline: none;
    border: none;
    background: ${colors.primaryColor};
    display: flex;
    width: 100%;
    padding: 0 10px;
    height: 45px;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    font-size: 16px;
    font-weight: 600; 
    border-radius: 10px;
    font-size: 14px;
    margin: 10px 0;
    cursor: pointer;
`;
export const Or = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2px;
    margin: 30px 0;
    background: rgba(202, 202, 202, 0.79);
    width: 100%;
    &::after {
        content: "or";
        display: flex;
        color: ${colors.lightGrey};
        height: 28px;
        width: 28px;
        background: ${colors.bgGrey};
        align-items: center;
        justify-content: center;
    }
`;
export const AcceptTerms = styled.div`
    width: 100%;
    display: flex;
    column-gap: 10px;
    align-items: center;
    margin: 10px 0 12px 0;
    p {
        font-size: 14px;
    }
    button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
    a {
        text-decoration: underline;
        font-size: 14px;
    }
`;
export const QControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
