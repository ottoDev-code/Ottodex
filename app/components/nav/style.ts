import theme from "@/app/styles/theme";
import Link from "next/link";
import { styled } from "styled-components";

interface INavProps {
    $isScrolled: boolean;
}
interface ILink {
    $isActive: boolean;
}

const { sizes, colors } = theme;

export const Container = styled.div<INavProps>`
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({$isScrolled}) => $isScrolled ? colors.bgGrey : "transparent"};
    z-index: 999999;
`;
export const Wrapper = styled.div`
    width: 98%;
    max-width: ${sizes.wrapperWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.div`
`;
export const Links = styled.div`
    display: flex;
    column-gap: 20px;
    font-size: 16px;
    a {
        font-size: 16px;
        font-weight: 500;
    }
    a:hover {
        color: ${colors.black};
    }
`;
export const NavLink = styled.div<ILink>`
    a {
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        color: ${({$isActive}) => $isActive ? colors.black : colors.midGrey};
    }
    a:hover {
        color: ${colors.black};
    }
`;
export const Auth = styled.div`
    display: flex;
    column-gap: 20px;
    a {
        font-weight: 500;
        border: 1px solid ${colors.primaryColor};
        border-radius: 5px;
        padding: 5px 10px;
        display: inline-block;
    }
    a:first-of-type {
        color: ${colors.primaryColor};
    }
    a:last-of-type {
        background: ${colors.primaryColor};
        color: ${colors.black};
    }
`;