import * as React from 'react';
import './Faq.css';
import faq_photo_primary from '../../img/Section_5_img.svg';
import faq_photo_decor from '../../img/Section_5_img_decor.svg';
import CommonBtn from '../CommonBtn/CommonBtn';
import { useTranslation } from 'react-i18next';


function Faq() {
    const { t } = useTranslation();
    return (
        <section className='faq'>
            <div className='faq__container'>
                <div className='faq__photo'>
                    <img className='faq__photo__primary' src={faq_photo_primary} alt='FAQ' />
                    <img className='faq__photo__decoration' src={faq_photo_decor} alt='FAQ decoration' />
                </div>
                <div className='faq__content'>
                    <h2 className='faq__title title'>{t('faq.title')}</h2>
                    <p className='faq__text'>{t('faq.text')}</p>
                    <CommonBtn text='faq.button' />
                </div>
            </div>
        </section>
    );
};

export default Faq;