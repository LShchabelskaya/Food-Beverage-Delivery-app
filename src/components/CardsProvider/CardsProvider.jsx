import { createContext, useState } from "react";
import { cards } from "../../constants";

export const CardsContext = createContext();

function CardsProvider({ children }) {
    const [cardsList, setCardsList] = useState(cards);

    const addCard = (item) => {
        setCardsList(prevCardsList => [...prevCardsList, item]);
    };

    const deleteCard = () => {
        setCardsList(prevCardsList => prevCardsList.filter((_, idx) => idx !== 0));
    };

    return (
        <CardsContext.Provider value={{ cardsList, setCardsList, addCard, deleteCard }}>
            {children}
        </CardsContext.Provider>
    );
};

export default CardsProvider;