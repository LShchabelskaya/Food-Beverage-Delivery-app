import * as React from 'react';
import './FooterNavColumn.css';
import FooterLink from '../FooterLink/FooterLink';
import { useTranslation } from 'react-i18next';


function FooterNavColumn({ title, links }) {
    const { t } = useTranslation();
    return (
        <div className='footer__navigation__column'>
            <h3>{t(title)}</h3>
            <ul className='footer__list'>
                {links.map(link => (<FooterLink key={link} text={link} />))}
            </ul>
        </div>
    );
};

export default FooterNavColumn;