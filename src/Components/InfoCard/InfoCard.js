import React from 'react';
import './InfoCard.scss';
import Button from '../Button/Button';




class InfoCard extends React.Component{




    render() {
        let className = "InfoCard";
        if(this.props.reverse) {
            className += ' InfoCard--reverse';
        }
        if(this.props.arrow) {
            className += ` InfoCard--a-${this.props.arrow}`;
        }

        return(
            <div className={className}>
                <div className="InfoCard__image-container">
                    <img className="InfoCard__image-container__image" src={this.props.image} alt="Telemetry"/>
                </div>
                <div className="InfoCard__text">
                    <h4 className="InfoCard__text__title">{this.props.title}</h4>
                    <p className="InfoCard__text__paragraph">{this.props.text}</p>
                    {this.props.button ? <Button main={true} text={this.props.button} href={this.props.href ? this.props.href : '#'}/> : null}
                </div>
            </div>
        )
    }
}

export default InfoCard;