import React from 'react';
import chevron from './chevron.svg';




class Question extends React.Component{
constructor(props){
    super(props)

    this.state = {answer: "closed"}

    this.handleClick = this.handleClick.bind(this)
    }
    
    
    handleClick (event) {
        let answer = event.target.parentElement.children[1];
        let chevron = event.target.children[1];

        if(this.state.answer === "closed"){
            answer.classList = "FAQ__segment__questions__question__answer FAQ__segment__questions__question__answer--open";
            chevron.classList = "FAQ__segment__questions__question__title__chevron"
            answer.style.maxHeight = answer.scrollHeight + 32 + "px";
            this.setState({answer:'open'})
        }
        else{
            answer.classList = "FAQ__segment__questions__question__answer FAQ__segment__questions__question__answer--closed";
            chevron.classList = "FAQ__segment__questions__question__title__chevron FAQ__segment__questions__question__title__chevron--up"
            answer.style.maxHeight = null;
            this.setState({answer:'closed'})
        }
    }

render() {
    return(
    <div className="FAQ__segment__questions__question">
        <div className="FAQ__segment__questions__question__inner">
            <div className="FAQ__segment__questions__question__title" onClick={this.handleClick}>
                <h6 className="FAQ__segment__questions__question__title__text">{this.props.question}</h6>
                <img className="FAQ__segment__questions__question__title__chevron FAQ__segment__questions__question__title__chevron--up" src={chevron} alt="Answer toggle"/>
            </div>
            <p className="FAQ__segment__questions__question__answer">{this.props.answer}</p>
        </div>
    </div>
    )
}


}

export default Question;