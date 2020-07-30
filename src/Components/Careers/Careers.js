import React from 'react';
import './Careers.scss';

import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';

import joinUs from './join-us.jpg';
import NumberedList from '../NumberedList/NumberedList';
import Joblist from '../Joblist/Joblist';






/* Valid arrow values are: left-down, left-up, left-down-short, right
    For no button use null
*/
const InfoCards = [
    {
        image: joinUs,
        reverse: true,
        title: "Care to join our mission?",
        text: `We’re always looking for ambitious individuals to help us on our journey. 
        If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!`,
        button: "Say Hello",
        arrow: "left-down"
    },
]

class Careers extends React.Component{


    

    render() {
        return(
            <div className="Careers">
                <Banner title={'Careers'}
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
                <NumberedList title={"Why join us?"}/>
                <Joblist />
            </div>
        )
    }
}

export default Careers;