import { Component } from 'react';
import './FooterLink.css';

class FooterLink extends Component {
    render() {
        const { text } = this.props;
        return (
            <li className='footer__item'>
                <button type='button' className='footer__link navlink'>{ text }</button>
            </li>
        );
    };
};

export default FooterLink;