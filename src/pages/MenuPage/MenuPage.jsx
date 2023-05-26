import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import test_photo from '../../img/food-menu_cards/test_photo.png';
import MenuPageView from './MenuPageView';
import { CardsContext } from '../../components/CardsProvider/CardsProvider';

function MenuPage() {
    const navigate = useNavigate();
    const { cardsList, setCardsList } = useContext(CardsContext);

    const navigateToMain = () => {
        navigate('/');
    };

    const addCard = () => {
        const newCard = {
            id: uuidv4(),
            title: 'menuPage.testCard.title',
            price: '8.50',
            text: 'menuPage.testCard.text',
            src: test_photo,
            alt: 'Burger Test',
            tags: {
                taste: 0,
                shape: 0,
                size: 0
            }
        };
        setCardsList([newCard, ...cardsList]);
    };

    const deleteCard = () => {
        setCardsList(cardsList.filter((_, idx) => idx !== 0));
    };

    const sortByFun = () => {
        const newCardsList = [...cardsList].sort((card, card2) => {
            return +card.price - +card2.price;
        });
        setCardsList(newCardsList);
    };

    const insertFun = (arr) => {
        const arrToSort = [...arr];
        for (let i = 1; i < arrToSort.length; i++) {
            const current = +arrToSort[i].price;
            let j = i;
            while (j > 0 && (parseFloat(arrToSort[j - 1].price)) > current) {
                arrToSort[j].price = arrToSort[j - 1].price;
                j--;
            };
            arrToSort[j].price = `${current}`;
        };
        return arrToSort;
    };

    const sortByInsert = () => {
        const newCardsList = insertFun(cardsList);
        setCardsList(newCardsList);
    };

    return (
        <MenuPageView
            navigateToMain={navigateToMain}
            sortByFun={sortByFun}
            sortByInsert={sortByInsert}
            addCard={addCard}
            deleteCard={deleteCard}
        />
    );
};

export default MenuPage;