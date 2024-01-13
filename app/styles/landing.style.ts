"use client"
import { styled } from "styled-components";
import theme from "./theme";
import { motion } from "framer-motion";
const { colors, breakpoints } = theme;

interface IServiceProps {
    $gridArea: "one" | "two" | "three" | "four";
    $imgSrc: string;
    $bgPosition?: "right";
}

export const Container = styled.div`
    overflow-x: hidden;
`;
export const SectionOne = styled(motion.section)`
    padding-top: 100px;
    background: url("/bg-1.svg");
    background-position: top center;
    background-repeat: no-repeat;
    padding-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100dvh;
    min-height: 400px;
    h1 {
        font-size: 40px; 
        font-weight: 500;
        color: ${colors.black};
        text-align: center;
        padding-bottom: 20px;
    }
    p {
        font-size: 16px; 
        font-weight: 500;
        color: ${colors.black};
        text-align: center;
        padding-bottom: 20px;
        max-width: 840px;
    }
    a {
        font-weight: 500;
        border: 1px solid ${colors.primaryColor};
        border-radius: 5px;
        padding: 10px 15px;
        display: inline-block;
        background: ${colors.primaryColor};
        color: ${colors.black};
    }
     ${breakpoints.sm} {
        background-size: 800px;
        background-position: center;
        padding-bottom: 50px;
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 16px;
        }
        a {
            font-size: 14px;
        }
    }
`;
export const TagHeading = styled.div`
    border-radius: 10px;
    border: 1px solid #FC0;
    background: #FFF6D2;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    padding: 5px 10px;
    width: max-content;
    margin: 20px auto;
    color: ${colors.primaryColor};
    ${breakpoints.sm} {
        font-size: 12px;
    }
`;
export const SectionTwo = styled.section`
    padding: 105px 0;
    h2 {
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px;
    }
`;
export const GridContainer = styled(motion.div)`
    display: grid;
    column-gap: 16px;
    row-gap: 16px;
    height: 576px;
    width: 100%;
    grid-template-areas: 'one one four'
                         'two three four';
    ;
    ${breakpoints.sm} {
       display: flex;
       flex-direction: column;
       height: auto;
    }
`;
export const ServiceCard = styled(motion.div)<IServiceProps>`
    grid-area: ${({$gridArea}) => $gridArea};
    border-radius: 10px;
    background: url(${({$imgSrc}) => $imgSrc}), ${colors.lightPrimaryColor};
    background-position: ${({$bgPosition}) => $bgPosition === "right" ? "top right": "top center"};
    background-repeat: no-repeat;
    position: relative;
    div {
        display: inline-flex;
        height: 100%;
        flex-direction: column;
        justify-content: end;
        max-width: 325px;
        padding: 19px 15px;
        h4 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
        }
    }
    ${breakpoints.sm} {
        background-position: top left;
        background-size: 200px;
        div {
            min-height: 280px;
        }
    }
`;
export const SectionThree = styled(motion.section)`
    padding: 102px 0;
    h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
    }
    p {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }
`;
export const SectionWapper = styled.div`
    display: flex;
    align-items: center;
`;
export const OutlineWrapper = styled.div`
    padding-right: 15px;
    min-width: calc(50% - 50px);
    border-right: 1px solid #D9D9D9;
`;
export const OutlineCard = styled(motion.div)`
    display: flex;
    column-gap: 8px;
     background: ${colors.bgGrey}; 
    border-bottom: 1px solid #D9D9D9;
    margin: 13px 0;
    align-items: center;
    padding: 10px 0;
    h1 {
        font-size: 100px;
        opacity: 0.2;
        min-width: 135px;
    }
    p {
        text-align: left;
    }
    &:last-of-type {
        border-bottom: none;
    }

    ${breakpoints.sm} {
       p {
        font-size: 14px;
       }
    }
`;
export const ImageWrapper = styled.div`
    position: relative;
    width: calc(50% - 50px);
    min-width: calc(50% - 50px);
    height: auto;
    ${breakpoints.sm} {
       height: 320px;
       width: 100%;
    }
`;
export const SectionFour = styled.section`
    padding: 100px 0;
    h2 {
        font-size: 24px; 
        font-weight: 600;
        margin-bottom: 30px;
        text-align: center;
    }

    ${breakpoints.sm} {
       padding: 50px 0;
    }
`;
export const ReviewWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    ${breakpoints.sm} {
       flex-direction: column;
       row-gap: 20px;
       padding: 20px 0;
    }
`;
export const ReviewLine = styled.div`
    margin-bottom: 20px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    div {
        height: 0;
        width: 100%;
        border-bottom: 1px solid black;
    }
`;
export const ReviewCard = styled(motion.div)`
    max-width: 474px;
    p {
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 15px;
    }
`;
export const UserCard = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
    h3 {
        font-size: 18px;
        font-weight: 600;
    }
`;
export const UserImage = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    overflow: hidden;
    border-radius: 50%;
`;
export const SectionFive = styled(motion.section)`
     padding: 102px 0;
     position: relative;
    h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
    }
    p {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }
`;
export const SectionWrapper = styled(motion.div)`
    display: flex;
    column-gap: 100px;
    margin-top: 50px;
    ${breakpoints.sm} {
       flex-direction: column-reverse;
    }
`;
export const SectionWrapperT = styled.div`
    display: flex;
    column-gap: 100px;
    margin-top: 50px;
    ${breakpoints.sm} {
       flex-direction: column;
       row-gap: 20px;
    }
