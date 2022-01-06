import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  VideoBg,
  HeroH1,
  HeroP,
  HeroBtnWrappe,
  ArrowRigth,
  ArrowForward,
} from "./HeroSectionElements.js";
import video from "../../../video/video.mp4";
import { Button } from "react-scroll";
function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Dingebell</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet
          tenetur nobis enim deleniti quibusdam accusamus hic reiciendis illum.
          Repellendus nostrum vero modi consectetur molestias, amet quam debitis
          sint nemo.
        </HeroP>
        <HeroBtnWrappe>
          <Button
            to="/resto/register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRigth />}
          </Button>
        </HeroBtnWrappe>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
