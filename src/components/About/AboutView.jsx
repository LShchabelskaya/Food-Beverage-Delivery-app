import * as React from 'react';
import './About.css';
import about_photo from '../../img/Section_2_img.svg';
import CommonBtn from '../CommonBtn/CommonBtn';
import { WithWrapperPopup } from '../PopupView/PopupView';
import { useTranslation } from 'react-i18next';

function AboutView({ isPopupOpen, operatePopup, navigateToMenu }) {
    const { t } = useTranslation();
    return (
        <section className='about'>
            <div className='about__container'>
                <div className='about__content'>
                    <h2 className='about__title title'>{t('about.title.first')}<span>{t('about.title.second')}</span></h2>
                    <p className='about__text'>{t('about.text')}</p>
                    <CommonBtn text='about.button' onClick={operatePopup} />
                </div>
                <div className='about__photo'>
                    <img src={about_photo} alt='About' />
                </div>
            </div>
            {isPopupOpen ? <WithWrapperPopup operatePopup={operatePopup} navigateToMenu={navigateToMenu} /> : null}
        </section>
    );
};

export default AboutView;