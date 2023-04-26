import * as React from 'react';
import './InfoLine.css';


function InfoLine({ infoLineRef }) {
    return (
        <div className='information-line' ref={infoLineRef}>
            <div className='information-line__container'>
                <p className='information-line__text'>We're open and available for takeaway & delivery.</p>
                <button type='button' className='information-line__link'>Order Now</button>
            </div>
        </div>
    );
};

export default InfoLine;