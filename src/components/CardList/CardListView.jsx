import * as React from 'react';
import './CardListView.css';
import CardItem from '../CardItem/CardItem';

function CardListView({ cards, updateMainState, deleteTag, makeActive, activeCard, onDragHandler, onDragOverHandler, onDropHandler }) {
    return (
        <div
            className='food-menu__list'
            onDrop={(event) => onDropHandler(event)}
            onDragOver={(event) => onDragOverHandler(event)}
        >
            {cards.map((card) => (
                <CardItem
                    card={card}
                    key={card.id}
                    title={card.title}
                    price={card.price}
                    text={card.text}
                    src={card.src}
                    alt={card.alt}
                    tags={card.tags}
                    id={card.id}
                    deleteTag={deleteTag}
                    updateMainState={updateMainState}
                    makeActive={makeActive}
                    activeCard={activeCard}
                    onDragHandler={onDragHandler}
                />
            ))}
        </div>
    );
};

export default CardListView;