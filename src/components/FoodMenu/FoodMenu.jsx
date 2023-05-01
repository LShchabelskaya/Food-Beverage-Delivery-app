import * as React from 'react';
import './FoodMenu.css';
import CommonBtn from '../CommonBtn/CommonBtn';
import CardList from '../CardList/CardList';
import FoodMenuBtn from '../FoodMenuBtn/FoodMenuBtn';
import { Link } from 'react-scroll';
import { SCROLL_DURATION, SCROLL_OFFSET } from '../../constants';

function FoodMenu({ navigateToMenu }) {
    return (
        <section className='food-menu'>
            <div className='food-menu__container'>
                <h2 className='food-menu__title title'>Browse our menu</h2>
                <p className='food-menu__text'>
                    Use our menu to place an order online, or&nbsp;
                    <Link
                        to={'call'}
                        smooth={true}
                        offset={SCROLL_OFFSET}
                        duration={SCROLL_DURATION}
                        className='navlink'
                    >phone</Link>
                    &nbsp;our store to place a pickup order. Fast and fresh food.
                </p>
                <div className='food-menu__options'>
                    <FoodMenuBtn text={'Burgers'} />
                    <FoodMenuBtn text={'Sides'} />
                    <FoodMenuBtn text={'Drinks'} />
                </div>
                <CardList />
                <div className='food-menu__btn-wrapper'>
                    <CommonBtn text='See Full Menu' onClick={navigateToMenu} />
                </div>
            </div>
        </section>
    );
};

export default FoodMenu;