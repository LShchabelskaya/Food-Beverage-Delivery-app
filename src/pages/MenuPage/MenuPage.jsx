import { Component } from 'react';
import './MenuPage.css';
import CardList from '../../components/CardList/CardList';
import CommonBtn from '../../components/CommonBtn/CommonBtn';
import { cards } from '../../constants';


class MenuPage extends Component {
    render() {
        const { navigateToMain } = this.props;
        return (
            <div className='menu-page__wrapper'>
                <div className='food-menu__options'>
                    <button type='button' className='food-menu__button'>Sort by function</button>
                    <button type='button' className='food-menu__button'>Insertion sort</button>
                    <button type='button' className='food-menu__button'>Add</button>
                    <button type='button' className='food-menu__button'>Delete</button>
                </div>
                <CardList cards={cards} />
                <div className='food-menu__btn-wrapper'>
                    <CommonBtn text='Back to main page' navigateToMain={navigateToMain} />
                </div>
            </div>
        );
    };
};

export default MenuPage;