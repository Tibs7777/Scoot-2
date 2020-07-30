import React from 'react';
import './Home.scss';

import Banner from '../Banner/Banner';
import AppFlow from '../AppFlow/AppFlow'
import InfoCard from '../InfoCard/InfoCard';

import telemetry from './telemetry.jpg';
import nearYou from './near-you.jpg';
import payments from './payments.jpg';




const title = "Scooter sharing made simple";
const text = `Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient 
locations in each of our cities. Use our app to locate the nearest bike, unlock 
it with a tap, and you’re away!`



/* Valid arrow values are: left-down, left-up, left-down-short, right
    For no button use null
*/
const InfoCards = [
        {
            image: telemetry,
            reverse: true,
            title: "Easy to use riding telemetry",
            text: `The Scoot app is available with riding telemetry. 
            This means it can show you your average speed, how long you've been using the scooter, your traveling distance, 
            and many more things all in an easy to use app.`,
            button: "Learn More",
            arrow: "left-down",
            href: "/about"
        },

        {
            image: nearYou,
            reverse: false,
            title: "Coming to a city near you",
            text: `Scoot is available in 4 major cities so far. 
            We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. 
            We’re aiming to let our scooters loose on 23 cities over the coming year.`,
            button: "Learn More",
            arrow: "right",
            href: "/locations"
        },

        {
            image: payments,
            reverse: true,
            title: "Zero hassle payments",
            text: `Our payment is as easy as one two three. We accept most credit cards and debit cards. 
            You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.`,
            button: "Learn More",
            arrow: "left-down-short",
            href: "/about"
        },     
]


class Home extends React.Component{

    

    render() {
        return(
            <div className="Home">
                <Banner title={title}
                        text={text}
                        button={true}
                        homepage={true}/>
                <AppFlow />
                <div className="InfoCards">
                {
                    InfoCards.map(card => {
                        return <InfoCard image={card.image}
                          reverse={card.reverse}
                          title={card.title}
                          text={card.text}
                          arrow={card.arrow}
                          button={card.button}
                          href={card.href}/>
                    })
                }
                </div>
                          
            </div>
        )
    }
}

export default Home;