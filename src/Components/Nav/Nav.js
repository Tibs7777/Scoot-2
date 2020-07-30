import React from 'react';
import './Nav.scss';
import hamburger from './hamburger.svg';
import logo from './logo.svg';
import Button from '../Button/Button'



class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          nav: 'closed'
        }
        this.handleClick = this.handleClick.bind(this)
        this.test = this.test.bind(this)
      }



    handleClick() {
        if(this.state.nav === 'closed') {
            document.querySelector('.header__nav__bar__list').classList = "header__nav__bar__list header__nav__bar__list--open";
            document.querySelector('.header__nav__burger').classList = "header__nav__burger header__nav__burger--open"
            document.querySelector('.header__banner').classList = "header__banner header__banner--open"
            document.body.classList.add('nav-open')
            this.setState({nav: 'open'})
            window.scrollTo(0, 0);
            console.log('opening')
        } else {
            document.querySelector('.header__nav__bar__list').classList = "header__nav__bar__list header__nav__bar__list--closed";
            document.querySelector('.header__nav__burger').classList = "header__nav__burger";
            document.querySelector('.header__banner').classList = "header__banner"
            document.body.classList.remove('nav-open')
            this.setState({nav: 'closed'})
            console.log('closing')
        }
    }

    test(event) {
        let navList = document.querySelector('.header__nav__bar__list');
        let left = window.getComputedStyle(navList).left
        if (event.propertyName === 'left' && navList.classList.contains('header__nav__bar__list--open') && left !== '0px') {
            document.querySelector('.header__nav__bar__list').classList = "header__nav__bar__list header__nav__bar__list--closed";
            document.querySelector('.header__nav__burger').classList = "header__nav__burger";
            document.querySelector('.header__banner').classList = "header__banner"
            document.body.classList.remove('nav-open')
            this.setState({nav: 'closed'})
        }
    }


    render() {

        return(
        <div className="header__nav">
            <img className="header__nav__burger" onClick={this.handleClick} src={hamburger} alt="Menu toggle"/>
            <div className="header__nav__bar">
                <a href="/"><img className="header__nav__bar__logo" src={logo} alt="Scoot logo"/></a>
                <ul className="header__nav__bar__list header__nav__bar__list--closed" onTransitionEnd={this.test}> 
                    <li className="header__nav__bar__list__item"><a href="/about">About</a></li>
                    <li className="header__nav__bar__list__item"><a href="/locations">Location</a></li>
                    <li className="header__nav__bar__list__item"><a href="/Careers">Careers</a></li>
                    <Button nav={true} text={'Get Scootin'} href={'#DownloadBanner'}/>
                </ul>
            </div>
        </div>
        )
    }
}

export default Nav