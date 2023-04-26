import * as React from 'react';
import './Faq.css';
import faq_photo_primary from '../../img/Section_5_img.svg';
import faq_photo_decor from '../../img/Section_5_img_decor.svg';
import CommonBtn from '../CommonBtn/CommonBtn';


function Faq() {
    return (
        <section className='faq'>
            <div className='faq__container'>
                <div className='faq__photo'>
                    <img className='faq__photo__primary' src={faq_photo_primary} alt='FAQ' />
                    <img className='faq__photo__decoration' src={faq_photo_decor} alt='FAQ decoration' />
                </div>
                <div className='faq__content'>
                    <h2 className='faq__title title'>Order online with our simple checkout.</h2>
                    <p className='faq__text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    <CommonBtn text='See our FAQ' />
                </div>
            </div>
        </section>
    );
};

export default Faq;