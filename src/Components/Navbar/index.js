import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>
                <h1>Logo</h1>
            </NavLink>
            <Bars />
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