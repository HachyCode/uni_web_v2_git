import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';
import {White_Logo} from '../../Images/Logo_White.png';

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
            <NavLink to='/' onClick={toggleHome}>
                <img src = {White_Logo}/>
            </NavLink>
            <Bars onClick={toggle}/>
            <NavMenu>
                <NavLink to='/Subjects' activeStyle onClick={toggleHome}>
                    Subjects
                </NavLink>
                <NavLink to='/News' activeStyle onClick={toggleHome}>
                    News
                </NavLink>
                <NavLink to='/UCASCalculator' activeStyle onClick={toggleHome}>
                    UCASCalculator
                </NavLink>
                <NavLink to='/SingIn' activeStyle onClick={toggleHome}>
                    SingIn
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;