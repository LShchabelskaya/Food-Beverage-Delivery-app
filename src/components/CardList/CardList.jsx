import * as React from 'react';
import { useState, useEffect, useContext, useCallback } from 'react';
import CardListView from './CardListView';
import { CardsContext } from '../../components/CardsProvider/CardsProvider';
import { swapHelper } from '../../helpers';

function CardList() {

    const [activeCard, setActiveCard] = useState('');
    const [draggedCard, setDraggedCard] = useState({});

    const { cardsList, setCardsList } = useContext(CardsContext);

    const makeActive = useCallback((id) => {
        setActiveCard(activeCard !== id ? id : '');
    }, [activeCard]);

    const hotKeyHandler = useCallback((event) => {
        if (event.shiftKey && event.keyCode === 87) {
            if (!activeCard) {
                makeActive(cardsList[0].id);
            } else {
                const activeCardElement = cardsList.find(item => item.id === activeCard);
                const activeCardIdx = cardsList.indexOf(activeCardElement);
                const nextIndex = (activeCardIdx + 1) <= (cardsList.length - 1) ? (activeCardIdx + 1) : 0;
                makeActive(cardsList[nextIndex].id);
            };
        };
    }, [activeCard, cardsList, makeActive]);

    useEffect(() => {
        document.addEventListener('keydown', hotKeyHandler);
    }, [hotKeyHandler]);

    const swapCards = (draggedId, droppedId) => {
        const draggedIndex = cardsList.findIndex((el) => el.id === draggedId);
        const droppedIndex = cardsList.findIndex((el) => el.id === droppedId);
        setCardsList(swapHelper(cardsList, draggedIndex, droppedIndex));
    };

    const onDragHandler = (event, card) => {
        event.preventDefault();
        setDraggedCard(card);
    };

    const onDragOverHandler = (event) => {
        event.preventDefault();
    };

    const onDropHandler = (event) => {
        const target = event.target;
        const closestCard = target.closest('.food-menu__card');
        swapCards(draggedCard.id, closestCard.id);
        setDraggedCard({});
    };

    return (
        <CardListView
            cards={cardsList}
            makeActive={makeActive}
            activeCard={activeCard}
            onDragHandler={onDragHandler}
            onDragOverHandler={onDragOverHandler}
            onDropHandler={onDropHandler}
        />
    );
};

export default CardList;