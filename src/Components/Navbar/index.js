import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {

    
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
    
        if (window.scrollY >= 80) {
        setScrollNav(true);
        } 
    
        else {
        setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <Nav scrollNav={scrollNav} >
            <NavLink to='/'>
                <h1>Logo</h1>
            </NavLink>
            <Bars onClick={toggle}/>
            <NavMenu>
                <NavLink to='/Subjects' activeStyle>
                    Subjects
                </NavLink>
                <NavLink to='/News' activeStyle>
                    News
                </NavLink>
                <NavLink to='/Support' activeStyle>
                    Support
                </NavLink>
                <NavLink to='/MoreInfo' activeStyle>
                    MoreInfo
                </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/SignIn'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;