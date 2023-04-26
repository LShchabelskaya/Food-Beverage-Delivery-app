import * as React from 'react';
import { useState } from 'react';
import CardItemView from './CardItemView';

function CardItem({ card, title, price, text, src, alt, tags, deleteTag, id, makeActive, activeCard, onDragHandler, updateMainState }) {
    const [cardItem, setCardItem] = useState({
        inputValue: 1,
        errored: false
    });

    const cardInputHandler = (e) => {
        setCardItem({
            ...cardItem,
            inputValue: e.target.value
        });
    };

    const addToCart = () => {
        if (+cardItem.inputValue > 0 && Number.isInteger(+cardItem.inputValue)) {
            updateMainState(cardItem.inputValue);                               // <----- temporary solution until we use Context
        } else {
            setCardItem({
                ...cardItem,
                inputValue: 1
            });
        };
    };

    const onLoadHandler = () => {
        console.log('img was updated succesfully!');
    };

    const onErrorHandler = () => {
        if (!cardItem.errored) {
            setCardItem({
                ...cardItem,
                errored: true
            });
        };
    };

    return (
        <CardItemView
            card={card}
            title={title}
            price={price}
            text={text}
            src={src}
            alt={alt}
            tags={tags}
            deleteTag={deleteTag}
            id={id}
            cardInputValue={cardItem.inputValue}
            cardInputHandler={cardInputHandler}
            addToCart={addToCart}
            makeActive={makeActive}
            activeCard={activeCard}
            onDragHandler={onDragHandler}
            onLoadHandler={onLoadHandler}
            onErrorHandler={onErrorHandler}
            errored={cardItem.errored}
        />);
};

export default CardItem;