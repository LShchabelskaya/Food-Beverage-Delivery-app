import { Component } from 'react';
import './CardItem.css';


class CardItem extends Component {
    constructor() {
        super();

        this.state = {
            cardInputValue: 1,
        };

        this.cardInputHandler = this.cardInputHandler.bind(this);
        this.addToCart = this.addToCart.bind(this);
    };


    cardInputHandler(e) {
        this.setState({
            cardInputValue: e.target.value,
        });
    };

    addToCart() {
        if (+this.state.cardInputValue > 0 && Number.isInteger(+this.state.cardInputValue)) {
            console.log('item has been added to cart!'); // <----- temporary solution //
        } else {
            this.setState({
                cardInputValue: 1,
            });
        };
    };

    render() {
        return (
            <div className='food-menu__card'>
                <img src={this.props.src} alt={this.props.alt} />
                <div>
                    <div className='fm__card__header'>
                        <h3 className='fm__header__title'>{this.props.title}</h3>
                        <div className='fm__header__price'>{this.props.price}</div>
                    </div>
                    <p className='fm__card__text'>{this.props.text}</p>
                    <div className='fm__card__order'>
                        <input
                            type='number'
                            className='fm__order__counter'
                            name='input'
                            value={this.state.cardInputValue}
                            onChange={this.cardInputHandler}
                        />
                        <button className='fm__order__button' type='button' onClick={this.addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default CardItem;