import { Component } from 'react';
import './MenuPage.css';
import CardList from '../../components/CardList/CardList';
import CommonBtn from '../../components/CommonBtn/CommonBtn';
import { cards } from '../../constants';
import { v4 as uuidv4 } from 'uuid';
import test_photo from '../../img/food-menu_cards/test_photo.png';

class MenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsList: [...cards],
        };
    };

    addCard = () => {
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
        const { cardsList } = this.state;
        this.setState({ cardsList: [newCard, ...cardsList] });
    };

    deleteCard = () => {
        const { cardsList } = this.state;
        const newCardsList = cardsList.filter((_, idx) => idx !== 0);
        this.setState({ cardsList: newCardsList });
    };

    sortByFun = () => {
        const { cardsList } = this.state;
        const newCardsList = [...cardsList].sort((card, card2) => {
            return +card.price - +card2.price;
        });
        this.setState({ cardsList: newCardsList });
    };

    // insertFun = (arr) => {
    //     for (let i = 1; i < arr.length; i++) {
    //         const current = +arr[i].price;
    //         let j = i;
    //         while (j > 0 && (+arr[j - 1].price) > current) {    // <----- in progress, needs some improvements ;)
    //             arr[j].price = arr[j - 1].price;
    //             j--;
    //         };
    //         arr[j].price = current;
    //     };
    //     return arr;
    // };

    sortByInsert = () => {
        // const { cardsList } = this.state;
        // const newCardsList = this.insertFun([...cardsList]);    // <----- in progress, needs some improvements ;)
        // console.log('new array', newCardsList);
        // this.setState({ cardsList: newCardsList });
    };

    deleteTag = (id, tag) => {
        const {cardsList} = this.state;
        const updatedCard = cardsList.find(item => item.id === id);
        delete updatedCard.tags[tag];                                   // <----- doesn't work on the MainPage
        this.setState({...cardsList, updatedCard});
    };

    render() {
        const { navigateToMain } = this.props;
        const { cardsList } = this.state;
        return (
            <div className='menu-page__wrapper'>
                <div className='food-menu__options'>
                    <button type='button' className='food-menu__button' onClick={this.sortByFun}>Sort by function</button>
                    <button type='button' className='food-menu__button' onClick={this.sortByInsert}>Insertion sort</button>
                    <button type='button' className='food-menu__button' onClick={this.addCard}>Add</button>
                    <button type='button' className='food-menu__button' onClick={this.deleteCard}>Delete</button>
                </div>
                <CardList cards={cardsList} deleteTag={this.deleteTag} />
                <div className='food-menu__btn-wrapper'>
                    <CommonBtn text='Back to main page' navigateToMain={navigateToMain} />
                </div>
            </div>
        );
    };
};

export default MenuPage;