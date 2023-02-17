import { Component } from 'react';
import './CardItem.css';


class CardItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardInputValue: 1,
        };
    };


    cardInputHandler = (e) => {
        this.setState({
            cardInputValue: e.target.value,
        });
    };

    addToCart = () => {
        const { cardInputValue } = this.state;
        const { updateAppState } = this.props;
        if (+cardInputValue > 0 && Number.isInteger(+cardInputValue)) {
            updateAppState(cardInputValue);                               // <----- temporary solution until we use Context
        } else {
            this.setState({
                cardInputValue: 1,
            });
        };
    };

    render() {
        const { title, price, text, src, alt } = this.props;
        const { cardInputValue } = this.state;
        return (
            <div className='food-menu__card'>
                <img src={ src } alt={ alt } />
                <div>
                    <div className='fm__card__header'>
                        <h3 className='fm__header__title'>{ title }</h3>
                        <div className='fm__header__price'>{ price }</div>
                    </div>
                    <p className='fm__card__text'>{ text }</p>
                    <div className='fm__card__order'>
                        <input
                            type='number'
                            className='fm__order__counter'
                            name='input'
                            value={ cardInputValue }
                            onChange={ this.cardInputHandler }
                        />
                        <button className='fm__order__button' type='button' onClick={ this.addToCart }>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default CardItem;