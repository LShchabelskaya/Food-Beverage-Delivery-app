import { Component } from 'react';
import './HeaderView.css';
import logo from '../../img/Logo.svg';
import basket from '../../img/Basket.svg';
import HeaderLink from '../HeaderLink/HeaderLink';


class HeaderView extends Component {
    render() {
        const { isMenuOpen, cartCounterValue, menuIconClickHandler, isStickyHeader } = this.props;
        return (
            <header className={isStickyHeader ? 'header sticky' : 'header'}>
                <div className='header__container'>
                    <button type='button' className='header__logo navlink'><img data-goto='.main' src={logo} alt='Logo' /></button>
                    <div className='header__content'>
                        <div className={isMenuOpen ? 'menu__icon _active' : 'menu__icon'} onClick={menuIconClickHandler}>
                            <span></span>
                        </div>
                        <nav className={isMenuOpen ? 'menu__body _active' : 'menu__body'}>
                            <ul className='menu__list'>
                                <HeaderLink goto={'.main'} text={'Home'} />
                                <HeaderLink goto={'.order-now'} text={'Order'} />
                                <HeaderLink goto={'.about'} text={'Company'} />
                                <HeaderLink goto={'.faq'} text={'FAQ'} />
                                <HeaderLink goto={'.call'} text={'Contact'} />
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

export default HeaderView;