import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './InfoLine.css';


function InfoLine({ infoLineRef }) {
    const { t } = useTranslation();
    return (
        <div className='information-line' ref={infoLineRef}>
            <div className='information-line__container'>
                <p className='information-line__text'>{t('infoLine.info')}</p>
                <button type='button' className='information-line__link'>{t('infoLine.link')}</button>
            </div>
        </div>
    );
};

export default InfoLine;