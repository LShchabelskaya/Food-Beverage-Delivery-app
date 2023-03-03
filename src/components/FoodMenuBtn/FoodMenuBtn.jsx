import { Component } from 'react';
import './FoodMenuBtn.css';

class FoodMenuBtn extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button type='button' className='food-menu__button' onClick={onClick}>{text}</button>
        );
    };
};

export default FoodMenuBtn;