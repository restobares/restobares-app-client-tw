import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FoooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FoooterLinkItems>
                <FooterLinkTitle>Social media</FooterLinkTitle>
                <FooterLink to="/sing">linkedin</FooterLink>
                <FooterLink to="/sing">gitHub</FooterLink>
                <FooterLink to="/sing">instagram</FooterLink>
              </FoooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">DingBell</SocialLogo>
              <WebSiteRights>
                DingBell © {new Date().getFullYear()} All rights reserved.
              </WebSiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://es-la.facebook.com/leomessi"
                  target="_blank"
                  arial-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
