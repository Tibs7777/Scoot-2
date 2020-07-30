import React from 'react';
import './NumberedList.scss';
import ourTech from './our-tech.jpg'
import ourIntegrity from './our-integrity.jpg';
import ourCommunity from './our-community.jpg';

import ListItem from '../ListItem/ListItem';


const Items = [
    {
        image: ourTech,
        title: "Our tech",
        text: `We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!`
    },

    {
        image: ourIntegrity,
        title: "Our integrity",
        text: `We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.`
    },

    {
        image: ourCommunity,
        title: "Our community",
        text: `We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.`
    }
]


class NumberedList extends React.Component{


    render() {
        let i = 1;
        return(
            <div className="NumberedList">

                <h2 className="NumberedList__title">{this.props.title}</h2>
                <div className="NumberedList__inner">
                {
                    Items.map(item => {
                        i++
                        return <ListItem image={item.image} 
                                         title={item.title}
                                         text={item.text}
                                         number={i-1}/>
                    })
                }
                </div>

            </div>
        )
    }
}

export default NumberedList;