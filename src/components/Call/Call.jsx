import * as React from 'react';
import './Call.css';
import call_photo from '../../img/Section_6_img.svg';
import CommonBtn from '../CommonBtn/CommonBtn';
import { useTranslation } from 'react-i18next';

function Call() {
    const { t } = useTranslation();
    return (
        <section className='call'>
            <div className='call__container'>
                <div className='call__content'>
                    <h2 className='call__title title'>{t('call.title')}</h2>
                    <p className='call__text'>{t('call.text')}</p>
                    <CommonBtn text='call.button' />
                </div>
                <div className='call__photo'>
                    <img src={call_photo} alt='Call our store' />
                </div>
            </div>
        </section>
    );
};

export default Call;