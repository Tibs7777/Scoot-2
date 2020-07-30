import React from 'react';
import './WorldMap.scss';
import mapMobile from './world-map-mobile.png';

import Button from '../Button/Button';







class WorldMap extends React.Component{



    render() {

        return(
            <div className="WorldMap">
                <div className="WorldMap__map">
                    <img className="WorldMap__map__image" src={mapMobile} alt="World map"/>
                        <span className="WorldMap__map__location WorldMap__map__location--ny">New York</span>
                        <span className="WorldMap__map__location WorldMap__map__location--ld">London</span>
                        <span className="WorldMap__map__location WorldMap__map__location--jk">Jakarta</span>
                        <span className="WorldMap__map__location WorldMap__map__location--yh">Yokohama</span>
                </div>

                <div className="WorldMap__text">
                    <h2 className="WorldMap__text__title">Your City Not Listed?</h2>
                    <p className="WorldMap__text__paragraph">If you’d like to see Scoot in your hometown, be sure to let us know. 
                    We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                    <Button main={true} text={'Message Us'}/>
                </div>
            </div>
        )
    }
}

export default WorldMap