import * as React from 'react';
import './FooterLink.css';


function FooterLink({ text }) {
    return (
        <li className='footer__item'>
            <button type='button' className='footer__link navlink'>{text}</button>
        </li>
    );
};

export default FooterLink;