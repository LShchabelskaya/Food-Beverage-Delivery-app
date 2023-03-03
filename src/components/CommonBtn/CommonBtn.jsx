import { Component } from 'react';
import './CommonBtn.css';


class CommonBtn extends Component {
    render() {
        const { text, onClick } = this.props;
        return <button className='common__button' type='button' onClick={onClick}>{text}</button>
    };
};

export default CommonBtn;