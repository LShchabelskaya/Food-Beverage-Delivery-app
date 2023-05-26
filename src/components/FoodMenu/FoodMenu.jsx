import * as React from 'react';
import './FoodMenu.css';
import CommonBtn from '../CommonBtn/CommonBtn';
import CardList from '../CardList/CardList';
import FoodMenuBtn from '../FoodMenuBtn/FoodMenuBtn';
import { Link } from 'react-scroll';
import { SCROLL_DURATION, SCROLL_OFFSET } from '../../constants';
import { useTranslation } from 'react-i18next';

function FoodMenu({ navigateToMenu }) {
    const { t } = useTranslation();
    return (
        <section className='food-menu'>
            <div className='food-menu__container'>
                <h2 className='food-menu__title title'>{t('foodMenu.title')}</h2>
                <p className='food-menu__text'>
                {t('foodMenu.text.first')}&nbsp;
                    <Link
                        to={'call'}
                        smooth={true}
                        offset={SCROLL_OFFSET}
                        duration={SCROLL_DURATION}
                        className='navlink'
                    >{t('foodMenu.text.link')}</Link>
                    &nbsp;{t('foodMenu.text.second')}
                </p>
                <div className='food-menu__options'>
                    <FoodMenuBtn text={'foodMenu.buttons.first'} />
                    <FoodMenuBtn text={'foodMenu.buttons.second'} />
                    <FoodMenuBtn text={'foodMenu.buttons.third'} />
                </div>
                <CardList />
                <div className='food-menu__btn-wrapper'>
                    <CommonBtn text='foodMenu.button' onClick={navigateToMenu} />
                </div>
            </div>
        </section>
    );
};

export default FoodMenu;