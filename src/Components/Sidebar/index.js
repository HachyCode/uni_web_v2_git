import React from 'react';
import {
    SidebarConatiner, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarConatiner isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "Subjects" onClick={toggle}> Subjects </SidebarLink>
                    <SidebarLink to = "News" onClick={toggle}> News </SidebarLink>
                    <SidebarLink to = "Support" onClick={toggle}> Support </SidebarLink>
                    <SidebarLink to = "MoreInfo" onClick={toggle}> MoreInfo </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/SignIn'> Sign In </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarConatiner>
    )
}

export default Sidebar
