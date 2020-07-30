import React from 'react';
import Button from '../Button/Button';




class Job extends React.Component{



    render() {

        return(
            <div className="Job">
            <div className="Job__text">
            <h6 className="Job__text__title">{this.props.title}</h6>
                <span className="Job__text__location">{this.props.location}</span>
            </div>
            <Button main={true} text={"Apply"}/>
        </div>
        )
    }
}

export default Job;