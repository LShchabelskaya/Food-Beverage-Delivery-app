import { Component } from 'react';
import './FoodMenu.css';
import CommonBtn from '../CommonBtn/CommonBtn';
import CardList from '../CardList/CardList';
import { cards } from '../../constants';

class FoodMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { cards };
    };

    render() {
        const { updateAppState } = this.props;
        return (
            <section className='food-menu'>
                <div className='food-menu__container'>
                    <h2 className='food-menu__title title'>Browse our menu</h2>
                    <p className='food-menu__text'>Use our menu to place an order online, or <button type='button' data-goto='.call'
                        className='navlink'>phone</button> our store to place a
                        pickup order. Fast and fresh food.</p>
                    <div className='food-menu__options'>
                        <button type='button' className='food-menu__button'>Burgers</button>
                        <button type='button' className='food-menu__button'>Sides</button>
                        <button type='button' className='food-menu__button'>Drinks</button>
                    </div>
                    <CardList cards={cards} updateAppState={updateAppState} />
                    <div className='food-menu__btn-wrapper'>
                        <CommonBtn text='See Full Menu' />
                    </div>
                </div>
            </section>
        );
    };
};

export default FoodMenu;