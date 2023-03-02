import { Component } from 'react';
import './Header.css';
import logo from '../../img/Logo.svg';
import basket from '../../img/Basket.svg';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // cartCounter: 0,      // <--- temporary was moved to App until we use Context
            isMenuIconActive: false,
            isMenuBodyActive: false,
        };
    };

    menuIconClickHandler = () => {
        if (!this.state.isMenuIconActive && !this.state.isMenuBodyActive) {
            this.setState(() => ({
                isMenuIconActive: true,
                isMenuBodyActive: true
            }));
            document.body.classList.add('_lock');
        } else {
            this.setState(() => ({
                isMenuIconActive: false,
                isMenuBodyActive: false
            }));
            document.body.classList.remove('_lock');
        };
    };

    render() {
        const { isMenuIconActive, isMenuBodyActive } = this.state;
        const { cartCounterValue } = this.props;

        return (
            <header className='header'>
                <div className='header__container'>
                    <button type='button' className='header__logo navlink'><img data-goto='.main' src={logo} alt='Logo' /></button>
                    <div className='header__content'>
                        <div className={isMenuIconActive ? 'menu__icon _active' : 'menu__icon'} onClick={this.menuIconClickHandler}>
                            <span></span>
                        </div>
                        <nav className={isMenuBodyActive ? 'menu__body _active' : 'menu__body'}>
                            <ul className='menu__list'>
                                <li><button type='button' data-goto='.main' className='menu__link navlink'>Home</button></li>
                                <li><button type='button' data-goto='.order-now' className='menu__link navlink'>Order</button></li>
                                <li><button type='button' data-goto='.about' className='menu__link navlink'>Company</button></li>
                                <li><button type='button' data-goto='.faq' className='menu__link navlink'>FAQ</button></li>
                                <li><button type='button' data-goto='.call' className='menu__link navlink'>Contact</button></li>
                            </ul>
                        </nav>
                        <button type='button' className='menu__basket'>
                            <img className='menu__basket__cart' src={basket} alt='Basket' />
                            <div className='menu__basket__counter'>
                                <p>{cartCounterValue}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        );
    };
};

export default Header;