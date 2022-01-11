import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 750px;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    @media screen and (max-width:768px) {
        height: 800px;
    }
    @media screen and (max-width:480px) {
        height: 1000px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 160px;
    max-width: 160px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`;

export const ServicesIcon = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-bottom: 5px;
`;

export const ServicesH2 =styled.h2`
    font-size: 0.8rem;
    margin-bottom: 2px;
    font-weight: bold;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const ServicesP2 = styled.p`
    font-size: 18px;
    text-align: justify;
    padding-bottom: 15px;
    max-width: 60%;
    color: #fff;
    line-height: 24px;
    @media screen and (max-width:768px){
        max-width: 90%;
        margin-right: 15px;
        margin-left: 15px;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;
    margin-bottom: 24px;
@media screen and (max-width: 480px){
    font-size: 32px
}
`;

export const SocialIcons = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
`;
