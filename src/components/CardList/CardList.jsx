import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import CardListView from './CardListView';
import { CardsContext } from '../../components/CardsProvider/CardsProvider';

function CardList() {
    const [cardsState, setCardsState] = useState({
        activeCard: '',
        draggedCard: {}
    });

    const { cardsList, setCardsList } = useContext(CardsContext);

    useEffect(() => {
        document.addEventListener('keydown', hotKeyHandler);
    });

    const hotKeyHandler = (event) => {
        if (event.shiftKey && event.keyCode === 87) {
            if (!cardsState.activeCard) {
                makeActive(cardsList[0].id);
            } else {
                const activeCardElement = cardsList.find(item => item.id === cardsState.activeCard);
                const activeCardIdx = cardsList.indexOf(activeCardElement);
                const nextIndex = (activeCardIdx + 1) <= (cardsList.length - 1) ? (activeCardIdx + 1) : 0;
                makeActive(cardsList[nextIndex].id);
            };
        };
    };

    const makeActive = (id) => {
        setCardsState({
            ...cardsState,
            activeCard: cardsState.activeCard !== id ? id : ''
        });
    };

    const swapHelper = (arr, a, b) => {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    };

    const swapCards = (draggedId, droppedId) => {
        const draggedIndex = cardsList.findIndex((el) => el.id === draggedId);
        const droppedIndex = cardsList.findIndex((el) => el.id === droppedId);
        setCardsList(swapHelper(cardsList, draggedIndex, droppedIndex));
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
        swapCards(cardsState.draggedCard.id, closestCard.id);
        setCardsState({
            ...cardsState,
            draggedCard: {}
        });
    };

    return (
        <CardListView
            cards={cardsList}
            makeActive={makeActive}
            activeCard={cardsState.activeCard}
            onDragHandler={onDragHandler}
            onDragOverHandler={onDragOverHandler}
            onDropHandler={onDropHandler}
        />
    );
};

export default CardList;