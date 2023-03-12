import { Component } from 'react';
import CardListView from './CardListView';

class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCard: ''
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
            />
        );
    };
};

export default CardList;