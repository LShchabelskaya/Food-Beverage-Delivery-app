import * as React from 'react';
import './CommonBtn.css';
import { useTranslation } from 'react-i18next';


function CommonBtn({ text, onClick }) {
    const { t } = useTranslation();
    return <button className='common__button' type='button' onClick={onClick}>{t(text)}</button>
};

export default CommonBtn;