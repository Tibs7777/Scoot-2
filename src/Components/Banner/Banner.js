import React from 'react';
import './Banner.scss';

import Button from '../Button/Button'





class Banner extends React.Component{




    render() {
        let className = "header__banner";
        if(!this.props.homepage){
            className += ' header__banner--nothome'
        }
        return(
        <div className={className}>
            <div className="header__banner__text">
            <h1 className="header__banner__text__title">{this.props.title}</h1>
                <p className="header__banner__text__paragraph">{this.props.text}</p>
                {this.props.button ? <Button main={true} text={'Get Scootin'} href="#DownloadBanner"/> : null}
            </div>
            <div className="header__banner__circles"></div>
        </div>
        )
    }
}

export default Banner