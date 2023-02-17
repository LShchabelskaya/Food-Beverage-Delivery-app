import { Component } from 'react';
import './CommonBtn.css';


class CommonBtn extends Component {
    render() {
        const { text } = this.props;
        return <button className='common__button' type='button'>{ text }</button>
    };
};

export default CommonBtn;