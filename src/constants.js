import burger_dreams from './img/food-menu_cards/food-menu_1.svg';
import burger_waldo from './img/food-menu_cards/food-menu_2.svg';
import burger_cali from './img/food-menu_cards/food-menu_3.svg';
import burger_bacon_buddy from './img/food-menu_cards/food-menu_4.svg';
import burger_spicy from './img/food-menu_cards/food-menu_5.svg';
import burger_classic from './img/food-menu_cards/food-menu_6.svg';
import { v4 as uuidv4 } from 'uuid';

export const cards = [
    {
        id: uuidv4(),
        title: 'Burger Dreams',
        price: '9.20',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src: burger_dreams,
        alt: 'Burger Dreams',
        tags: {
            taste: 5,
            shape: 3,
            size: 8
        }
    },
    {
        id: uuidv4(),
        title: 'Burger Waldo',
        price: '10.00',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src: burger_waldo,
        alt: 'Burger Waldo',
        tags: {
            taste: 5,
            shape: 3,
            size: 8
        }
    },
    {
        id: uuidv4(),
        title: 'Burger Cali',
        price: '8.00',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src: burger_cali,
        alt: 'Burger Cali',
        tags: {
            taste: 5,
            shape: 3,
            size: 8
        }
    },
    {
        id: uuidv4(),
        title: 'Burger Bacon Buddy',
        price: '9.99',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src: burger_bacon_buddy,
        alt: 'Burger Bacon Buddy',
        tags: {
            taste: 5,
            shape: 3,
            size: 8
        }
    },
    {
        id: uuidv4(),
        title: 'Burger Spicy',
        price: '9.20',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src: burger_spicy,
        alt: 'Burger Spicy',
        tags: {
            taste: 5,
            shape: 3,
            size: 8
        }
    },
    {
        id: uuidv4(),
        title: 'Burger Classic',
        price: '8.00',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src: burger_classic,
        alt: 'Burger Classic',
        tags: {
            taste: 5,
            shape: 3,
            size: 8
        }
    }
]