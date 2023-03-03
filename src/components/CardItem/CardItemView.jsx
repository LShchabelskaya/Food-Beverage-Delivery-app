import { Component } from 'react';
import './CardItemView.css';

class CardItemView extends Component {
    render() {
        const { title, price, text, src, alt, tags, deleteTag, id, cardInputValue, cardInputHandler, addToCart } = this.props;
        const tagsList = Object.keys(tags);
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
                            onChange={cardInputHandler}
                        />
                        <button className='fm__order__button' type='button' onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default CardItemView;