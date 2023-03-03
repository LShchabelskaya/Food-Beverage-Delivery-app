import { Component } from 'react';
import './FooterMediaItem.css';

class FooterMediaItem extends Component {
    render() {
        const { src, alt } = this.props;
        return (
            <div className='footer__media__wrapper'>
                <button type='button'><img src={src} alt={alt} /></button>
            </div>
        );
    };
};

export default FooterMediaItem;