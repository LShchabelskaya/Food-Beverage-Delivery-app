import * as React from 'react';
import { useState, useContext } from 'react';
import CardItemView from './CardItemView';
import { CardsContext } from '../CardsProvider/CardsProvider';

function CardItem({ card, title, price, text, src, alt, tags, id, makeActive, activeCard, onDragHandler }) {

    const [inputValue, setInputValue] = useState(1);
    const [error, setError] = useState(false);

    const { increaseCartCounter, deleteTag } = useContext(CardsContext);

    const cardInputHandler = (e) => {
        setInputValue(e.target.value);
    };

    const addToCart = () => {
        if (+inputValue > 0 && Number.isInteger(+inputValue)) {
            increaseCartCounter(inputValue);
        } else {
            setInputValue(1);
        };
    };

    const onLoadHandler = () => {
        console.log('img was updated succesfully!');
    };

    const onErrorHandler = () => setError(true);

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
            inputValue={inputValue}
            cardInputHandler={cardInputHandler}
            addToCart={addToCart}
            makeActive={makeActive}
            activeCard={activeCard}
            onDragHandler={onDragHandler}
            onLoadHandler={onLoadHandler}
            onErrorHandler={onErrorHandler}
            error={error}
        />);
};

export default CardItem;