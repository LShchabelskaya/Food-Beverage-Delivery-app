import { Component } from 'react';
import CardListView from './CardListView';

class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCard: '',
            draggedCard: {}
        };
    };

    makeActive = (id) => {
        const { activeCard } = this.state;
        if (activeCard !== id) {
            this.setState(() => ({activeCard: id}));
        } else {
            this.setState(() => ({activeCard: ''}));
        };
    };

    onDragHandler = (event, card) => {
        event.preventDefault();
        this.setState(() => ({
            draggedCard: card
        }));
    };

    onDragOverHandler = (event) => {
        event.preventDefault();
    };

    onDropHandler = (event) => {
        const { draggedCard } = this.state;
        const { updateMenuPageState } = this.props;
        const target = event.target;
        const closestCard = target.closest('.food-menu__card');
        updateMenuPageState(draggedCard.id, closestCard.id);
    };

    render() {
        const { cards, updateMainState, deleteTag } = this.props;
        const { activeCard } = this.state;
        return (
            <CardListView 
                cards={cards}
                deleteTag={deleteTag}
                updateMainState={updateMainState}
                makeActive={this.makeActive}
                activeCard={activeCard}
                onDragHandler={this.onDragHandler}
                onDragOverHandler={this.onDragOverHandler}
                onDropHandler={this.onDropHandler}
            />
        );
    };
};

export default CardList;