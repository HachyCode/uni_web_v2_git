import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #1b1e23;
    height: 80px;
    display: flex;
    justify-contect: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
    display: none;
    }
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #f08575;
        transition: 0.2s ease-in-out;
    }

    &.active {
        color: #31b7bc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #f08575;

    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    }
`;
