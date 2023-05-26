import burger_dreams from './img/food-menu_cards/food-menu_1.svg';
import burger_waldo from './img/food-menu_cards/food-menu_2.svg';
import burger_cali from './img/food-menu_cards/food-menu_3.svg';
import burger_bacon_buddy from './img/food-menu_cards/food-menu_4.svg';
import burger_spicy from './img/food-menu_cards/food-menu_5.svg';
import burger_classic from './img/food-menu_cards/food-menu_6.svg';
import { v4 as uuidv4 } from 'uuid';

export const MOBILE_WIDTH = 768;
export const SCROLL_DURATION = 500;
export const SCROLL_OFFSET = -100;

export const cards = [
    {
        id: uuidv4(),
        title: 'cards.first.title',
        price: '9.20',
        text: 'cards.first.text',
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
        title: 'cards.second.title',
        price: '10.00',
        text: 'cards.second.text',
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
        title: 'cards.third.title',
        price: '8.00',
        text: 'cards.third.text',
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
        title: 'cards.fourth.title',
        price: '9.99',
        text: 'cards.fourth.text',
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
        title: 'cards.fifth.title',
        price: '9.20',
        text: 'cards.fifth.text',
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
        title: 'cards.sixth.title',
        price: '8.00',
        text: 'cards.sixth.text',
        src: burger_classic,
        alt: 'Burger Classic',
        tags: {
            taste: 5,
            shape: 3,
            size: 8
        }
    }
];

export const navlinks = [
    {
        name: 'header.home',
        to: 'main'
    }, 
    {
        name: 'header.order',
        to: 'order-now'
    },
    {
        name: 'header.about',
        to: 'about'
    },
    {
        name: 'header.faq',
        to: 'faq'
    },
    {
        name: 'header.call',
        to: 'call'
    }
];

export const columns = [
    {
        title: 'footer.columns.first.title',
        links: ['footer.columns.first.links.first', 'footer.columns.first.links.second', 'footer.columns.first.links.third', 'footer.columns.first.links.fourth']
    },
    {
        title: 'footer.columns.second.title',
        links: ['footer.columns.second.links.first', 'footer.columns.second.links.second', 'footer.columns.second.links.third', 'footer.columns.second.links.fourth']
    },
    {
        title: 'footer.columns.third.title',
        links: ['footer.columns.third.links.first']
    }
];