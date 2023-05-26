import * as React from 'react';
import './MenuPageView.css';
import CardList from '../../components/CardList/CardList';
import CommonBtn from '../../components/CommonBtn/CommonBtn';
import FoodMenuBtn from '../../components/FoodMenuBtn/FoodMenuBtn';

function MenuPageView({ navigateToMain, sortByFun, sortByInsert, addCard, deleteCard }) {
    return (
        <div className='menu-page__wrapper'>
            <div className='food-menu__options'>
                <FoodMenuBtn text={'menuPage.buttons.first'} onClick={sortByFun} />
                <FoodMenuBtn text={'menuPage.buttons.second'} onClick={sortByInsert} />
                <FoodMenuBtn text={'menuPage.buttons.third'} onClick={addCard} />
                <FoodMenuBtn text={'menuPage.buttons.fourth'} onClick={deleteCard} />
            </div>
            <CardList />
            <div className='food-menu__btn-wrapper'>
                <CommonBtn text='menuPage.navButton' onClick={navigateToMain} />
            </div>
        </div>
    );
};

export default MenuPageView;