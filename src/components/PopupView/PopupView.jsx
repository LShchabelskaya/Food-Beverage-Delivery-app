import * as React from 'react';
import './PopupView.css';
import CommonBtn from '../CommonBtn/CommonBtn';
import { WithWrapper } from '../HOC/WithWrapper';
import { useTranslation } from 'react-i18next';

function PopupView({ operatePopup, navigateToMenu }) {
    const { t } = useTranslation();
    return (
        <div className='popup'>
            <div className='popup__body'>
                <div className='popup__content'>
                    <span className='popup__close' onClick={operatePopup}>x</span>
                    <div className='popup__title'>{t('popup.title')}</div>
                    <div className='popup__text'>{t('popup.text')}</div>
                    <CommonBtn text='popup.button' onClick={navigateToMenu} />
                </div>
            </div>
        </div>
    );
};

export const WithWrapperPopup = WithWrapper(PopupView);