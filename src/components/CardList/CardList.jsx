import { Component } from 'react';
import './CardList.css';
import CardItem from '../CardItem/CardItem';

class CardList extends Component {
    render() {
        const { cards, updateMainState, deleteTag } = this.props;
        return (
            <div className='food-menu__list'>
                {cards.map((card) => (
                    <CardItem
                        key={card.id}
                        title={card.title}
                        price={card.price}
                        text={card.text}
                        src={card.src}
                        alt={card.alt}
                        tags={card.tags}
                        id={card.id}
                        deleteTag={deleteTag}
                        updateMainState={updateMainState}
                    />
                ))}
            </div>
        );
    };
};

export default CardList;