import { createContext, useState } from 'react';
import { cards } from '../../constants';

export const CardsContext = createContext();

function CardsProvider({ children }) {
    const [cardsList, setCardsList] = useState(cards);
    const [cartCounter, setCartCounter] = useState(0);

    const increaseCartCounter = (value) => { 
        setCartCounter((prevCartCounter) => prevCartCounter + +value);

    };

    const deleteTag = (id, tag) => {
        const updatedCard = cardsList.find(item => item.id === id);
        delete updatedCard.tags[tag];
        const updatedCardIdx = cardsList.findIndex(item => item.id === updatedCard.id);
        const filteredCards = cardsList.filter(item => item.id !== updatedCard.id);
        filteredCards.splice(updatedCardIdx, 0, updatedCard);
        setCardsList(filteredCards);
    };

    return (
        <CardsContext.Provider value={{ cardsList, setCardsList, cartCounter, increaseCartCounter, deleteTag }}>
            {children}
        </CardsContext.Provider>
    );
};

export default CardsProvider;