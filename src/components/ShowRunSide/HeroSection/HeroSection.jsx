import React from 'react'
import {HeroContainer, HeroBg, HeroContent, VideoBg} from './HeroSectionElements.js';
import video from '../../../video/video.mp4';
import { Button } from 'react-scroll';
function HeroSection() {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
            {/* <HeroContent>
                <HeroH1>

                </HeroH1>
                <HeroP>

                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/resto/register'>
                        Get Started {hover ? <ArrowForward/>:<ArrowRigth/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent> */}
        </HeroContainer>

            
    )
}

export default HeroSection
