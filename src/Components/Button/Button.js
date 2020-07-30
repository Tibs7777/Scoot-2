import React from 'react';
import './Button.scss';


class Button extends React.Component{




    render() {
        let className = "button"
        if(this.props.nav){ 
            className += ' button--nav'
        } else if(this.props.main){
            className += ' button--main'
        }

        return(
        <a className={className} href={this.props.href ? this.props.href : '#'}>{this.props.text}</a>
        )
    }



}

export default Button