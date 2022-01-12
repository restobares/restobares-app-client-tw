import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import juanC from '../../../videosAndImages/juancanelon.jpg';
import nahuelK from '../../../videosAndImages/nahuelKisser.jpg'
import mateoL from '../../../videosAndImages/mateoLopez.jpg'
import nicolasM from '../../../videosAndImages/nicolasMorel.jpg'
import eliasB from '../../../videosAndImages/eliasBorda.jpg'
import sebastianM from '../../../videosAndImages/sebastianMesa.jpg'
import chardH from '../../../videosAndImages/chardHernandez.jpg';
import brianB from '../../../videosAndImages/brianBacarezza.jpg';
import {ServicesContainer,
        ServicesH1,
        ServicesH2,
        ServicesP2,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        SocialIcons,
        SocialIconLink,
    } from './CreatedByElements';


const CreatedBy = () => {
    return (
            <ServicesContainer id='createdby'>
                <ServicesH1>Created By</ServicesH1>
                <ServicesP2><p className='mx-4'>
                  This app is a project created by eight partners in a month for Henry Bootcamp. It consists 
                    in a interactive menu which can be scanned from QR code streamlining the ordering services in restaurants. 
                    </p>
                </ServicesP2>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={juanC}/>
                        <ServicesH2>Juan Antonio Canelon</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/liscanojac/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/liscanojac" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
                {/* <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                  <FaTwitter />
                </SocialIconLink> */}
              </SocialIcons>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={nahuelK}/>
                        <ServicesH2>Nahuel Kisser</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/nahuel-kisser/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/kisser91" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={mateoL}/>
                        <ServicesH2>Mateo López</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/mateo-lopez-salgado/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/MateolLopez" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={nicolasM}/>
                        <ServicesH2>Nicolás Morel</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/nicolas-m-morel/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/NicolasMarianoMorel" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={eliasB}/>
                        <ServicesH2>Elías Borda</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/eliasdbr/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/Eliasdbr" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={sebastianM}/>
                        <ServicesH2>Sebastian Mesa</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/sebastianmesazafra/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/Smesaz" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={chardH}/>
                        <ServicesH2>Chard Hernández</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/chardhm/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/chardhm" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={brianB}/>
                        <ServicesH2>Brian Bacarezza</ServicesH2>
                        <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/in/brian-bacarezza/" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/brianbacca" target="_blank" arial-label="GitHub">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
    )
}

export default CreatedBy
