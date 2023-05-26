import * as React from 'react';
import './Main.css';
import star from '../../img/Star_Trustpilot.svg';
import score_logo from '../../img/Trustpilot.svg';
import main_photo from '../../img/Section_1_img.svg';
import CommonBtn from '../CommonBtn/CommonBtn';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import { useTranslation } from 'react-i18next';


function Main() {
    const { t } = useTranslation();
    return (
        <section className='main'>
            <div className='main__container'>
                <ChangeLanguage />
                <div className='main__content'>
                    <h1 className='main__title'>{t('main.title.first')}<span>{t('main.title.second')}</span>{t('main.title.third')}</h1>
                    <p className='main__text'>{t('main.text')}</p>
                    <CommonBtn text='main.button' />
                    <button type='button' className='source__name'>
                        <img src={star} alt='Source logo' />
                        <img src={score_logo} alt='Trustpilot' />
                    </button>
                    <p className='source__score'><span>{t('main.score.first')}</span>{t('main.score.second')}</p>
                </div>
                <div className='main__photo'>
                    <img src={main_photo} alt='Main' />
                </div>
            </div>
        </section>
    );
};

export default Main;