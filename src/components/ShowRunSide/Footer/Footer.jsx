import React from "react";
import { FaGithub } from "react-icons/fa";

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
      <FooterContainer id='about' className="pt-0 md:pt-72">
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FoooterLinkItems>
                <FooterLinkTitle>Product</FooterLinkTitle>
                <FooterLink>Features</FooterLink>
                <FooterLink>Table Menu</FooterLink>
                <FooterLink>Dine-in QR Menu</FooterLink>
              </FoooterLinkItems>
              <FoooterLinkItems>
                <FooterLinkTitle>Business Types</FooterLinkTitle>
                <FooterLink to="/sing">Hotels</FooterLink>
                <FooterLink to="/sing">Cafes & Bakery</FooterLink>
                <FooterLink to="/sing">Coffee Shop</FooterLink>
              </FoooterLinkItems>
              <FoooterLinkItems>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLink to="/sing">Help Center</FooterLink>
                <FooterLink to="/sing">Privacy & Terms</FooterLink>
                <FooterLink to="/sing">Blog</FooterLink>
              </FoooterLinkItems>
              <FoooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/sing">restobaresapp@gmail.com</FooterLink>
                <FooterLink to="/sing">+54 9 11 3408-4364</FooterLink>
                <FooterLink to="/sing">Av.Santa Fe 4888 Buenos Aires-Argentina</FooterLink>
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
                <SocialIconLink>
                  {/* <FaFacebook /> */}
                </SocialIconLink>
                <SocialIconLink href="https://github.com/restobares" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink >
                  {/* <FaLinkedin /> */}
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
