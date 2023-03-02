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
        this.setState(() => ({
            cardInputValue: e.target.value,
        }));
    };

    addToCart = () => {
        const { cardInputValue } = this.state;                            // <----- doesn't work on the MenuPage
        const { updateAppState } = this.props;
        if (+cardInputValue > 0 && Number.isInteger(+cardInputValue)) {
            updateAppState(cardInputValue);                               // <----- temporary solution until we use Context
        } else {
            this.setState(() => ({
                cardInputValue: 1,
            }));
        };
    };

    render() {
        const { title, price, text, src, alt, tags, deleteTag, id } = this.props;
        const tagsList = Object.keys(tags);
        const { cardInputValue } = this.state;
        return (
            <div className='food-menu__card'>
                <img className='fm__picture' src={src} alt={alt} />
                <div>
                    <div className='fm__card__header'>
                        <h3 className='fm__header__title'>{title}</h3>
                        <div className='fm__header__price'>$ {price} USD</div>
                    </div>
                    <p className='fm__card__text'>{text}</p>
                    <div>
                        {tagsList.map((item) => {
                            return (
                                <span key={item} className='tag'>
                                    {item + tags[item]}
                                    <i onClick={() => deleteTag(id, item)}>x</i>
                                </span>
                            )
                        })}
                    </div>
                    <div className='fm__card__order'>
                        <input
                            type='number'
                            className='fm__order__counter'
                            name='input'
                            value={cardInputValue}
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