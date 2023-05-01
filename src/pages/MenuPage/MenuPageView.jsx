import * as React from 'react';
import './MenuPageView.css';
import CardList from '../../components/CardList/CardList';
import CommonBtn from '../../components/CommonBtn/CommonBtn';
import FoodMenuBtn from '../../components/FoodMenuBtn/FoodMenuBtn';

function MenuPageView({ navigateToMain, sortByFun, sortByInsert, addCard, deleteCard }) {
    return (
        <div className='menu-page__wrapper'>
            <div className='food-menu__options'>
                <FoodMenuBtn text={'Sort by function'} onClick={sortByFun} />
                <FoodMenuBtn text={'Insertion sort'} onClick={sortByInsert} />
                <FoodMenuBtn text={'Add'} onClick={addCard} />
                <FoodMenuBtn text={'Delete'} onClick={deleteCard} />
            </div>
            <CardList />
            <div className='food-menu__btn-wrapper'>
                <CommonBtn text='Back to main page' onClick={navigateToMain} />
            </div>
        </div>
    );
};

export default MenuPageView;