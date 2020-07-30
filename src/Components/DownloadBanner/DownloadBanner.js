import React from 'react';
import './DownloadBanner.scss';
import appStore from './app-store.svg';
import googlePlay from './google-play.svg';





class DownloadBanner extends React.Component{




    render() {

        return(
            <div className="DownloadBanner" id="DownloadBanner">
                <h2 className="DownloadBanner__title">Sign up and Scoot off today</h2>
                <div className="DownloadBanner__buttons">
                    <img className="DownloadBanner__buttons__app" src={appStore} alt="App store link"/>
                    <img className="DownloadBanner__buttons__google" src={googlePlay} alt="Google play link"/>
                </div>
            </div>
        )
    }
}

export default DownloadBanner;