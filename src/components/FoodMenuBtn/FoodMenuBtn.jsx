import * as React from 'react';
import './FoodMenuBtn.css';
import { useTranslation } from 'react-i18next';


function FoodMenuBtn({ text, onClick }) {
    const { t } = useTranslation();
    return <button type='button' className='food-menu__button' onClick={onClick}>{t(text)}</button>
};

export default FoodMenuBtn;