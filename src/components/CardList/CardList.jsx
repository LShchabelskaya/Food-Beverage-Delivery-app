import * as React from 'react';
import { useState, useEffect } from 'react';
import CardListView from './CardListView';

function CardList({ cards, updateMenuPageState, deleteTag, updateMainState }) {
    const [cardsState, setCardsState] = useState({
        activeCard: '',
        draggedCard: {}
    });

    useEffect(() => {
        document.addEventListener('keydown', hotKeyHandler);
    });

    const hotKeyHandler = (event) => {
        if (event.shiftKey && event.keyCode === 87) {
            if (!cardsState.activeCard) {
                makeActive(cards[0].id);
            } else {
                const activeCardElement = cards.find(item => item.id === cardsState.activeCard);
                const activeCardIdx = cards.indexOf(activeCardElement);
                const nextIndex = (activeCardIdx + 1) <= (cards.length - 1) ? (activeCardIdx + 1) : 0;
                makeActive(cards[nextIndex].id);
            };
        };
    };

    const makeActive = (id) => {
        setCardsState({
            ...cardsState,
            activeCard: cardsState.activeCard !== id ? id : ''
        });
    };

    const onDragHandler = (event, card) => {
        event.preventDefault();
        setCardsState({
            ...cardsState,
            draggedCard: card
        });
    };

    const onDragOverHandler = (event) => {
        event.preventDefault();
    };

    const onDropHandler = (event) => {
        const target = event.target;
        const closestCard = target.closest('.food-menu__card');
        updateMenuPageState(cardsState.draggedCard.id, closestCard.id);
    };

    return (
        <CardListView
            cards={cards}
            deleteTag={deleteTag}
            updateMainState={updateMainState}
            makeActive={makeActive}
            activeCard={cardsState.activeCard}
            onDragHandler={onDragHandler}
            onDragOverHandler={onDragOverHandler}
            onDropHandler={onDropHandler}
        />
    );
};

export default CardList;