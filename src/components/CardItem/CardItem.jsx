import { Component } from 'react';
import CardItemView from './CardItemView';


class CardItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardInputValue: 1
        };
    };

    cardInputHandler = (e) => {
        this.setState(() => ({
            cardInputValue: e.target.value,
        }));
    };

    addToCart = () => {
        const { cardInputValue } = this.state;                            // <----- doesn't work on the MenuPage
        const { updateMainState } = this.props;
        if (+cardInputValue > 0 && Number.isInteger(+cardInputValue)) {
            updateMainState(cardInputValue);                               // <----- temporary solution until we use Context
        } else {
            this.setState(() => ({
                cardInputValue: 1,
            }));
        };
    };

    render() {
        const { card, title, price, text, src, alt, tags, deleteTag, id, makeActive, activeCard, onDragHandler } = this.props;
        const { cardInputValue } = this.state;
        return (
            <CardItemView
                card={card}
                title={title}
                price={price}
                text={text}
                src={src}
                alt={alt}
                tags={tags}
                deleteTag={deleteTag}
                id={id}
                cardInputValue={cardInputValue}
                cardInputHandler={this.cardInputHandler}
                addToCart={this.addToCart}
                makeActive={makeActive}
                activeCard={activeCard}
                onDragHandler={onDragHandler}
            />
        );
    };
};

export default CardItem;