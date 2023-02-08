import { Component } from 'react';
import './Header.css';
import logo from '../../img/Logo.svg';
import basket from '../../img/Basket.svg';


class Header extends Component {
    constructor() {
        super();

        this.state = {
            cartCounter: 0,
            isMenuIconActive: false,
            isMenuBodyActive: false,
        };

        this.menuIconClickHandler = this.menuIconClickHandler.bind(this);
    };

    componentDidUpdate() {
        document.body.classList.toggle('_lock');
    };

    menuIconClickHandler() {
        if(!this.state.isMenuIconActive && !this.state.isMenuBodyActive) {
            this.setState({
                isMenuIconActive: true,
                isMenuBodyActive: true
            });
        } else {
            this.setState({
                isMenuIconActive: false,
                isMenuBodyActive: false
            });
        };
    };

    render() {
        return (
            <header className='header'>
                <div className='header__container'>
                    <a href='#' className='header__logo'><img data-goto='.main' className='navlink' src={logo}
                        alt='Logo' /></a>
                    <div className='header__content'>
                        <div className={ this.state.isMenuIconActive ? 'menu__icon _active' : 'menu__icon' } onClick={ this.menuIconClickHandler }>
                            <span></span>
                        </div>
                        <nav className={ this.state.isMenuBodyActive ? 'menu__body _active' : 'menu__body' }>
                            <ul className='menu__list'>
                                <li><a data-goto='.main' href='#' className='menu__link navlink'>Home</a></li>
                                <li><a data-goto='.order-now' href='#' className='menu__link navlink'>Order</a></li>
                                <li><a data-goto='.about' href='#' className='menu__link navlink'>Company</a></li>
                                <li><a data-goto='.faq' href='#' className='menu__link navlink'>FAQ</a></li>
                                <li><a data-goto='.call' href='#' className='menu__link navlink'>Contact</a></li>
                            </ul>
                        </nav>
                        <a href='#' className='menu__basket'>
                            <img className='menu__basket__cart' src={basket} alt='Basket' />
                            <div className='menu__basket__counter'>
                                <p>{this.state.cartCounter}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        );
    };
};

export default Header;