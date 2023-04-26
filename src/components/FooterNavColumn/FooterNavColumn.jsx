import * as React from 'react';
import './FooterNavColumn.css';
import FooterLink from '../FooterLink/FooterLink';


function FooterNavColumn({ title, links }) {
    return (
        <div className='footer__navigation__column'>
            <h3>{title}</h3>
            <ul className='footer__list'>
                {links.map(link => (<FooterLink key={link} text={link} />))}
            </ul>
        </div>
    );
};

export default FooterNavColumn;