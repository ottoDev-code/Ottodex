"use client"
import { styled } from "styled-components";
import theme from "./theme";
const { sizes, colors } = theme;

export const Container = styled.div`
    background: ${colors.bgGrey}; 
    display: flex;
    column-gap: 25px;
    min-height: 100vh;
`;
export const Wrapper = styled.div`
    width: calc(100% - 295px);
    max-width: calc(100% - 295px);
    padding-right: 20px;
    max-height: 100vh;
    overflow-y: scroll;
`;
