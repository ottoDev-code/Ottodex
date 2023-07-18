"use client"
import { styled } from "styled-components";
import theme from "./theme";
const { sizes, colors } = theme;

export const Container = styled.div`
    background: ${colors.bgGrey}; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;
export const Wrapper = styled.div`
    width: 98%;
    max-width: ${sizes.wrapperWidth};
    margin: 0 auto;
`;
