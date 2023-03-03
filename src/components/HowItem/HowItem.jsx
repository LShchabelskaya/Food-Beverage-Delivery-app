import { Component } from 'react';
import './HowItem.css';

class HowItem extends Component {
    render() {
        const { src, name, text } = this.props;
        return (
            <div className='how__item'>
                <img src={src} alt={name} className='how__item__image' />
                <h3 className='how__item__title'>{name}</h3>
                <p className='how__item__text'>{text}</p>
            </div>
        );
    };
};

export default HowItem;