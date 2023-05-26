import * as React from 'react';
import './CardItemView.css';
import test_photo from '../../img/food-menu_cards/test_photo.png';
import { useTranslation } from 'react-i18next';


function CardItemView({ card, title, price, text, src, alt, tags, deleteTag, id,
    inputValue, cardInputHandler, addToCart, makeActive,
    activeCard, onDragHandler, onLoadHandler, error, onErrorHandler }) {
    const tagsList = Object.keys(tags);
    const { t } = useTranslation();
    return (
        <div
            className={activeCard === id ? 'food-menu__card fm__card__active' : 'food-menu__card'}
            id={id}
            onClick={() => makeActive(id)}
            draggable
            onDrag={(event) => onDragHandler(event, card)}
        >
            <img
                className='fm__picture'
                src={error ? test_photo : src}
                alt={alt}
                onLoad={onLoadHandler}
                onError={onErrorHandler}
            />
            <div>
                <div className='fm__card__header'>
                    <h3 className='fm__header__title'>{t(title)}</h3>
                    <div className='fm__header__price'>$ {price} USD</div>
                </div>
                <p className='fm__card__text'>{t(text)}</p>
                <div>
                    {tagsList.map((item) => (
                        <span key={item} className='tag'>
                            {item + tags[item]}
                            <i onClick={() => deleteTag(id, item)}>x</i>
                        </span>
                    ))}
                </div>
                <div className='fm__card__order'>
                    <input
                        type='number'
                        className='fm__order__counter'
                        name='input'
                        value={inputValue}
                        onChange={cardInputHandler}
                    />
                    <button className='fm__order__button' type='button' onClick={addToCart}>{t('cards.addButton')}</button>
                </div>
            </div>
        </div>
    );
};

export default CardItemView;