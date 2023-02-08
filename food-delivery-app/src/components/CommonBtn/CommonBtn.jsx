import { Component } from 'react';
import './CommonBtn.css';


class CommonBtn extends Component {
    render() {
        return <a href='#' className='common__button'>{this.props.text}</a>
    };
};

export default CommonBtn;