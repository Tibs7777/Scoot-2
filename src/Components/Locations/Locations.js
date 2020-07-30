import React from 'react';
import './Locations.scss';

import Banner from '../Banner/Banner';
import WorldMap from '../WorldMap/WorldMap';




class Locations extends React.Component{


    

    render() {
        return(
            <div className="Locations">
                <Banner title={'Locations'}
                        text={false}
                        button={false}
                        />
                <WorldMap />
            </div>
        )
    }
}

export default Locations;