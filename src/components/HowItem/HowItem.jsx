import * as React from 'react';
import './HowItem.css';
import { useTranslation } from 'react-i18next';


function HowItem({ src, name, text }) {
    const { t } = useTranslation();
    return (
        <div className='how__item'>
            <img src={src} alt={t(name)} className='how__item__image' />
            <h3 className='how__item__title'>{t(name)}</h3>
            <p className='how__item__text'>{t(text)}</p>
        </div>
    );
};

export default HowItem;