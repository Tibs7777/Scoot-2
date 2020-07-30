import React from 'react';
import './AppFlow.scss';
import locate from './locate.svg'
import scooter from './scooter.svg'
import ride from './ride.svg'




class AppFlow extends React.Component{





    render() {

        return(
            <div className="AppFlow">

                <div className="AppFlow-stage">
                    <div className="AppFlow-stage__icon-container">
                        <img className="AppFlow-stage__icon-container__icon" src={locate} alt="Locate icon"/>
                    </div>
                    <div className="AppFlow-stage__text">
                        <h4 className="AppFlow-stage__text__title">Locate with app</h4>
                        <p className="AppFlow-stage__text__paragraph">Use the app to find the nearest scooter to you. We are continuously placing scooters 
                        in the areas with most demand, so one should never be too far away.</p>
                    </div>
                </div>

                <div className="AppFlow-stage">
                <div className="AppFlow-stage__icon-container">
                    <img className="AppFlow-stage__icon-container__icon" src={scooter} alt="Scooter icon"/>
                </div>
                    <div className="AppFlow-stage__text">
                        <h4 className="AppFlow-stage__text__title">Pick your scooter</h4>
                        <p className="AppFlow-stage__text__paragraph">We show the most important info for the scooters closest to you. So you know how much 
                        charge they have left and can see roughly how much it will cost.</p>
                    </div>
                </div>

                <div className="AppFlow-stage">
                <div className="AppFlow-stage__icon-container">
                    <img className="AppFlow-stage__icon-container__icon" src={ride} alt="Ride icon"/>
                </div>
                    <div className="AppFlow-stage__text">
                        <h4 className="AppFlow-stage__text__title">Enjoy the ride</h4>
                        <p className="AppFlow-stage__text__paragraph">Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, 
                        and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default AppFlow;