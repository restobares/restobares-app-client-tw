import React from "react";
import {Icon, SideBarContainer, CloseIcon, SideBarLink, SideBarMenu, SideBarWrapper, SideBtnWrap, SideBarRoute} from './SideBarElement';
const SideBar = ({isOpen, toggle})=>{
    return(
        <SideBarContainer isOpen={isOpen} onClick={toggle} >
            {/* <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon> */}
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='signup' 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={40}
                    >
                        Sign Up
                    </SideBarLink>
                    <SideBarLink to='services' onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to='createdby' onClick={toggle}>
                        Created By
                    </SideBarLink>
                    <SideBarLink to='about' onClick={toggle}>
                        About
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap >
                    <SideBarRoute to='/resto/login'>Sign In</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;