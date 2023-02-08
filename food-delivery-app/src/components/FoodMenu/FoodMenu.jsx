import { Component } from 'react';
import './FoodMenu.css';
import CommonBtn from '../CommonBtn/CommonBtn';
import CardList from '../CardList/CardList';
import { cards } from '../../constants';

class FoodMenu extends Component {
    constructor() {
        super();
        this.state = { cards };
    };

    render() {
        return (
            <section className='food-menu'>
                <div className='food-menu__container'>
                    <h2 className='food-menu__title title'>Browse our menu</h2>
                    <p className='food-menu__text'>Use our menu to place an order online, or <a data-goto='.call' href='#'
                        className='navlink'>phone</a> our store to place a
                        pickup order. Fast and fresh food.</p>
                    <div className='food-menu__options'>
                        <a href='#' className='food-menu__button'>Burgers</a>
                        <a href='#' className='food-menu__button'>Sides</a>
                        <a href='#' className='food-menu__button'>Drinks</a>
                    </div>
                    <CardList cards={this.state.cards} />
                    <div className='food-menu__btn-wrapper'>
                        <CommonBtn text='See Full Menu' />
                    </div>
                </div>
            </section>
        );
    };
};

export default FoodMenu;