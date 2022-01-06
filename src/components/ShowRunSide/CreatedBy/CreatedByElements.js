import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    @media screen and (max-width:768px) {
        height: 1600px;
    }
    @media screen and (max-width:480px) {
        height: 1800px;
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
        grid-template-columns: 1fr;
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
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 60px;
    width: 60px;
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
    font-size: 1.5rem;
    text-align: justify;
    padding-bottom: 15px;
    max-width: 60%;
    color: #fff;
    line-height: 1.5rem;
    @media screen and (max-width:768px){
        max-width: 90%;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 30px;
@media screen and (max-width: 480px){
    font-size: 2rem;
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