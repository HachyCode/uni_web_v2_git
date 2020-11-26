import React from 'react';
import {
    SidebarConatiner, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
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
                    <SidebarLink to = "SignIn" onClick={toggle}> Sign In </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarConatiner>
    )
}

export default Sidebar
