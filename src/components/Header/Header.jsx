import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import HeaderView from './HeaderView';
import { MOBILE_WIDTH } from '../../constants';
import { CardsContext } from '../../components/CardsProvider/CardsProvider';

function Header({ isStickyHeader }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { cartCounter } = useContext(CardsContext);

    const menuIconClickHandler = () => {
        setMenuOpen(!isMenuOpen);
    };

    const linkClickHandler = () => {
        if (window.innerWidth < MOBILE_WIDTH) {
            setMenuOpen(false);
        };
    };

    useEffect(() => {
        isMenuOpen ? document.body.classList.add('_lock') : document.body.classList.remove('_lock');
    }, [isMenuOpen]);

    return (
        <HeaderView
            isMenuOpen={isMenuOpen}
            cartCounter={cartCounter}
            menuIconClickHandler={menuIconClickHandler}
            isStickyHeader={isStickyHeader}
            linkClickHandler={linkClickHandler}
        />
    );
};

export default Header;