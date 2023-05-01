import * as React from 'react';
import './HeaderView.css';
import { Link } from 'react-scroll';
import logo from '../../img/Logo.svg';
import basket from '../../img/Basket.svg';
import { navlinks, SCROLL_DURATION, SCROLL_OFFSET } from '../../constants';


function HeaderView({ isMenuOpen, cartCounter, menuIconClickHandler, isStickyHeader, linkClickHandler }) {
    return (
        <header className={isStickyHeader ? 'header sticky' : 'header'}>
            <div className='header__container'>
                <Link
                    to={'main'}
                    smooth={true}
                    offset={SCROLL_OFFSET}
                    duration={SCROLL_DURATION}
                    className='header__logo navlink'
                >
                    <img src={logo} alt='Logo' />
                </Link>
                <div className='header__content'>
                    <div className={isMenuOpen ? 'menu__icon _active' : 'menu__icon'} onClick={menuIconClickHandler}>
                        <span></span>
                    </div>
                    <nav className={isMenuOpen ? 'menu__body _active' : 'menu__body'}>
                        <ul className='menu__list'>
                            {navlinks.map(navlink => (<Link
                                key={navlink.name}
                                to={navlink.to}
                                smooth={true}
                                offset={SCROLL_OFFSET}
                                duration={SCROLL_DURATION}
                                onClick={linkClickHandler}
                                className='menu__link navlink'
                            >{navlink.name}</Link>)
                            )}
                        </ul>
                    </nav>
                    <button type='button' className='menu__basket'>
                        <img className='menu__basket__cart' src={basket} alt='Basket' />
                        <div className='menu__basket__counter'>
                            <p>{cartCounter}</p>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderView;