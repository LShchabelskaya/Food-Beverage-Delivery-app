import { Component } from 'react';
import './CardList.css';
import CardItem from '../CardItem/CardItem';

class CardList extends Component {
    render() {
        return (
            <div className='food-menu__list'>
                {this.props.cards.map((card) => (
                    <CardItem 
                        key={card.id} 
                        title={card.title} 
                        price={card.price} 
                        text={card.text}
                        src={card.src}
                        alt={card.alt}
                    />
                ))}
            </div>
        );
    };
};

export default CardList;