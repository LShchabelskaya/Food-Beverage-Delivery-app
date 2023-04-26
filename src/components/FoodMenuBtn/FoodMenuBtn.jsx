import * as React from 'react';
import './FoodMenuBtn.css';


function FoodMenuBtn({ text, onClick }) {
    return <button type='button' className='food-menu__button' onClick={onClick}>{text}</button>
};

export default FoodMenuBtn;