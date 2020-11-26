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
                    <SidebarLink to = "UCASCalculator" onClick={toggle}> UCAS Calculator </SidebarLink>
                    <SidebarLink to = "SingIn" onClick={toggle}> Sing In </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarConatiner>
    )
}

export default Sidebar
