import * as React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cards } from '../../constants';
import { v4 as uuidv4 } from 'uuid';
import test_photo from '../../img/food-menu_cards/test_photo.png';
import MenuPageView from './MenuPageView';

function MenuPage() {
    const [cardsList, setCardsList] = useState(cards);
    const navigate = useNavigate();
    const context = useContext();
    console.log(context);

    const navigateToMain = () => {
        navigate('/');
    };

    const swapHelper = (arr, a, b) => {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    };

    const updateMenuPageState = (draggedId, droppedId) => {    /// ???? what for?
        const draggedIndex = cardsList.findIndex((el) => el.id === draggedId);
        const droppedIndex = cardsList.findIndex((el) => el.id === droppedId);
        setCardsList(swapHelper(cardsList, draggedIndex, droppedIndex));  ///mutate???
    };

    const addCard = () => {
        const newCard = {
            id: uuidv4(),
            title: 'Burger Test',
            price: '8.50',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
        const newCardsList = [...cardsList].sort((card, card2) => {  ///???copy of state
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

    const deleteTag = (id, tag) => {
        const updatedCard = cardsList.find(item => item.id === id);
        delete updatedCard.tags[tag]; 
        setCardsList([...cardsList]); //what for?                                 // <----- doesn't work on the MainPage
    };

    return (
        <MenuPageView
            navigateToMain={navigateToMain}
            cardsList={cardsList}
            sortByFun={sortByFun}
            sortByInsert={sortByInsert}
            addCard={addCard}
            deleteCard={deleteCard}
            deleteTag={deleteTag}
            updateMenuPageState={updateMenuPageState}
        />
    );
};

// class MenuPage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             cardsList: [...cards],
//         };
//     };

//     swapHelper = (arr, a, b) => {
//         const temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//         return arr;
//     };

//     updateMenuPageState = (draggedId, droppedId) => {
//         const { cardsList } = this.state;
//         const draggedIndex = cardsList.findIndex((el) => el.id === draggedId);
//         const droppedIndex = cardsList.findIndex((el) => el.id === droppedId);
//         this.setState(() => ({
//             cardsList: this.swapHelper([...cardsList], draggedIndex, droppedIndex)
//         }));
//     };

//     addCard = () => {
//         const newCard = {
//             id: uuidv4(),
//             title: 'Burger Test',
//             price: '8.50',
//             text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//             src: test_photo,
//             alt: 'Burger Test',
//             tags: {
//                 taste: 0,
//                 shape: 0,
//                 size: 0
//             }
//         };
//         this.setState(({ cardsList }) => ({
//             cardsList: [newCard, ...cardsList]
//         }));
//     };

//     deleteCard = () => {
//         this.setState(({ cardsList }) => ({
//             cardsList: cardsList.filter((_, idx) => idx !== 0)
//         }));
//     };

//     sortByFun = () => {
//         const { cardsList } = this.state;
//         const newCardsList = [...cardsList].sort((card, card2) => {
//             return +card.price - +card2.price;
//         });
//         this.setState(() => ({
//             cardsList: newCardsList
//         }));
//     };

//     insertFun = (arr) => {
//         const arrToSort = [...arr];
//         for (let i = 1; i < arrToSort.length; i++) {
//             const current = +arrToSort[i].price;
//             let j = i;
//             while (j > 0 && (parseFloat(arrToSort[j - 1].price)) > current) {
//                 arrToSort[j].price = arrToSort[j - 1].price;
//                 j--;
//             };
//             arrToSort[j].price = `${current}`;
//         };
//         return arrToSort;
//     };

//     sortByInsert = () => {
//         const { cardsList } = this.state;
//         const newCardsList = this.insertFun(cardsList);
//         this.setState(() => ({
//             cardsList: newCardsList
//         }));
//     };

//     deleteTag = (id, tag) => {
//         const { cardsList } = this.state;
//         const updatedCard = cardsList.find(item => item.id === id);
//         delete updatedCard.tags[tag];                                   // <----- doesn't work on the MainPage
//         this.setState(() => ({
//             cardsList: [...cardsList]
//         }));
//     };

//     render() {
//         const { navigateToMain } = this.props;
//         const { cardsList } = this.state;
//         return (
//             <MenuPageView
//                 navigateToMain={navigateToMain}
//                 cardsList={cardsList}
//                 sortByFun={this.sortByFun}
//                 sortByInsert={this.sortByInsert}
//                 addCard={this.addCard}
//                 deleteCard={this.deleteCard}
//                 deleteTag={this.deleteTag}
//                 updateMenuPageState={this.updateMenuPageState}
//             />
//         );
//     };
// };

export default MenuPage;