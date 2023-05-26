import * as React from 'react';
import './OrderNow.css';
import order_now_photo from '../../img/Section_7_img.svg';
import { useTranslation } from 'react-i18next';


function OrderNow() {
    const { t } = useTranslation();
    return (
        <section className='order-now'>
            <div className='order-now__container'>
                <div className='order-now__photo'>
                    <img src={order_now_photo} alt='Order now' />
                </div>
                <div className='order-now__content'>
                    <h2 className='order-now__title'><span className='order-now__title__first'>{t('order.title.first')}</span>{t('order.title.second')}</h2>
                    <button type='button' className='order-now__button'>{t('order.button')}</button>
                </div>
            </div>
        </section>
    );
};

export default OrderNow;