import { Component } from 'react';
import './CardListView.css';
import CardItem from '../CardItem/CardItem';

class CardListView extends Component {
    render() {
        const { cards, updateMainState, deleteTag, makeActive, activeCard } = this.props;
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
                        makeActive={makeActive}
                        activeCard={activeCard}
                    />
                ))}
            </div>
        );
    };
};

export default CardListView;