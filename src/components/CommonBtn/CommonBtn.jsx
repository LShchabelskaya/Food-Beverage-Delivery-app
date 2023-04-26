import * as React from 'react';
import './CommonBtn.css';


function CommonBtn({ text, onClick }) {
    return <button className='common__button' type='button' onClick={onClick}>{text}</button>
};

export default CommonBtn;