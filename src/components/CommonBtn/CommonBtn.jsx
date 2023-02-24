import { Component } from 'react';
import './CommonBtn.css';


class CommonBtn extends Component {
    render() {
        const { text, navigateToMenu, navigateToMain } = this.props;
        return <button className='common__button' type='button' onClick={text === 'See Full Menu' ? navigateToMenu : navigateToMain}>{ text }</button>
    };
};

export default CommonBtn;