import React from 'react';






class ListItem extends React.Component{



    render() {

        return(
            <div className="ListItem">
            <div className="ListItem__img-container">
                <img className="ListItem__img-container__image" src={this.props.image} alt="Our tech"/>
                <div className="ListItem__img-container__number">0{this.props.number}</div>
            </div>
            <div className="ListItem__text">
                <h4 className="ListItem__text__title">{this.props.title}</h4>
                <p className="ListItem__text__paragraph">{this.props.text}</p>
            </div>
        </div>
        )
    }
}

export default ListItem;