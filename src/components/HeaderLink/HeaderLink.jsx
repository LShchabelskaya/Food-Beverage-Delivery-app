import { Component } from 'react';
import './HeaderLink.css';

class HeaderLink extends Component {
    render() {
        const { goto, text } = this.props;
        return (
            <li>
                <button type='button' data-goto={goto} className='menu__link navlink'>{text}</button>
            </li>
        );
    };
};

export default HeaderLink;