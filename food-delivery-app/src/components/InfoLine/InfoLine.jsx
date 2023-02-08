import { Component } from 'react';
import './InfoLine.css';


class InfoLine extends Component {
    render() {
        return (
            <div className='information-line'>
                <div className='information-line__container'>
                    <p className='information-line__text'>We're open and available for takeaway & delivery.</p>
                    <a href='#' className='information-line__link'>Order Now</a>
                </div>
            </div>
        );
    };
};

export default InfoLine;