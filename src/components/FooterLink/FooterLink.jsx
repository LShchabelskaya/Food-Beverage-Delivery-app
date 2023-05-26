import * as React from 'react';
import './FooterLink.css';
import { useTranslation } from 'react-i18next';

function FooterLink({ text }) {
    const { t } = useTranslation();
    return (
        <li className='footer__item'>
            <button type='button' className='footer__link navlink'>{t(text)}</button>
        </li>
    );
};

export default FooterLink;