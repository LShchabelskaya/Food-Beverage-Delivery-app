import { Component } from 'react';
import './CardList.css';
import CardItem from '../CardItem/CardItem';

class CardList extends Component {
    render() {
        const { cards, updateAppState } = this.props;
        return (
            <div className='food-menu__list'>
                {cards.map((card) => (
                    <CardItem 
                        key={ card.id } 
                        title={ card.title } 
                        price={ card.price } 
                        text={ card.text }
                        src={ card.src }
                        alt={ card.alt }
                        updateAppState={ updateAppState }
                    />
                ))}
            </div>
        );
    };
};

export default CardList;