`;
export const OutlineWrapperT = styled.div`
    min-width: calc(50% - 50px);
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`;
export const OutlineCardT = styled(motion.div)`
    border-radius: 15px;
    border: 1px solid ${colors.primaryColor};
    background: ${colors.bgGrey};
    box-shadow: 0px 4px 4px 0px rgba(243, 166, 30, 0.25);
    display: flex;
    column-gap: 10px;
    padding: 10px;
    align-items: center;
    h1 {
        font-size: 100px;
        opacity: 0.2;
        color:  ${colors.primaryColor};
    }
    p {
        text-align: left;
    }
`;
export const SectionSix = styled.section`
    padding: 90px 0;
    h2 {
        font-size: 24px;
        font-weight: 600; 
        margin-bottom: 20px;
        text-align: center;
    }

    ${breakpoints.sm} {
       h2 {
        font-size: 20px;
       }
    }
`;
export const SectionSeven = styled.section`
    padding: 90px 0;
    h2 {
        font-size: 24px;
        font-weight: 600; 
        margin-bottom: 20px;
        text-align: center;
    }

    ${breakpoints.sm} {
      padding: 30px 0;
      h2 {
        font-size: 20px;
      }
    }
`;
export const SectionEight = styled.section`
    padding: 90px 0;
    h2 {
        font-size: 24px;
        font-weight: 600; 
        margin-bottom: 20px;
        text-align: center;
    }
`;
export const TableWrapper = styled.div`
    border-top: 1px solid #D9D9D9;
    ${breakpoints.sm} {
      display: none;
    }
`;
export const Tr = styled.div`
    display: flex;
`;
export const Th = styled.div`
    border-bottom: 1px solid #D9D9D9;
    border-left: 1px solid #D9D9D9;
    height: 60px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    width: 17.5%;
    justify-content: center;
    &:first-child {
        width: 30%;
        justify-content: start;
        padding-left: 15px;
    }
    &:last-child {
        border-right: 1px solid #D9D9D9;
    }
`;
export const Td = styled.div`
    border-bottom: 1px solid #D9D9D9;
    border-left: 1px solid #D9D9D9;
    height: 60px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    width: 17.5%;
    justify-content: center;
    &:first-child {
        width: 30%;
        justify-content: start;
    }
    &:last-child {
        border-right: 1px solid #D9D9D9;
    }
    button {
        border-radius: 5px;
        background: ${colors.primaryColor}; 
        padding: 10px 15px;   
        font-size: 14px;
        font-weight: 500;   
        border: none;
        outline: none;
        cursor: pointer;
    }
`;
export const SectionNine = styled(motion.section)`
    padding: 102px 0;
    h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
    }
    p {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }

    ${breakpoints.sm} {
       h2 {
        font-size: 20px;
       }
    }
`;
export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 13px;
`;
export const CategoryCard = styled(motion.div)`
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background: ${colors.bgGrey}; 
    width: 100%;
    max-width: 260px;
    height: 280px;
    .icon {
        height: 48px;
        width: 48px;
        background: ${colors.primaryColor};
        margin-bottom: 20px;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .down {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 78px);
    }
    h4 {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 600;
    }
    button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        column-gap: 10px;
    }

    ${breakpoints.sm} {
       max-width: 100%;
    }
`;
export const StepWrapper = styled.div`
`;
export const StepMapWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const StepMap = styled(motion.div)`
    width: 25%;
    min-width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    span {
        height: 48px;
        width: 48px;
        background: ${colors.primaryColor};
        border-radius: 50%;
        color: #FFF;
        font-size: 20px;
        font-weight: 600; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const StepLine = styled(motion.div)`
    background: ${colors.primaryColor};
    position: absolute;
    height: 2px;
    width: 75%;
    max-width: 75%;
`;
export const Step = styled.div`
    display: flex;
    padding-top: 10px;
`;
export const StepText = styled.p`
    width: 25%;
    max-width: 25%;
    text-align: center;
    font-weight: 500; 
    ${breakpoints.sm} {
       font-size: 12px;
    }
`;
export const SocialCardWrap = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin: 20px 0;
    ${breakpoints.sm} {
       flex-direction: column;
       row-gap: 20px;
    }
`;
export const SocialCard = styled.div`
    width: calc(50% - 10px);
    max-width: 450px;
    padding: 23px 34px; 
    border-radius: 15px;
    background: ${colors.bgGrey};
    box-shadow: 4px 4px 20px 0px rgba(243, 166, 30, 0.15);
    display: flex;
    column-gap: 28px;
    align-items: center;
    .icon {
        height: 48px;
        width: 48px;
        min-height: 48px;
        min-width: 48px;
        background: ${colors.primaryColor};
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h4 {
            font-size: 18px;
            font-weight: 600;
        }
    }

    ${breakpoints.sm} {
       width: 100%;
       .content {
        p {
            text-align: left;
        }
       }
    }
`;
export const OverviewContent = styled.div`
    padding-top: 100px;
    h1 {
        font-size: 24px;
        font-weight: 600; 
        text-align: center;
        text-transform: uppercase;
    }
    p {
        margin-top: 10px;
        font-weight: 500;
        font-size: 18px;
    }
    ul {
        padding-left: 15px;
        font-weight: 500;
        font-size: 18px;
    }
    ${breakpoints.sm} {
       h1 {
        font-size: 20px;
        }
        p {
            font-size: 14px;
        }
    }
`;
