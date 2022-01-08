import React, {useState} from 'react'
import imgAbout from '../../../videosAndImages/specialEvent.svg';
import {InfoContainer, 
        InfoRow, 
        InfoWrapper, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine, 
        Heading, 
        Subtitle, 
        BtnWrap, 
        ImgWrap, 
        Img,
        ArrowForward,
        ArrowRigth,
        NavBtnLink,
} from './InfoSectionElements.js';
import { NavLink } from 'react-router-dom';

const InfoSection = ({LightBg, id, imgStart, topLine, LightText,
headLine, darkText, description, buttonLabel, alt, dark, primary, dark2}) => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
      };

    return (
        <>
            <InfoContainer LightBg={LightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading LightText={LightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                {/* <Button to='home' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary?1:0}
                                dark={dark?1:0}
                                dark2={dark2?1:0}
                                >{buttonLabel}</Button> */}
                                <NavBtnLink to='/resto/register'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                dark="true"
                                >
                                Get Started {hover ? <ArrowForward/>:<ArrowRigth/>}
                                </NavBtnLink>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                          <ImgWrap>
                            <Img src={imgAbout} alt={alt}></Img>
                          </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
