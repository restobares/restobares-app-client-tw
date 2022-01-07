import React from "react";
import {scroller} from "react-scroll";
import {useNavigate} from "react-router-dom";
import {Icon, SideBarContainer, CloseIcon, SideBarLink, SideBarMenu, SideBarWrapper, SideBtnWrap, SideBarRoute} from './SideBarElement';
const SideBar = ({isOpen, toggle})=>{
    const history = useNavigate();
    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700});
    const scrollToPage = async (target) => {
        if (history.location.pathname !=='/') {
            await history.push('/');
        }
        scrollTarget(target);
    };
    return(
        <SideBarContainer isOpen={isOpen} onClick={toggle} >
            {/* <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon> */}
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='signup' 
                    onClick={() => scrollToPage('signup'),toggle} 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={40}
                    activeClass="active"
                    >
                        Sign Up
                    </SideBarLink>
                    <SideBarLink to='services' 
                    onClick={() => scrollToPage('services'), toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={40}>
                        Services
                    </SideBarLink>
                    <SideBarLink to='createdbymobile' 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={40}
                    onClick={toggle}
                    >
                        Created By
                    </SideBarLink>
                    <SideBarLink to='about' 
                    onClick={toggle}>
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