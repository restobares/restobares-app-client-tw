import React from 'react';
import icon1 from '../../../videosAndImages/ordenConfirm2.svg';
import icon2 from '../../../videosAndImages/cooking.svg';
import icon3 from '../../../videosAndImages/multitasking.svg';
import {ServicesContainer,
        ServicesH1,
        ServicesH2,
        ServicesP,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
    } from './ServicesElements.js';


const Services = () => {
    return (
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon1}/>
                        <ServicesH2>Clients</ServicesH2>
                        <ServicesP>Interactive and agile experience helping the ordering and bill payment process.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2}/>
                        <ServicesH2>Waiters and Chefs</ServicesH2>
                        <ServicesP>Staff have the facility to control all tables and its orders in real time.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3}/>
                        <ServicesH2>Mananger</ServicesH2>
                        <ServicesP>Administrator can control all process in the restaurant and configure each interface.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
    )
}

export default Services
