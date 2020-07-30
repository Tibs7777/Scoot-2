import React from 'react';
import './About.scss';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import NumberedList from '../NumberedList/NumberedList';
import FAQ from '../FAQ/FAQ';

import digitalEra from './digital-era.jpg';
import betterLiving from './better-living.jpg';


/* Valid arrow values are: left-down, left-up, left-down-short, right
    For no button use null
*/
const InfoCards = [
    {
        image: digitalEra,
        reverse: true,
        title: "Mobility for the digital era",
        text: `Getting around should be simple (and even fun!) for everyone. 
        We embrace technology to provide low cost, smart access to scooters at your fingertips.`,
        button: null,
        arrow: "left-up"
    },

    {
        image: betterLiving,
        reverse: false,
        title: "Better urban living",
        text: `We’re helping connect cities and bring people closer together. 
        Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.`,
        button: null,
        arrow: "right" 
    },  
]

class About extends React.Component{


    

    render() {
        return(
            <div className="About">
                <Banner title={'About'}
                        text={false}
                        button={false}
                        />
                <div className="InfoCards">
                {
                    InfoCards.map(card => {
                        return <InfoCard image={card.image}
                          reverse={card.reverse}
                          title={card.title}
                          text={card.text}
                          arrow={card.arrow}
                          button={card.button}/>
                    })
                }
                </div>
                <NumberedList title={"Our values"}/>
                <FAQ />
            </div>
        )
    }
}

export default About;